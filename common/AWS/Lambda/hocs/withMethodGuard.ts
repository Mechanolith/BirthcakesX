import { failure } from "../responses/failure";
import { AWSLambdaAsyncHandler } from "../types/AWSLambdaAsyncHandler";

export const withMethodGuard = (handler: AWSLambdaAsyncHandler, method: "GET" | "POST"): AWSLambdaAsyncHandler => {
    return async (event, context) => {
        if (event.httpMethod !== method) {
            return failure(new Error(`Method "${event.httpMethod}" not allowed`), 405);
        }

        return await handler(event, context);
    };
};
