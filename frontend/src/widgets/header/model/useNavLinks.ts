"use client";

import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../config/navLinks";

export const useNavLinks = () => {
	const pathname = usePathname();
	return NAV_LINKS.map((link) => ({
		...link,
		active:
			link.href === "/" ? pathname === "/" : pathname.startsWith(link.href),
	}));
};
