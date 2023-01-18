import { API } from "../types/API/API";
import { APIConfig } from "../types/API/APIConfig";
import { APIMethodRequest } from "../types/API/APIMethodRequest";
import { APIRequestParameters } from "../types/API/APIRequestParameters";
import { APIRequestTypes } from "../types/API/APIRequestTypes";

/**
 * Creates an API instance.
 *
 * @author Cam Morrow
 *
 * @param {APIConfig}  apiConfig
 */
export const apiFactory = (apiConfig: APIConfig): API => {
    const request = async <TPayload>(type: APIRequestTypes, path: string, parameters: APIRequestParameters = {}): Promise<TPayload> => {
        return apiConfig.requester<TPayload>(type, path, parameters);
    };

    const [get, post, remove, put] = ["GET", "POST", "DELETE", "PUT"].map((method) => {
        return request.bind(undefined, method as APIRequestTypes) as APIMethodRequest;
    });

    return {
        get,
        post,
        put,
        remove,
        request,
    };
};
