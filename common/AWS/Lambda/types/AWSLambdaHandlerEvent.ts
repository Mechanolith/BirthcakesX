export type AWSLambdaHandlerEvent = {
    path: string;
    httpMethod: "GET" | "POST";
    headers: {
        [key: string]: string;
    };
    queryStringParameters: {
        [key: string]: string;
    };
    body: string;
    isBase64Encoded: boolean;
    pathParameters: {
        [key: string]: string;
    };
    requestContext: {
        identity: {
            cognitoIdentityId?: string;
        };
    };
};
