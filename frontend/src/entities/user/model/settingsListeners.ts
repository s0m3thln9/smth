import { createListenerMiddleware } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
	setLanguage,
	setSettingsFromServer,
	setTheme,
	toggleTheme,
} from "./settingsSlice";
import type { SettingsState } from "./types";

type StateWithSettings = { settings: SettingsState };

export const settingsListenerMiddleware = createListenerMiddleware();

const listen =
	settingsListenerMiddleware.startListening.withTypes<StateWithSettings>();

const OPTS = { expires: 365, path: "/", sameSite: "lax" } as const;

listen({
	actionCreator: toggleTheme,
	effect: (_action, api) => {
		Cookies.set("theme", api.getState().settings.theme, OPTS);
	},
});

listen({
	actionCreator: setTheme,
	effect: ({ payload }) => {
		Cookies.set("theme", payload, OPTS);
	},
});

listen({
	actionCreator: setLanguage,
	effect: ({ payload }) => {
		Cookies.set("language", payload, OPTS);
	},
});

listen({
	actionCreator: setSettingsFromServer,
	effect: ({ payload }) => {
		Cookies.set("theme", payload.theme, OPTS);
		Cookies.set("language", payload.language, OPTS);
	},
});
