"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import { useThemeToggle } from "@/entities/user/model/useThemeToggle";

export const ThemeToggle = () => {
	const { theme, toggle } = useThemeToggle();

	return (
		<IconButton onClick={toggle} size="small" aria-label="toggle theme">
			{theme === "dark" ? (
				<LightModeIcon fontSize="small" />
			) : (
				<DarkModeIcon fontSize="small" />
			)}
		</IconButton>
	);
};
