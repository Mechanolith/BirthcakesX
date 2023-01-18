import { Router } from "@reach/router";
import React, { PropsWithChildren, useEffect } from "react";
import { WithAnalytics, withAnalytics } from "../hocs/withAnalytics";
import { SEO } from "./SEO";

// Import either the regular non-persisted store, or the persisted one
import { PersistedStore as Store } from "./PersistedStore";

interface IProps {}

const LayoutDecorated = (props: PropsWithChildren<IProps & WithAnalytics>) => {
    const { children, analytics } = props;

    useEffect(() => {
        analytics.page();
    }, []);

    return (
        <Store>
            <SEO title={"Dawn of the Tenth Age"} />
            <Router>{children}</Router>
        </Store>
    );
};

export const Layout = withAnalytics(LayoutDecorated);
