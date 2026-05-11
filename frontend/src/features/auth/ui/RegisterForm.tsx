"use client";

import { Alert, Button, Stack, TextField } from "@mui/material";
import { useT } from "@/shared/i18n";
import { useRegisterForm } from "../model/useRegisterForm";

export const RegisterForm = () => {
	const t = useT();
	const { register, errors, onSubmit, isLoading, serverError, errMsg } =
		useRegisterForm();

	return (
		<Stack component="form" onSubmit={onSubmit} gap={2} noValidate>
			<TextField
				label={t.auth.email}
				type="email"
				autoComplete="email"
				autoFocus
				error={!!errors.email}
				helperText={errMsg(errors.email?.message)}
				{...register("email")}
			/>
			<TextField
				label={t.auth.username}
				autoComplete="username"
				error={!!errors.username}
				helperText={errMsg(errors.username?.message)}
				{...register("username")}
			/>
			<TextField
				label={t.auth.password}
				type="password"
				autoComplete="new-password"
				error={!!errors.password}
				helperText={errMsg(errors.password?.message)}
				{...register("password")}
			/>
			{serverError && <Alert severity="error">{serverError}</Alert>}
			<Button type="submit" variant="contained" disabled={isLoading}>
				{t.auth.submitRegister}
			</Button>
		</Stack>
	);
};
