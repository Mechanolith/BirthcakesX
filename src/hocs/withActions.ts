import { ComponentType } from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { createIncrementCounterAction } from "../redux/actions/incrementCounterAction";
import { createSetCounterAction } from "../redux/actions/setCounterAction";

export type WithActions = {
    actions: {
        setCounter: typeof createSetCounterAction;
        incrementCounter: typeof createIncrementCounterAction;
    };
};

const wrapDispatch = <T extends Action, U extends unknown[]>(dispatch: Dispatch<T>, fn: (...args: U) => T) => {
    return (...args: U) => {
        return dispatch(fn(...args));
    };
};

export const withActions = <TProps>(Component: ComponentType<TProps & WithActions>): ComponentType<TProps> => {
    const mapDispatchToProps = (dispatch: Dispatch): WithActions => {
        return {
            actions: {
                setCounter: wrapDispatch(dispatch, createSetCounterAction),
                incrementCounter: wrapDispatch(dispatch, createIncrementCounterAction),
            },
        };
    };

    return connect(undefined, mapDispatchToProps)(Component as ComponentType<unknown>);
};
