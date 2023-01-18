import React, { ComponentType, PropsWithChildren } from "react";
import { config } from "../../common/consts/config";
import { Config } from "../../common/types/Config";

export type WithConfig = {
    config: Config;
};

export const withConfig = <TProps,>(Component: ComponentType<TProps & WithConfig>): ComponentType<TProps> => {
    const WithConfig = (props: PropsWithChildren<TProps>) => {
        return <Component {...props} config={config} />;
    };

    return WithConfig;
};
