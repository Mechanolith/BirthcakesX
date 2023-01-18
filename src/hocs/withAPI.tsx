import ky, { Options } from "ky";
import PQueue from "p-queue";
import queryString from "query-string";
import React, { ComponentType, PropsWithChildren } from "react";
import { apiFactory } from "../../common/factories/apiFactory";
import { API } from "../../common/types/API/API";
import { APIRequest } from "../../common/types/API/APIRequest";
import { APIRequestParameters } from "../../common/types/API/APIRequestParameters";
import { APIRequestTypes } from "../../common/types/API/APIRequestTypes";
import VError from "verror";

export type WithAPI = {
    api: API;
};

type ErrorPayload = {
    error: {
        name: string;
        message: string;
    };
};

const isHttpError = (error: Error): error is ky.HTTPError => {
    return error.hasOwnProperty("response");
};

const errorFromResponse = async (error: ky.HTTPError): Promise<VError> => {
    const payload: ErrorPayload = await error.response.json();

    const { name, message, ...info } = payload.error;

    return new VError(
        {
            name,
            info,
        },
        message,
    );
};

const withAPIFactory = () => {
    const requestQueuerGenerator = (): APIRequest => {
        const requestQueue = new PQueue({ concurrency: 1 });

        const requestQueuer: APIRequest = <TPayload,>(method: APIRequestTypes, path: string, parameters?: APIRequestParameters) => {
            return requestQueue.add(async () => {
                let uri = `/.netlify/functions/${path}`;
                const isGetOrDelete = method === "DELETE" || method === "GET";
                if (isGetOrDelete && parameters) {
                    uri = `${uri}?${queryString.stringify(parameters)}`;
                }

                const options: Options = {
                    method,
                };

                if (!isGetOrDelete && parameters) {
                    options.headers = {
                        "content-type": "application/json",
                    };
                    options.body = JSON.stringify(parameters);
                }

                try {
                    const response = await ky(uri, options).json<TPayload>();
                    return response;
                } catch (error) {
                    if (isHttpError(error)) {
                        const payloadError = await errorFromResponse(error);
                        const { name, message } = error;

                        const responseError = new VError(
                            {
                                name,
                                cause: payloadError,
                                info: {
                                    statusCode: error.response.status,
                                    statusText: error.response.statusText,
                                    responseError: error,
                                },
                            },
                            message,
                        );
                        throw responseError;
                    } else {
                        throw error;
                    }
                }
            });
        };

        return requestQueuer;
    };

    const api = apiFactory({
        requester: requestQueuerGenerator(),
    });

    return <TProps,>(Component: ComponentType<TProps & WithAPI>): ComponentType<TProps> => {
        const ComponentWithEnv = (props: PropsWithChildren<TProps>) => {
            return <Component {...props} api={api} />;
        };

        return ComponentWithEnv;
    };
};

export const withAPI = withAPIFactory();
