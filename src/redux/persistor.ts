import { persistStore } from "redux-persist";
import { persistedStore } from "./persistedStore";

export const persistor = persistStore(persistedStore);
