"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setUser } from "@/entities/user";
import { useT } from "@/shared/i18n";
import { useAppDispatch } from "@/shared/store";
import { useRegisterMutation } from "../api/authApi";
import { closeAuthModal } from "./authModalSlice";
import { type RegisterInput, registerSchema } from "./schemas";

type ErrKey = keyof ReturnType<typeof useT>["auth"]["errors"];

export const useRegisterForm = () => {
	const t = useT();
	const dispatch = useAppDispatch();
	const router = useRouter();
	const searchParams = useSearchParams();
	const [registerUser, { isLoading }] = useRegisterMutation();
	const [serverError, setServerError] = useState<string | null>(null);

	const form = useForm<RegisterInput>({
		resolver: zodResolver(registerSchema),
		defaultValues: { email: "", username: "", password: "" },
	});

	const onSubmit = form.handleSubmit(async (values) => {
		setServerError(null);
		try {
			const { user } = await registerUser(values).unwrap();
			dispatch(setUser(user));
			dispatch(closeAuthModal());
			const from = searchParams.get("from");
			if (from?.startsWith("/")) router.push(from);
		} catch (e) {
			const msg =
				(e as { data?: { message?: string } })?.data?.message ??
				t.auth.errors.generic;
			setServerError(msg);
		}
	});

	const errMsg = (key?: string) =>
		key ? (t.auth.errors[key as ErrKey] ?? key) : undefined;

	return {
		register: form.register,
		errors: form.formState.errors,
		onSubmit,
		isLoading,
		serverError,
		errMsg,
	};
};
