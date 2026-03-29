const ru = {
	auth: {
		title: "Авторизация",
		signIn: "Войти",
		signUp: "Зарегистрироваться",
		email: "Email",
		password: "Пароль",
		logout: "Выйти",
	},
	profile: {
		title: "Профиль",
		theme: "Тема",
		language: "Язык",
	},
	ui: {
		typography: "Типографика",
		components: "Компоненты",
		bodyText: "body1 — основной текст, Nunito",
		secondaryText: "body2 — вспомогательный текст",
		captionText: "caption — мелкий текст",
		overlineText: "overline label",
	},
	settings: {
		light: "Светлая",
		dark: "Тёмная",
	},
};

const en: Translations = {
	auth: {
		title: "Authorization",
		signIn: "Sign in",
		signUp: "Sign up",
		email: "Email",
		password: "Password",
		logout: "Log out",
	},
	profile: {
		title: "Profile",
		theme: "Theme",
		language: "Language",
	},
	ui: {
		typography: "Typography",
		components: "Components",
		bodyText: "body1 — main text, Nunito",
		secondaryText: "body2 — secondary text",
		captionText: "caption — small text",
		overlineText: "overline label",
	},
	settings: {
		light: "Light",
		dark: "Dark",
	},
};

export type Translations = typeof ru;

export const translations: Record<string, Translations> = { ru, en };
