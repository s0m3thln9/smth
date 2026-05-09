"use client";

import { useAppDispatch, useAppSelector } from "@/shared/store";
import { useUpdateSettingsMutation } from "../api/userApi";
import { toggleTheme } from "./settingsSlice";

export const useThemeToggle = () => {
	const theme = useAppSelector((state) => state.settings.theme);
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
	const dispatch = useAppDispatch();
	const [updateSettings] = useUpdateSettingsMutation();

	const toggle = () => {
		const next = theme === "light" ? "dark" : "light";
		dispatch(toggleTheme());
		if (isAuthenticated) updateSettings({ theme: next });
	};

	return { theme, toggle };
};
