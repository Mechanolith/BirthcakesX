export type AWSLambdaHandlerResponse = {
    isBase64Encoded?: boolean;
    statusCode: number;
    headers?: {
        [key: string]: string;
    };
    body: string;
};
