"use client";

import { Stack } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/shared/i18n";

type NavLinksProps = {
	direction?: "row" | "column";
	onNavigate?: () => void;
};

export const NavLinks = ({ direction = "row", onNavigate }: NavLinksProps) => {
	const t = useT();
	const pathname = usePathname();

	const links = [
		{ href: "/", label: t.nav.home },
		{ href: "/finance", label: t.nav.finance },
		{ href: "/events", label: t.nav.events },
		{ href: "/wishlist", label: t.nav.wishlist },
	];

	return (
		<Stack
			component="nav"
			direction={direction}
			gap={direction === "row" ? 3 : 1.5}
			sx={{ alignItems: direction === "row" ? "center" : "stretch" }}
		>
			{links.map((link) => {
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
						{link.label}
					</NextLink>
				);
			})}
		</Stack>
	);
};
