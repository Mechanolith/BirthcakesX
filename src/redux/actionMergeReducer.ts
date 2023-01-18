import { Action, AnyAction, Reducer } from "redux";
import { actionReducer, ActionReducerTest } from "./actionReducer";

type MergableAction<TState extends Record<string, unknown>> = Action & Partial<TState>;

export const actionMergeReducer = <TState extends Record<string, unknown> = Record<string, unknown>, TAllAction extends Action = AnyAction, TAction extends MergableAction<TState> = AnyAction>(initialState: TState, test: ActionReducerTest<TAction>): Reducer<TState, TAllAction> => {
    return actionReducer(
        initialState,
        (previousState = initialState, action) => {
            // Remove the type so we can apply everything else
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { type, ...mergeProps } = action;
            return { ...previousState, ...mergeProps };
        },
        test,
    );
};
