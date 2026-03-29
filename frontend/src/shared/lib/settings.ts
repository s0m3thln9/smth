import type { Language, ThemeMode } from "@/shared/types";

export const parseTheme = (value: string | undefined): ThemeMode =>
	value === "dark" ? "dark" : "light";

export const parseLanguage = (value: string | undefined): Language =>
	value === "en" ? "en" : "ru";
