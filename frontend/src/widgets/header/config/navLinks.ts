export const NAV_LINKS = [
	{ href: "/", labelKey: "home" },
	{ href: "/finance", labelKey: "finance" },
	{ href: "/events", labelKey: "events" },
	{ href: "/wishlist", labelKey: "wishlist" },
] as const;

export type NavLabelKey = (typeof NAV_LINKS)[number]["labelKey"];
