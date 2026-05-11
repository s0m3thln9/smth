"use client";

import { Alert, Button, Stack, TextField } from "@mui/material";
import { useT } from "@/shared/i18n";
import { useLoginForm } from "../model/useLoginForm";

export const LoginForm = () => {
	const t = useT();
	const { register, errors, onSubmit, isLoading, serverError, errMsg } =
		useLoginForm();

	return (
		<Stack component="form" onSubmit={onSubmit} gap={2} noValidate>
			<TextField
				label={t.auth.identifier}
				autoComplete="username"
				autoFocus
				error={!!errors.identifier}
				helperText={errMsg(errors.identifier?.message)}
				{...register("identifier")}
			/>
			<TextField
				label={t.auth.password}
				type="password"
				autoComplete="current-password"
				error={!!errors.password}
				helperText={errMsg(errors.password?.message)}
				{...register("password")}
			/>
			{serverError && <Alert severity="error">{serverError}</Alert>}
			<Button type="submit" variant="contained" disabled={isLoading}>
				{t.auth.submitLogin}
			</Button>
		</Stack>
	);
};
