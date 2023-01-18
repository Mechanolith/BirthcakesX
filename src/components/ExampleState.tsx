import React, { PropsWithChildren } from "react";
import { WithActions, withActions } from "../hocs/withActions";
import { WithState, withState } from "../hocs/withState";

interface IProps {}

const ExampleStateDecorated = (props: PropsWithChildren<IProps & WithState & WithActions>) => {
    const {
        children,
        state,
        actions: { incrementCounter, setCounter },
    } = props;
    return (
        <>
            State Counter: {state.counter}
            {children}
            <button onClick={incrementCounter}>Increment</button>
            <button
                onClick={() => {
                    setCounter(0);
                }}
            >
                Reset
            </button>
        </>
    );
};

export const ExampleState = withState(withActions(ExampleStateDecorated));
