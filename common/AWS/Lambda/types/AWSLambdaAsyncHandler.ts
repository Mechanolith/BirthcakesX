import { AWSLambdaHandlerContext } from "./AWSLambdaHandlerContext";
import { AWSLambdaHandlerEvent } from "./AWSLambdaHandlerEvent";
import { AWSLambdaHandlerResponse } from "./AWSLambdaHandlerResponse";

export type AWSLambdaAsyncHandler<TEvent extends AWSLambdaHandlerEvent = AWSLambdaHandlerEvent, TContext extends AWSLambdaHandlerContext = AWSLambdaHandlerContext> = (event: TEvent, context: TContext) => Promise<AWSLambdaHandlerResponse>;
