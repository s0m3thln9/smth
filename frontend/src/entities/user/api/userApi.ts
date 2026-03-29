import { createApi } from "@reduxjs/toolkit/query/react";
import { createAuthBaseQuery } from "@/shared/store/baseQuery";
import type { User, UserSettings } from "../model/types";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: createAuthBaseQuery(process.env.NEXT_PUBLIC_API_URL),
	tagTypes: ["User"],
	endpoints: (builder) => ({
		fetchMe: builder.query<User, void>({
			query: () => "/users/me",
			providesTags: ["User"],
		}),
		updateProfile: builder.mutation<User, Partial<User>>({
			query: (body) => ({ url: "/users/me", method: "PATCH", body }),
			invalidatesTags: ["User"],
		}),
		updateSettings: builder.mutation<UserSettings, Partial<UserSettings>>({
			query: (body) => ({ url: "/users/me/settings", method: "PATCH", body }),
		}),
	}),
});

export const {
	useFetchMeQuery,
	useUpdateProfileMutation,
	useUpdateSettingsMutation,
} = userApi;
