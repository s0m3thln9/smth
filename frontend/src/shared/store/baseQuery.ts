import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface StateWithLanguage {
	settings: { language: string };
}

export const createAuthBaseQuery = (baseUrl: string | undefined) =>
	fetchBaseQuery({
		baseUrl,
		credentials: "include",
		prepareHeaders: (headers, { getState }) => {
			const state = getState() as StateWithLanguage;
			headers.set("Accept-Language", state.settings.language);
			return headers;
		},
	});
