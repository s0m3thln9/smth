"use client";
import type { ReactNode } from "react";
import { useRef } from "react";
import { Provider } from "react-redux";
import type { User } from "@/entities/user/model/types";
import { type AppStore, makeStore } from "@/shared/store";
import type { Language, ThemeMode } from "@/shared/types";

interface Props {
	children: ReactNode;
	initialTheme?: ThemeMode;
	initialLanguage?: Language;
	initialUser?: User | null;
}

export const StoreProvider = ({
	children,
	initialTheme,
	initialLanguage,
	initialUser,
}: Props) => {
	const storeRef = useRef<AppStore | null>(null);
	if (!storeRef.current) {
		storeRef.current = makeStore({
			theme: initialTheme,
			language: initialLanguage,
			user: initialUser ?? null,
		});
	}
	return <Provider store={storeRef.current}>{children}</Provider>;
};
