import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    text_1: string;
    text_2: string;
}

const initialState = {
    text_1: "Hello, it's React project",
    text_2: "M PLUS 1 code font"
} as initialStateType;

const storeSlice = createSlice({
    name: "appStore",
    initialState,
    reducers: {}
});

export default storeSlice.reducer;