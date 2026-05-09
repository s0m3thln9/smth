import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthModalMode, AuthModalState } from "./types";

const initialState: AuthModalState = {
	isOpen: false,
	mode: "login",
};

export const authModalSlice = createSlice({
	name: "authModal",
	initialState,
	reducers: {
		openAuthModal: (state, action: PayloadAction<AuthModalMode>) => {
			state.isOpen = true;
			state.mode = action.payload;
		},
		closeAuthModal: (state) => {
			state.isOpen = false;
		},
		switchMode: (state) => {
			state.mode = state.mode === "login" ? "register" : "login";
		},
	},
});

export const { openAuthModal, closeAuthModal, switchMode } =
	authModalSlice.actions;
