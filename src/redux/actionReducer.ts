import { Action, AnyAction, Reducer } from "redux";

export type ActionReducerTest<TAction> = (candidate: Action) => candidate is Action & TAction;

export const actionReducer = <TState extends Record<string, unknown> = Record<string, unknown>, TAllAction extends Action = AnyAction, TAction extends Action = AnyAction>(initialState: TState, reducer: Reducer<TState, TAction>, test: ActionReducerTest<TAction>): Reducer<TState, TAllAction> => {
    return (previousState: TState = initialState, action: TAllAction): TState => {
        if (test(action)) {
            return reducer(previousState, action);
        }
        return previousState;
    };
};
