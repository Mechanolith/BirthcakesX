import { configureScope, init } from "@sentry/node";

const dsn = `${process.env.SENTRY_DSN}`;
const release = `${process.env.COMMIT_REF}`;
let sentryInitialized = false;

export const initialise = (): void => {
    if (dsn && !sentryInitialized) {
        init({ dsn, release });
        configureScope((scope) => {
            scope.setTag("execution_environment", "lambda");
        });
        sentryInitialized = true;
    }
};

initialise();
