"use client";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "@/shared/theme";
import { useAppSelector } from "@/shared/store";
import type { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const mode = useAppSelector((state) => state.settings.theme);
	const theme = mode === "dark" ? darkTheme : lightTheme;

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</MuiThemeProvider>
	);
};
