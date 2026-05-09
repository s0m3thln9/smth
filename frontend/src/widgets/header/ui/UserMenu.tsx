"use client";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { useLogout } from "@/features/auth/model/useLogout";
import { useT } from "@/shared/i18n";

export const UserMenu = () => {
	const { isAuthenticated, logout } = useLogout();
	const t = useT();

	const handleLogin = () => {
		// TODO: open AuthModal
	};

	return isAuthenticated ? (
		<IconButton onClick={logout} size="small" title={t.auth.logout}>
			<LogoutIcon fontSize="small" />
		</IconButton>
	) : (
		<IconButton onClick={handleLogin} size="small" title={t.auth.signIn}>
			<LoginIcon fontSize="small" />
		</IconButton>
	);
};
