import { Router } from "express";
import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../db";
import type { LoginBody, RegisterBody } from "../types";
import { toPublicUser } from "../utils/user";
import { t } from "../utils/i18n";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret";
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000;

const setAuthCookie = (res: Response, token: string): void => {
	res.cookie("accessToken", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		maxAge: COOKIE_MAX_AGE,
		path: "/",
	});
};

router.post(
	"/register",
	async (req: Request<object, object, RegisterBody>, res) => {
		const { email, password, username } = req.body;
		if (!email || !password || !username) {
			res.status(400).json({ message: t(req, "allFieldsRequired") });
			return;
		}
		const exists = await prisma.user.findFirst({
			where: { OR: [{ email }, { username }] },
		});
		if (exists) {
			res.status(409).json({ message: t(req, "emailOrUsernameTaken") });
			return;
		}
		const passwordHash = await bcrypt.hash(password, 10);
		const user = await prisma.user.create({
			data: { email, username, displayName: username, passwordHash },
		});
		const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
			expiresIn: "7d",
		});
		setAuthCookie(res, token);
		res.status(201).json({ user: toPublicUser(user) });
	},
);

router.post(
	"/login",
	async (req: Request<object, object, LoginBody>, res) => {
		const { email, password } = req.body;
		if (!email || !password) {
			res.status(400).json({ message: t(req, "emailPasswordRequired") });
			return;
		}
		const user = await prisma.user.findUnique({ where: { email } });
		if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
			res.status(401).json({ message: t(req, "invalidCredentials") });
			return;
		}
		const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
			expiresIn: "7d",
		});
		setAuthCookie(res, token);
		res.json({ user: toPublicUser(user) });
	},
);

router.post("/logout", (_req, res) => {
	res.clearCookie("accessToken", { path: "/" });
	res.json({ ok: true });
});

export default router;
