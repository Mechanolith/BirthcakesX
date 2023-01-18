import googleAnalytics from "@analytics/google-analytics";
import Analytics, { AnalyticsInstance } from "analytics";
import React, { ComponentType } from "react";

export type WithAnalytics = {
    analytics: AnalyticsInstance;
};

const withAnalyticsFactory = () => {
    const analytics = Analytics({
        app: "steps-tracker",
        plugins: [
            googleAnalytics({
                trackingId: `${process.env.GATSBY_GOOGLE_ANALYTICS_ID}`,
            }),
        ],
    });

    return <TProps,>(Component: ComponentType<TProps & WithAnalytics>): ComponentType<TProps> => {
        const WithAnalytics = (props: TProps) => {
            return <Component {...props} analytics={analytics} />;
        };

        return WithAnalytics;
    };
};

export const withAnalytics = withAnalyticsFactory();
