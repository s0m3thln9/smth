"use client";

import { Stack } from "@mui/material";
import NextLink from "next/link";
import { useT } from "@/shared/i18n";
import { useNavLinks } from "../model/useNavLinks";

type NavLinksProps = {
	direction?: "row" | "column";
	onNavigate?: () => void;
};

export const NavLinks = ({ direction = "row", onNavigate }: NavLinksProps) => {
	const t = useT();
	const links = useNavLinks();

	return (
		<Stack
			component="nav"
			direction={direction}
			gap={direction === "row" ? 3 : 1.5}
			sx={{ alignItems: direction === "row" ? "center" : "stretch" }}
		>
			{links.map(({ href, labelKey, active }) => (
				<NextLink
					key={href}
					href={href}
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
					{t.nav[labelKey]}
				</NextLink>
			))}
		</Stack>
	);
};
