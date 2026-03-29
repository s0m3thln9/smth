import type { ReactNode } from "react";
import type { User } from "@/entities/user/model/types";
import type { Language, ThemeMode } from "@/shared/types";
import { StoreProvider } from "./StoreProvider";
import { ThemeProvider } from "./ThemeProvider";

interface Props {
	children: ReactNode;
	initialTheme?: ThemeMode;
	initialLanguage?: Language;
	initialUser?: User | null;
}

export const Providers = ({
	children,
	initialTheme,
	initialLanguage,
	initialUser,
}: Props) => (
	<StoreProvider
		initialTheme={initialTheme}
		initialLanguage={initialLanguage}
		initialUser={initialUser}
	>
		<ThemeProvider>{children}</ThemeProvider>
	</StoreProvider>
);
