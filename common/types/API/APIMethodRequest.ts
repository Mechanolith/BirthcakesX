import { APIRequestParameters } from "./APIRequestParameters";

export type APIMethodRequest = <TPayload>(path: string, parameters?: APIRequestParameters) => Promise<TPayload>;
