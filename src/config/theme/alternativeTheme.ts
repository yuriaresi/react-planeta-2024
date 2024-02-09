import { ThemeOptions, createTheme } from "@mui/material";


export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#63b53f',
        },
        secondary: {
            main: '#f50057',
        },
    },
};



export const alternativeTheme = createTheme(themeOptions)