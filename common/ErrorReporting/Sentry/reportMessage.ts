import { captureMessage, flush, Severity } from "@sentry/node";
import { initialise } from "./initialise";

export const reportMessage = async (message: string, level?: Severity): Promise<void> => {
    initialise();
    captureMessage(message, level);
    await flush();
};
