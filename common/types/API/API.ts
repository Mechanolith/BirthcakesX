import { APIMethodRequest } from "./APIMethodRequest";
import { APIRequest } from "./APIRequest";

export type API = {
    readonly get: APIMethodRequest;
    readonly post: APIMethodRequest;
    readonly remove: APIMethodRequest;
    readonly put: APIMethodRequest;
    readonly request: APIRequest;
};
