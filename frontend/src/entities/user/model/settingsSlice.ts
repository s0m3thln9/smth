import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Language, ThemeMode } from "@/shared/types";
import type { SettingsState } from "./types";

const initialState: SettingsState = {
	theme: "light",
	language: "ru",
	isSyncing: false,
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setSettingsFromServer: (
			state,
			action: PayloadAction<{ theme: ThemeMode; language: Language }>,
		) => {
			state.theme = action.payload.theme;
			state.language = action.payload.language;
		},
		toggleTheme: (state) => {
			state.theme = state.theme === "light" ? "dark" : "light";
		},
		setTheme: (state, action: PayloadAction<ThemeMode>) => {
			state.theme = action.payload;
		},
		setLanguage: (state, action: PayloadAction<Language>) => {
			state.language = action.payload;
		},
		setSyncing: (state, action: PayloadAction<boolean>) => {
			state.isSyncing = action.payload;
		},
	},
});

export const {
	setSettingsFromServer,
	toggleTheme,
	setTheme,
	setLanguage,
	setSyncing,
} = settingsSlice.actions;
