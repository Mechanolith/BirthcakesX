import { Action } from "redux";
import { ReduxActionType } from "../../../common/types/ReduxActionType";
import { actionMergeReducer } from "../actionMergeReducer";
import { initialState } from "../initialState";

export type SetCounterAction = {
    type: ReduxActionType.SetCounter;
    counter: number;
};

export const createSetCounterAction = (counter: number): SetCounterAction => {
    return {
        type: ReduxActionType.SetCounter,
        counter,
    };
};

export const isSetCounterAction = (action: Action): action is SetCounterAction => {
    return action.type === ReduxActionType.SetCounter;
};

export const setCounterReducer = actionMergeReducer(initialState, isSetCounterAction);
