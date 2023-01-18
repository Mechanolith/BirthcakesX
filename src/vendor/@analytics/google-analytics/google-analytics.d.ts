/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "@analytics/google-analytics" {
    type AnalyticsPlugin = {
        name: string;
        EVENTS?: any;
        config?: any;
        initialize?: (...params: any[]) => any;
        page?: (...params: any[]) => any;
        track?: (...params: any[]) => any;
        identify?: (...params: any[]) => any;
        loaded?: (...params: any[]) => any;
        ready?: (...params: any[]) => any;
    };

    type GoogleAnalyticsConfig = {
        trackingId: string;
    };

    interface IGoogleAnalyticsStatic {
        (config: GoogleAnalyticsConfig): AnalyticsPlugin;
    }

    const googleAnalytics: IGoogleAnalyticsStatic;

    export default googleAnalytics;
}
