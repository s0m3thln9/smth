"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	CircularProgress,
	Container,
	Divider,
	IconButton,
	MenuItem,
	Select,
	Stack,
	Switch,
	Tab,
	Tabs,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import {
	useFetchMeQuery,
	useUpdateSettingsMutation,
} from "@/entities/user/api/userApi";
import { setLanguage, toggleTheme } from "@/entities/user/model/settingsSlice";
import { clearUser, setUser } from "@/entities/user/model/userSlice";
import {
	useLoginMutation,
	useLogoutMutation,
	useRegisterMutation,
} from "@/features/auth/api/authApi";
import { getApiErrorMessage } from "@/shared/lib";
import { useT } from "@/shared/i18n";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import type { Language } from "@/shared/types";

const Home = () => {
	const dispatch = useAppDispatch();
	const t = useT();

	const { theme, language } = useAppSelector((state) => state.settings);
	const {
		isAuthenticated,
		profile,
		isLoading: isUserLoading,
	} = useAppSelector((state) => state.user);

	const [email, setEmail] = useState("test@example.com");
	const [password, setPassword] = useState("password123");
	const [tab, setTab] = useState(0);
	const [error, setError] = useState("");

	const [login, { isLoading: isLoginLoading }] = useLoginMutation();
	const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
	const [logoutMutation] = useLogoutMutation();
	const [updateSettings] = useUpdateSettingsMutation();

	useFetchMeQuery();

	const handleAuth = async () => {
		setError("");
		try {
			const result =
				tab === 0
					? await login({ email, password }).unwrap()
					: await register({
							email,
							password,
							username: email.split("@")[0],
						}).unwrap();

			dispatch(setUser(result.user));
		} catch (e) {
			setError(getApiErrorMessage(e));
		}
	};

	const handleLogout = async () => {
		await logoutMutation()
			.unwrap()
			.catch(() => {});
		dispatch(clearUser());
	};

	const handleToggleTheme = () => {
		const next = theme === "light" ? "dark" : "light";
		dispatch(toggleTheme());
		if (isAuthenticated) updateSettings({ theme: next });
	};

	const handleChangeLanguage = (next: Language) => {
		dispatch(setLanguage(next));
		if (isAuthenticated) updateSettings({ language: next });
	};

	const isLoading = isLoginLoading || isRegisterLoading;

	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					mb: 4,
				}}
			>
				<Typography variant="h3">SMTH</Typography>
				<Stack direction="row" alignItems="center" gap={1}>
					<LightModeIcon fontSize="small" />
					<Switch
						checked={theme === "dark"}
						onChange={handleToggleTheme}
						size="small"
					/>
					<DarkModeIcon fontSize="small" />
					<Select
						value={language}
						onChange={(e) => {
							const val = e.target.value;
							if (val === "ru" || val === "en") handleChangeLanguage(val);
						}}
						size="small"
						sx={{ minWidth: 80 }}
					>
						<MenuItem value="ru">RU</MenuItem>
						<MenuItem value="en">EN</MenuItem>
					</Select>
					{isAuthenticated && (
						<IconButton
							onClick={handleLogout}
							size="small"
							title={t.auth.logout}
						>
							<LogoutIcon fontSize="small" />
						</IconButton>
					)}
				</Stack>
			</Box>

			<Stack direction={{ xs: "column", md: "row" }} gap={3} sx={{ mb: 3 }}>
				<Card sx={{ flex: 1 }}>
					<CardContent sx={{ p: 3 }}>
						{isUserLoading ? (
							<Stack alignItems="center" justifyContent="center" sx={{ py: 4 }}>
								<CircularProgress size={32} />
							</Stack>
						) : isAuthenticated && profile ? (
							<Stack gap={2}>
								<Typography variant="h5">{t.profile.title}</Typography>
								<Stack direction="row" alignItems="center" gap={2}>
									<Avatar
										sx={{ width: 52, height: 52, bgcolor: "primary.main" }}
									>
										{(profile.displayName ?? profile.email)[0].toUpperCase()}
									</Avatar>
									<Box>
										<Typography fontWeight={600}>
											{profile.displayName}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{profile.email}
										</Typography>
									</Box>
								</Stack>
								<Divider />
								<Stack direction="row" gap={1} flexWrap="wrap">
									<Chip label={`@${profile.username}`} size="small" />
									<Chip
										label={
											theme === "dark" ? t.settings.dark : t.settings.light
										}
										size="small"
										color="primary"
										variant="outlined"
									/>
									<Chip
										label={language === "ru" ? "Русский" : "English"}
										size="small"
										color="secondary"
										variant="outlined"
									/>
								</Stack>
							</Stack>
						) : (
							<Stack gap={2}>
								<Typography variant="h5">{t.auth.title}</Typography>
								<Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 1 }}>
									<Tab label={t.auth.signIn} />
									<Tab label={t.auth.signUp} />
								</Tabs>
								<TextField
									label={t.auth.email}
									size="small"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									fullWidth
								/>
								<TextField
									label={t.auth.password}
									size="small"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									fullWidth
								/>
								{error && (
									<Typography variant="caption" color="error">
										{error}
									</Typography>
								)}
								<Button
									variant="contained"
									onClick={handleAuth}
									disabled={isLoading}
									fullWidth
								>
									{isLoading ? "…" : tab === 0 ? t.auth.signIn : t.auth.signUp}
								</Button>
							</Stack>
						)}
					</CardContent>
				</Card>

				<Card sx={{ flex: 1 }}>
					<CardContent sx={{ p: 3 }}>
						<Typography variant="h5" gutterBottom>
							{t.ui.typography}
						</Typography>
						<Stack gap={0.5}>
							<Typography variant="h1">H1 Syne</Typography>
							<Typography variant="h2">H2 Heading</Typography>
							<Typography variant="h3">H3 Heading</Typography>
							<Typography variant="h4">H4 Heading</Typography>
							<Divider sx={{ my: 1 }} />
							<Typography variant="body1">{t.ui.bodyText}</Typography>
							<Typography variant="body2" color="text.secondary">
								{t.ui.secondaryText}
							</Typography>
							<Typography variant="caption" color="text.disabled">
								{t.ui.captionText}
							</Typography>
							<Typography variant="overline">{t.ui.overlineText}</Typography>
						</Stack>
					</CardContent>
				</Card>
			</Stack>

			<Card>
				<CardContent sx={{ p: 3 }}>
					<Typography variant="h5" gutterBottom>
						{t.ui.components}
					</Typography>
					<Stack gap={3}>
						<Stack direction="row" gap={1} flexWrap="wrap">
							<Button variant="contained">Contained</Button>
							<Button variant="outlined">Outlined</Button>
							<Button variant="text">Text</Button>
							<Button variant="contained" color="secondary">
								Secondary
							</Button>
							<Button variant="outlined" color="error">
								Danger
							</Button>
							<Button variant="contained" disabled>
								Disabled
							</Button>
						</Stack>
						<Stack direction="row" gap={1} flexWrap="wrap">
							{(
								[
									"default",
									"primary",
									"secondary",
									"success",
									"warning",
									"error",
								] as const
							).map((color) => (
								<Chip key={color} label={color} color={color} size="small" />
							))}
						</Stack>
						<Stack direction="row" gap={2}>
							{[
								{
									bg: "primary.main",
									color: "primary.contrastText",
									label: "primary",
								},
								{
									bg: "secondary.main",
									color: "secondary.contrastText",
									label: "secondary",
								},
								{
									bg: "background.paper",
									color: "text.primary",
									label: "paper",
									border: true,
								},
							].map(({ bg, color, label, border }) => (
								<Box
									key={label}
									sx={{
										p: 2,
										bgcolor: bg,
										color,
										borderRadius: 2,
										flex: 1,
										textAlign: "center",
										...(border && {
											border: "1px solid",
											borderColor: "divider",
										}),
									}}
								>
									<Typography variant="caption">{label}</Typography>
								</Box>
							))}
						</Stack>
					</Stack>
				</CardContent>
			</Card>
		</Container>
	);
};

export default Home;
