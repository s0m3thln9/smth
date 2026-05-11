import * as z from "zod";

export const loginSchema = z.object({
	identifier: z.string().min(1, "required"),
	password: z.string().min(8, "passwordMin"),
});

export const registerSchema = z.object({
	email: z.email("invalidEmail"),
	username: z
		.string()
		.min(3, "usernameMin")
		.regex(/^[a-zA-Z0-9_]+$/, "usernamePattern"),
	password: z.string().min(8, "passwordMin"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
