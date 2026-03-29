import type { Language, ThemeMode } from "@/shared/types";

export interface UserSettings {
	theme: ThemeMode;
	language: Language;
}

export interface User {
	id: string;
	email: string;
	username: string;
	displayName: string;
	avatarUrl: string | null;
	createdAt: string;
	settings: UserSettings;
}

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
