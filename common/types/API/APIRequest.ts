import { APIRequestParameters } from "./APIRequestParameters";
import { APIRequestTypes } from "./APIRequestTypes";

export type APIRequest = <TPayload>(method: APIRequestTypes, path: string, parameters?: APIRequestParameters) => Promise<TPayload>;
