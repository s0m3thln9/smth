import type { PaletteOptions } from "@mui/material";

const sharedPalette = {
	primary: {
		light: "#818cf8",
		main: "#4f46e5",
		dark: "#3730a3",
		contrastText: "#ffffff",
	},
	secondary: {
		light: "#f9a8d4",
		main: "#ec4899",
		dark: "#be185d",
		contrastText: "#ffffff",
	},
	success: {
		main: "#22c55e",
		dark: "#15803d",
		light: "#86efac",
	},
	warning: {
		main: "#f59e0b",
		dark: "#b45309",
		light: "#fde68a",
	},
	error: {
		main: "#ef4444",
		dark: "#b91c1c",
		light: "#fca5a5",
	},
};

export const lightPalette: PaletteOptions = {
	mode: "light",
	...sharedPalette,
	background: {
		default: "#f8f7f4",
		paper: "#ffffff",
	},
	text: {
		primary: "#1c1917",
		secondary: "#78716c",
		disabled: "#a8a29e",
	},
	divider: "#e7e5e4",
};

export const darkPalette: PaletteOptions = {
	mode: "dark",
	...sharedPalette,
	background: {
		default: "#141210",
		paper: "#1c1917",
	},
	text: {
		primary: "#fafaf9",
		secondary: "#a8a29e",
		disabled: "#57534e",
	},
	divider: "#292524",
};
