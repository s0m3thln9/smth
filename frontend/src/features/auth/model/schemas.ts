import * as z from "zod";

const loginSchema = z.object({
	email: z.email(),
	password: z.string().min(8),
});
