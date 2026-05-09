"use client";

import { clearUser } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { useLogoutMutation } from "../api/authApi";

export const useLogout = () => {
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
	const dispatch = useAppDispatch();
	const [logoutMutation] = useLogoutMutation();

	const logout = async () => {
		await logoutMutation().unwrap().catch(() => {});
		dispatch(clearUser());
	};

	return { isAuthenticated, logout };
};
