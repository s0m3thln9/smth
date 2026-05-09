import { createListenerMiddleware } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { COOKIE_OPTIONS as OPTS } from "@/shared/config/cookies";
import {
	setLanguage,
	setSettingsFromServer,
	setTheme,
	toggleTheme,
} from "./settingsSlice";
import type { StateWithSettings } from "./types";

export const settingsListenerMiddleware = createListenerMiddleware();

const listen =
	settingsListenerMiddleware.startListening.withTypes<StateWithSettings>();

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
