import { captureException, flush } from "@sentry/node";
import { ErrorReporter } from "../types/ErrorReporter";
import { initialise } from "./initialise";

export const reportError: ErrorReporter = async (error: Error) => {
    initialise();
    captureException(error);
    await flush();
};
