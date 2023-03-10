import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { reducer } from "./reducer";

const persistConfig = {
    key: "root",
    storage,
};

export const persistedReducer = persistReducer(persistConfig, reducer);
