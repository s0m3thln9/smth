"use client";

import { openAuthModal, useLogout } from "@/features/auth";
import { useAppDispatch } from "@/shared/store";

export const useUserMenu = () => {
	const { isAuthenticated, logout } = useLogout();
	const dispatch = useAppDispatch();
	const openLogin = () => dispatch(openAuthModal("login"));

	return { isAuthenticated, logout, openLogin };
};
