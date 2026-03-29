import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi";
import type { User, UserState } from "./types";

const initialState: UserState = {
	profile: null,
	isAuthenticated: false,
	isLoading: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.profile = action.payload;
			state.isAuthenticated = true;
			state.isLoading = false;
		},
		updateProfile: (state, action: PayloadAction<Partial<User>>) => {
			if (state.profile) {
				state.profile = { ...state.profile, ...action.payload };
			}
		},
		clearUser: (state) => {
			state.profile = null;
			state.isAuthenticated = false;
			state.isLoading = false;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				userApi.endpoints.fetchMe.matchFulfilled,
				(state, action) => {
					state.profile = action.payload;
					state.isAuthenticated = true;
					state.isLoading = false;
				},
			)
			.addMatcher(userApi.endpoints.fetchMe.matchRejected, (state) => {
				state.profile = null;
				state.isAuthenticated = false;
				state.isLoading = false;
			})
			.addMatcher(
				userApi.endpoints.updateProfile.matchFulfilled,
				(state, action) => {
					state.profile = action.payload;
				},
			);
	},
});

export const { setUser, updateProfile, clearUser, setLoading } =
	userSlice.actions;
