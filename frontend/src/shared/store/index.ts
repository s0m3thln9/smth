import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "@/entities/user/api/userApi";
import { settingsListenerMiddleware } from "@/entities/user/model/settingsListeners";
import { settingsSlice } from "@/entities/user/model/settingsSlice";
import type { User } from "@/entities/user/model/types";
import { userSlice } from "@/entities/user/model/userSlice";
import { authApi } from "@/features/auth/api/authApi";
import type { Language, ThemeMode } from "@/shared/types";

export interface PreloadedSettings {
	theme?: ThemeMode;
	language?: Language;
	user?: User | null;
}

export const makeStore = (preloaded?: PreloadedSettings) =>
	configureStore({
		reducer: {
			user: userSlice.reducer,
			settings: settingsSlice.reducer,
			[userApi.reducerPath]: userApi.reducer,
			[authApi.reducerPath]: authApi.reducer,
		},
		preloadedState: preloaded
			? {
					settings: {
						theme: preloaded.theme ?? "light",
						language: preloaded.language ?? "ru",
						isSyncing: false,
					},
					user: {
						profile: preloaded.user ?? null,
						isAuthenticated: !!preloaded.user,
						isLoading: false,
					},
				}
			: undefined,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.prepend(settingsListenerMiddleware.middleware)
				.concat(userApi.middleware)
				.concat(authApi.middleware),
	});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export { useAppDispatch, useAppSelector } from "./hooks";
