import type { Language, ThemeMode } from "./settings";

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
