import type { User } from "../generated/prisma/client";
import type { Language, PublicUser, ThemeMode } from "../types";

const parseTheme = (value: string): ThemeMode =>
	value === "dark" ? "dark" : "light";

const parseLanguage = (value: string): Language =>
	value === "en" ? "en" : "ru";

export const toPublicUser = (user: User): PublicUser => ({
	id: user.id,
	email: user.email,
	username: user.username,
	displayName: user.displayName,
	avatarUrl: user.avatarUrl,
	createdAt: user.createdAt.toISOString(),
	settings: {
		theme: parseTheme(user.theme),
		language: parseLanguage(user.language),
	},
});
