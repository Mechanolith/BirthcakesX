import { AWSLambdaHandlerResponse } from "../types/AWSLambdaHandlerResponse";

export const success = (payload: unknown, statusCode = 200): AWSLambdaHandlerResponse => {
    return {
        statusCode,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };
};
