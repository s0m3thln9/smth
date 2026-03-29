export type ThemeMode = "light" | "dark";
export type Language = "ru" | "en";

export interface PublicUserSettings {
	theme: ThemeMode;
	language: Language;
}

export interface PublicUser {
	id: string;
	email: string;
	username: string;
	displayName: string;
	avatarUrl: string | null;
	createdAt: string;
	settings: PublicUserSettings;
}

export interface JwtTokenPayload {
	userId: string;
}

export interface RegisterBody {
	email?: string;
	password?: string;
	username?: string;
}

export interface LoginBody {
	email?: string;
	password?: string;
}

export interface UpdateProfileBody {
	displayName?: string;
	avatarUrl?: string | null;
}

export interface UpdateSettingsBody {
	theme?: ThemeMode;
	language?: Language;
}
