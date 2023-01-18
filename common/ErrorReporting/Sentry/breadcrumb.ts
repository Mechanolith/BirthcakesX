import { addBreadcrumb, Breadcrumb } from "@sentry/node";

export const breadcrumb = (crumb: Breadcrumb): void => {
    addBreadcrumb(crumb);
};
