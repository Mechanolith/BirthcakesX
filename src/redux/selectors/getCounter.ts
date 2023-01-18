import { State } from "../../../common/types/State";

export const getCounter = (state: State): number => {
    return state.counter;
};
