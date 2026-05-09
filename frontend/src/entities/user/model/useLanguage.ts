"use client";

import { useAppDispatch, useAppSelector } from "@/shared/store";
import type { Language } from "@/shared/types";
import { useUpdateSettingsMutation } from "../api/userApi";
import { setLanguage } from "./settingsSlice";

export const useLanguage = () => {
	const language = useAppSelector((state) => state.settings.language);
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
	const dispatch = useAppDispatch();
	const [updateSettings] = useUpdateSettingsMutation();

	const changeLanguage = (next: Language) => {
		dispatch(setLanguage(next));
		if (isAuthenticated) updateSettings({ language: next });
	};

	return { language, changeLanguage };
};
