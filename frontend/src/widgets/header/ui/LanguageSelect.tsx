"use client";

import { MenuItem, Select } from "@mui/material";
import { setLanguage, useUpdateSettingsMutation } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import type { Language } from "@/shared/types";

export const LanguageSelect = () => {
	const language = useAppSelector((state) => state.settings.language);
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
	const dispatch = useAppDispatch();
	const [updateSettings] = useUpdateSettingsMutation();

	const handleChangeLanguage = (next: Language) => {
		dispatch(setLanguage(next));
		if (isAuthenticated) updateSettings({ language: next });
	};

	return (
		<Select
			value={language}
			onChange={(e) => {
				const val = e.target.value;
				if (val === "ru" || val === "en") handleChangeLanguage(val);
			}}
			size="small"
			sx={{ minWidth: 80 }}
		>
			<MenuItem value="ru">RU</MenuItem>
			<MenuItem value="en">EN</MenuItem>
		</Select>
	);
};
