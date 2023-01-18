import { config } from "../../../consts/config";
import { Config } from "../../../types/Config";
import { AWSLambdaAsyncHandler } from "../types/AWSLambdaAsyncHandler";
import { AWSLambdaHandlerContext } from "../types/AWSLambdaHandlerContext";
import { AWSLambdaHandlerEvent } from "../types/AWSLambdaHandlerEvent";

type WithConfig = {
    config: Config;
};

export const withConfig = <TEvent extends AWSLambdaHandlerEvent = AWSLambdaHandlerEvent, TContext extends AWSLambdaHandlerContext = AWSLambdaHandlerContext>(handler: AWSLambdaAsyncHandler<TEvent, TContext & WithConfig>): AWSLambdaAsyncHandler<TEvent, TContext> => {
    return async (event, context) => {
        const extendedContext: TContext & WithConfig = {
            ...context,
            config,
        };

        return handler(event, extendedContext);
    };
};
