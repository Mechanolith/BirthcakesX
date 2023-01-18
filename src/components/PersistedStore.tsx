import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "../redux/persistedStore";
import { persistor } from "../redux/persistor";

type Props = Record<string, unknown>;

export const PersistedStore = (props: PropsWithChildren<Props>) => {
    const { children } = props;

    return (
        <Provider store={persistedStore}>
            <PersistGate persistor={persistor}>{children}</PersistGate>
        </Provider>
    );
};
