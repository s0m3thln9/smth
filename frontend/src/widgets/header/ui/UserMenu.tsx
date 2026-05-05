"use client";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { clearUser } from "@/entities/user";
import { useLogoutMutation } from "@/features/auth";
import { useT } from "@/shared/i18n";
import { useAppDispatch, useAppSelector } from "@/shared/store";

export const UserMenu = () => {
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
	const dispatch = useAppDispatch();
	const [logoutMutation] = useLogoutMutation();
	const t = useT();

	const handleLogout = async () => {
		await logoutMutation()
			.unwrap()
			.catch(() => {});
		dispatch(clearUser());
	};

	const handleLogin = () => {
		// TODO: open AuthModal — see docs/03-Features/Landing Page.md
	};

	return isAuthenticated ? (
		<IconButton onClick={handleLogout} size="small" title={t.auth.logout}>
			<LogoutIcon fontSize="small" />
		</IconButton>
	) : (
		<IconButton onClick={handleLogin} size="small" title={t.auth.signIn}>
			<LoginIcon fontSize="small" />
		</IconButton>
	);
};
