import reduceReducers from "reduce-reducers";
import { Reducer } from "redux";
import { State } from "../../common/types/State";
import { Action } from "./Action";
import { incrementCounterReducer } from "./actions/incrementCounterAction";
import { setCounterReducer } from "./actions/setCounterAction";
import { initialState } from "./initialState";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reducer: Reducer<State, Action> = reduceReducers<State>(initialState, setCounterReducer, incrementCounterReducer) as any;
