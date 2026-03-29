"use client";

import { useAppSelector } from "@/shared/store";
import { type Translations, translations } from "./translations";

export const useT = (): Translations => {
	const language = useAppSelector((state) => state.settings.language);
	return translations[language] ?? translations.ru;
};
