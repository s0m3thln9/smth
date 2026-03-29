import type { Metadata } from "next";
import { Nunito, Syne } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import type { ReactNode } from "react";
import type { User } from "@/entities/user/model/types";
import { parseLanguage, parseTheme } from "@/shared/lib";
import { Providers } from "@/shared/providers";

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["latin", "cyrillic"],
	display: "swap",
});

const syne = Syne({
	variable: "--font-syne",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "SMTH",
};

const RootLayout = async ({
	children,
}: Readonly<{ children: ReactNode }>) => {
	const cookieStore = await cookies();
	const theme = parseTheme(cookieStore.get("theme")?.value);
	const language = parseLanguage(cookieStore.get("language")?.value);
	const accessToken = cookieStore.get("accessToken")?.value;

	let initialUser: User | null = null;
	if (accessToken) {
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
				headers: { Cookie: `accessToken=${accessToken}` },
				cache: "no-store",
			});
			if (res.ok) initialUser = await res.json();
		} catch {}
	}

	return (
		<html lang={language} className={`${nunito.variable} ${syne.variable}`}>
			<body className="antialiased">
				<AppRouterCacheProvider>
					<Providers
						initialTheme={theme}
						initialLanguage={language}
						initialUser={initialUser}
					>
						{children}
					</Providers>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
};

export default RootLayout;
