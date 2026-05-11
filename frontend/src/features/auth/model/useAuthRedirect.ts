"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { openAuthModal } from "./authModalSlice";

export const useAuthRedirect = () => {
	const dispatch = useAppDispatch();
	const searchParams = useSearchParams();
	const isAuthenticated = useAppSelector((s) => s.user.isAuthenticated);

	useEffect(() => {
		if (searchParams.get("auth") === "required" && !isAuthenticated) {
			dispatch(openAuthModal("login"));
		}
	}, [searchParams, isAuthenticated, dispatch]);
};
