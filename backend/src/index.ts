import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth";
import usersRoutes from "./routes/users";

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

app.get("/api/health", (_, res) => {
	res.json({ status: "ok", uptime: process.uptime() });
});

app.listen(PORT, () => {
	console.log(`Backend: http://localhost:${PORT}`);
});
