import { AWSLambdaHandlerCallback } from "./AWSLambdaHandlerCallback";
import { AWSLambdaHandlerContext } from "./AWSLambdaHandlerContext";
import { AWSLambdaHandlerEvent } from "./AWSLambdaHandlerEvent";

export type AWSLambdaHandler<TEvent extends AWSLambdaHandlerEvent = AWSLambdaHandlerEvent, TContext extends AWSLambdaHandlerContext = AWSLambdaHandlerContext> = (event: TEvent, context: TContext, callback: AWSLambdaHandlerCallback) => void;
