import { AWSLambdaHandlerResponse } from "./AWSLambdaHandlerResponse";

export type AWSLambdaHandlerCallback = (error: Error | null | undefined, response: AWSLambdaHandlerResponse) => void;
