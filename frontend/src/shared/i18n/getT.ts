import { cookies } from "next/headers";
import { parseLanguage } from "@/shared/lib";
import { translations } from "./translations";
import type { Translations } from "./translations";

export const getT = async (): Promise<Translations> => {
	const cookieStore = await cookies();
	const language = parseLanguage(cookieStore.get("language")?.value);
	return translations[language] ?? translations.ru;
};
