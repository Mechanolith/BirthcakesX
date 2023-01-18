import { IncrementCounterAction } from "./actions/incrementCounterAction";
import { SetCounterAction } from "./actions/setCounterAction";

export type Action = SetCounterAction | IncrementCounterAction;
