import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

type Props = Record<string, unknown>;

export const Store = (props: PropsWithChildren<Props>) => {
    const { children } = props;

    return <Provider store={store}>{children}</Provider>;
};
