import { AWSLambdaHandlerResponse } from "../types/AWSLambdaHandlerResponse";
import { success } from "./success";

export const failure = (error: Error, statusCode = 500): AWSLambdaHandlerResponse => {
    const { name, message } = error;

    return success(
        {
            error: {
                name,
                message,
            },
        },
        statusCode,
    );
};
