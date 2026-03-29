import { createApi } from "@reduxjs/toolkit/query/react";
import { createAuthBaseQuery } from "@/shared/store/baseQuery";
import type {
	AuthResponse,
	LoginCredentials,
	LogoutResponse,
	RegisterCredentials,
} from "./types";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: createAuthBaseQuery(process.env.NEXT_PUBLIC_API_URL),
	endpoints: (builder) => ({
		login: builder.mutation<AuthResponse, LoginCredentials>({
			query: (body) => ({ url: "/auth/login", method: "POST", body }),
		}),
		register: builder.mutation<AuthResponse, RegisterCredentials>({
			query: (body) => ({ url: "/auth/register", method: "POST", body }),
		}),
		logout: builder.mutation<LogoutResponse, void>({
			query: () => ({ url: "/auth/logout", method: "POST" }),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
	authApi;
