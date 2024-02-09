import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import atracoesSlice from "./modules/atracoes.slice";
import themeSlicer from "./modules/theme.slicer";

const rootRecucer = combineReducers({
    atracoes: atracoesSlice,
    theme: themeSlicer
});

export const persistedReducer = persistReducer(
    {
        key: "atlantida",
        storage: storage,
    },
    rootRecucer
);
