"use client";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { useT } from "@/shared/i18n";
import { useUserMenu } from "../model/useUserMenu";

export const UserMenu = () => {
	const t = useT();
	const { isAuthenticated, logout, openLogin } = useUserMenu();

	return isAuthenticated ? (
		<IconButton onClick={logout} size="small" title={t.auth.logout}>
			<LogoutIcon fontSize="small" />
		</IconButton>
	) : (
		<IconButton onClick={openLogin} size="small" title={t.auth.signIn}>
			<LoginIcon fontSize="small" />
		</IconButton>
	);
};
