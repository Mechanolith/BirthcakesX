import { Action } from "redux";
import { ReduxActionType } from "../../../common/types/ReduxActionType";
import { actionReducer } from "../actionReducer";
import { initialState } from "../initialState";

export type IncrementCounterAction = {
    type: ReduxActionType.IncrementCounter;
};

export const createIncrementCounterAction = (): IncrementCounterAction => {
    return {
        type: ReduxActionType.IncrementCounter,
    };
};

export const isIncrementCounterAction = (action: Action): action is IncrementCounterAction => {
    return action.type === ReduxActionType.IncrementCounter;
};

export const incrementCounterReducer = actionReducer(
    initialState,
    (previousState = initialState) => {
        return {
            ...previousState,
            counter: previousState.counter + 1,
        };
    },
    isIncrementCounterAction,
);
