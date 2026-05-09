"use client";

import { MenuItem, Select } from "@mui/material";
import { useLanguage } from "@/entities/user/model/useLanguage";

export const LanguageSelect = () => {
	const { language, changeLanguage } = useLanguage();

	return (
		<Select
			value={language}
			onChange={(e) => {
				const val = e.target.value;
				if (val === "ru" || val === "en") changeLanguage(val);
			}}
			size="small"
			sx={{ minWidth: 80 }}
		>
			<MenuItem value="ru">RU</MenuItem>
			<MenuItem value="en">EN</MenuItem>
		</Select>
	);
};
