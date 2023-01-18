import { createSelector } from "reselect";
import { getCounter } from "./getCounter";

export const getCounterPlusOne = createSelector([getCounter], (counter: number) => {
    return counter + 1;
});
