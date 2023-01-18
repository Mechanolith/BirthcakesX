import { createStore } from "redux";
import { persistedReducer } from "./persistedReducer";

export const persistedStore = createStore(persistedReducer);
