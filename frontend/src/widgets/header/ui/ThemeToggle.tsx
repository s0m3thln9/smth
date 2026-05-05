"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import { toggleTheme, useUpdateSettingsMutation } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/store";

export const ThemeToggle = () => {
	const theme = useAppSelector((state) => state.settings.theme);
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
	const dispatch = useAppDispatch();
	const [updateSettings] = useUpdateSettingsMutation();

	const handleToggleTheme = () => {
		const next = theme === "light" ? "dark" : "light";
		dispatch(toggleTheme());
		if (isAuthenticated) updateSettings({ theme: next });
	};

	return (
		<IconButton
			onClick={handleToggleTheme}
			size="small"
			aria-label="toggle theme"
		>
			{theme === "dark" ? (
				<LightModeIcon fontSize="small" />
			) : (
				<DarkModeIcon fontSize="small" />
			)}
		</IconButton>
	);
};
