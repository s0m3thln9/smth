"use client";

import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import type { ReactNode } from "react";

interface Props {
	href: string;
	children: ReactNode;
}

export const FooterLink = ({ href, children }: Props) => (
	<MuiLink
		component={NextLink}
		href={href}
		underline="hover"
		color="text.primary"
		sx={{ fontSize: 14, "&:hover": { color: "primary.main" } }}
	>
		{children}
	</MuiLink>
);
