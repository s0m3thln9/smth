import { createTheme } from "@mui/material";
import { components } from "./components";
import { darkPalette, lightPalette } from "./palette";
import { typography } from "./typography";

const baseTheme = {
	typography,
	components,
	shape: {
		borderRadius: 10,
	},
	spacing: 8,
};

export const lightTheme = createTheme({
	...baseTheme,
	palette: lightPalette,
});

export const darkTheme = createTheme({
	...baseTheme,
	palette: darkPalette,
});
