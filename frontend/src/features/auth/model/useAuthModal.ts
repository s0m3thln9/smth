"use client";

import { useAppDispatch, useAppSelector } from "@/shared/store";
import { closeAuthModal, switchMode } from "./authModalSlice";

export const useAuthModal = () => {
	const dispatch = useAppDispatch();
	const { isOpen, mode } = useAppSelector((s) => s.authModal);

	return {
		isOpen,
		mode,
		isLogin: mode === "login",
		close: () => dispatch(closeAuthModal()),
		toggleMode: () => dispatch(switchMode()),
	};
};
