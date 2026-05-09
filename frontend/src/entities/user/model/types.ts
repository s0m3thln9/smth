import type { Language, ThemeMode } from "@/shared/types";
import type { User, UserSettings } from "@/shared/types";

export type { User, UserSettings };

export interface UserState {
	profile: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
}

export interface SettingsState {
	theme: ThemeMode;
	language: Language;
	isSyncing: boolean;
}

export type StateWithSettings = { settings: SettingsState };
