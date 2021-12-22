import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "@/features/storeSlice";

export const store = configureStore({
    reducer: {
        app: storeSlice
    }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;