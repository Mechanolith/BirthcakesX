import { failure } from "../responses/failure";
import { AWSLambdaAsyncHandler } from "../types/AWSLambdaAsyncHandler";
import { AWSLambdaHandlerContext } from "../types/AWSLambdaHandlerContext";
import { AWSLambdaHandlerEvent } from "../types/AWSLambdaHandlerEvent";

export const withGenericErrorResponse = <TEvent extends AWSLambdaHandlerEvent = AWSLambdaHandlerEvent, TContext extends AWSLambdaHandlerContext = AWSLambdaHandlerContext>(handler: AWSLambdaAsyncHandler<TEvent, TContext>): AWSLambdaAsyncHandler<TEvent, TContext> => {
    return async (event, context) => {
        context.callbackWaitsForEmptyEventLoop = false;
        try {
            return await handler(event, context);
        } catch (error) {
            return failure(error);
        }
    };
};
