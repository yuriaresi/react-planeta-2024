import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: true,
    reducers: {
        mudarThema: (state) => {
            return !state
        }
    }
})

export default themeSlice.reducer


export const { mudarThema } = themeSlice.actions