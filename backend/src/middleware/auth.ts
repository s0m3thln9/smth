import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { JwtTokenPayload } from "../types";

const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret";

export interface AuthRequest extends Request {
	userId?: string;
}

const isJwtTokenPayload = (payload: unknown): payload is JwtTokenPayload => {
	if (typeof payload !== "object" || payload === null) return false;
	const record = payload as Record<string, unknown>;
	return "userId" in record && typeof record.userId === "string";
};

export const authenticate = (
	req: AuthRequest,
	res: Response,
	next: NextFunction,
): void => {
	const token: string | undefined = req.cookies?.accessToken;
	if (!token) {
		res.status(401).json({ message: "No token provided" });
		return;
	}
	try {
		const raw = jwt.verify(token, JWT_SECRET);
		if (!isJwtTokenPayload(raw)) {
			res.status(401).json({ message: "Invalid token" });
			return;
		}
		req.userId = raw.userId;
		next();
	} catch {
		res.status(401).json({ message: "Invalid token" });
	}
};
