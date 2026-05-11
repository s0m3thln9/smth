"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import NextLink from "next/link";
import { AuthModal, useAuthRedirect } from "@/features/auth";
import { useT } from "@/shared/i18n";
import { useMobileDrawer } from "../model/useMobileDrawer";
import { LanguageSelect } from "./LanguageSelect";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";
import { UserMenu } from "./UserMenu";

export const Header = () => {
	const t = useT();
	const { open, onOpen, onClose } = useMobileDrawer();
	useAuthRedirect();

	return (
		<Box
			component="header"
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				py: { xs: 2, md: 3 },
				gap: 2,
			}}
		>
			<Typography
				component={NextLink}
				href="/"
				variant="h3"
				sx={{
					fontSize: { xs: 24, md: 32 },
					textDecoration: "none",
					color: "inherit",
				}}
			>
				SMTH
			</Typography>

			<Box sx={{ display: { xs: "none", md: "flex" }, flex: 1, ml: 4 }}>
				<NavLinks direction="row" />
			</Box>

			<Stack
				direction="row"
				alignItems="center"
				gap={1}
				sx={{ display: { xs: "none", md: "flex" } }}
			>
				<ThemeToggle />
				<LanguageSelect />
				<UserMenu />
			</Stack>

			<IconButton
				onClick={onOpen}
				sx={{ display: { xs: "inline-flex", md: "none" } }}
				aria-label={t.nav.menu}
			>
				<MenuIcon />
			</IconButton>

			<Drawer
				anchor="right"
				open={open}
				onClose={onClose}
				slotProps={{ paper: { sx: { width: 280 } } }}
			>
				<Stack sx={{ p: 2 }} gap={2}>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography variant="h4">{t.nav.menu}</Typography>
						<IconButton onClick={onClose} size="small" aria-label="close">
							<CloseIcon />
						</IconButton>
					</Stack>

					<Divider />

					<NavLinks direction="column" onNavigate={onClose} />

					<Divider />

					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						gap={1}
					>
						<ThemeToggle />
						<LanguageSelect />
						<UserMenu />
					</Stack>
				</Stack>
			</Drawer>

			<AuthModal />
		</Box>
	);
};
