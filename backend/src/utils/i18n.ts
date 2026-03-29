import type { Request } from "express";

const messages = {
	ru: {
		allFieldsRequired: "email, password, username обязательны",
		emailPasswordRequired: "email и password обязательны",
		emailOrUsernameTaken: "Email или username уже заняты",
		invalidCredentials: "Неверный email или пароль",
		notFound: "Пользователь не найден",
		noToken: "Токен не передан",
		invalidToken: "Недействительный токен",
	},
	en: {
		allFieldsRequired: "email, password, username are required",
		emailPasswordRequired: "email and password are required",
		emailOrUsernameTaken: "Email or username already taken",
		invalidCredentials: "Invalid email or password",
		notFound: "User not found",
		noToken: "No token provided",
		invalidToken: "Invalid token",
	},
} as const;

type Lang = keyof typeof messages;
type MessageKey = keyof (typeof messages)["ru"];

export const getLang = (req: Request): Lang => {
	const header = req.headers["accept-language"];
	return header?.startsWith("ru") ? "ru" : "en";
};

export const t = (req: Request, key: MessageKey): string =>
	messages[getLang(req)][key];
