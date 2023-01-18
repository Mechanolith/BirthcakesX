import { reportError } from "../../../ErrorReporting/reportError";
import { AWSLambdaAsyncHandler } from "../types/AWSLambdaAsyncHandler";

export const withErrorReporter = (handler: AWSLambdaAsyncHandler): AWSLambdaAsyncHandler => {
    return async (event, context) => {
        context.callbackWaitsForEmptyEventLoop = false;
        try {
            return await handler(event, context);
        } catch (error) {
            await reportError(error);
            throw error;
        }
    };
};
