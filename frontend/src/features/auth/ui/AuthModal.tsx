"use client";

import CloseIcon from "@mui/icons-material/Close";
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { useT } from "@/shared/i18n";
import { useAuthModal } from "../model/useAuthModal";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const AuthModal = () => {
	const t = useT();
	const { isOpen, isLogin, close, toggleMode } = useAuthModal();

	return (
		<Dialog
			open={isOpen}
			onClose={close}
			fullWidth
			maxWidth="xs"
			slotProps={{ paper: { sx: { borderRadius: 2 } } }}
		>
			<DialogTitle
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				{isLogin ? t.auth.loginTitle : t.auth.registerTitle}
				<IconButton onClick={close} size="small" aria-label="close">
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<Stack gap={2} sx={{ pt: 1 }}>
					{isLogin ? <LoginForm /> : <RegisterForm />}
					<Stack
						direction="row"
						gap={0.5}
						alignItems="center"
						justifyContent="center"
					>
						<Typography variant="body2" color="text.secondary">
							{isLogin ? t.auth.noAccount : t.auth.hasAccount}
						</Typography>
						<Button
							size="small"
							onClick={toggleMode}
							sx={{ textTransform: "none" }}
						>
							{isLogin ? t.auth.switchToRegister : t.auth.switchToLogin}
						</Button>
					</Stack>
				</Stack>
			</DialogContent>
		</Dialog>
	);
};
