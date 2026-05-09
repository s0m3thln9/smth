"use client";

import { Stack } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/shared/i18n";
import { NAV_LINKS } from "../config/navLinks";

type NavLinksProps = {
	direction?: "row" | "column";
	onNavigate?: () => void;
};

export const NavLinks = ({ direction = "row", onNavigate }: NavLinksProps) => {
	const t = useT();
	const pathname = usePathname();

	return (
		<Stack
			component="nav"
			direction={direction}
			gap={direction === "row" ? 3 : 1.5}
			sx={{ alignItems: direction === "row" ? "center" : "stretch" }}
		>
			{NAV_LINKS.map((link) => {
				const active =
					link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
				return (
					<NextLink
						key={link.href}
						href={link.href}
						onClick={onNavigate}
						style={{
							textDecoration: "none",
							color: "inherit",
							fontWeight: active ? 700 : 500,
							opacity: active ? 1 : 0.7,
							padding: direction === "column" ? "8px 4px" : 0,
							fontSize: 15,
						}}
					>
						{t.nav[link.labelKey]}
					</NextLink>
				);
			})}
		</Stack>
	);
};
