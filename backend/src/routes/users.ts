import { Router } from "express";
import type { Request } from "express";
import { prisma } from "../db";
import type { UpdateProfileBody, UpdateSettingsBody } from "../types";
import { authenticate, type AuthRequest } from "../middleware/auth";
import { toPublicUser } from "../utils/user";
import { t } from "../utils/i18n";

const router = Router();

router.get("/me", authenticate, async (req: AuthRequest, res) => {
	const user = await prisma.user.findUnique({ where: { id: req.userId } });
	if (!user) {
		res.status(404).json({ message: t(req, "notFound") });
		return;
	}
	res.json(toPublicUser(user));
});

router.patch(
	"/me",
	authenticate,
	async (req: Request<object, object, UpdateProfileBody> & AuthRequest, res) => {
		const { displayName, avatarUrl } = req.body;
		const user = await prisma.user.update({
			where: { id: req.userId },
			data: {
				...(displayName !== undefined && { displayName }),
				...(avatarUrl !== undefined && { avatarUrl }),
			},
		});
		res.json(toPublicUser(user));
	},
);

router.patch(
	"/me/settings",
	authenticate,
	async (
		req: Request<object, object, UpdateSettingsBody> & AuthRequest,
		res,
	) => {
		const { theme, language } = req.body;
		const user = await prisma.user.update({
			where: { id: req.userId },
			data: {
				...(theme && { theme }),
				...(language && { language }),
			},
		});
		res.json(toPublicUser(user).settings);
	},
);

export default router;
