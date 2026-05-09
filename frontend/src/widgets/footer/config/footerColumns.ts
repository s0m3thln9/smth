export const FOOTER_COLUMNS = [
	{
		headingKey: "productHeading",
		links: [
			{ labelKey: "productFinance", href: "/finance" },
			{ labelKey: "productEvents", href: "/events" },
			{ labelKey: "productWishlist", href: "/wishlist" },
		],
	},
	{
		headingKey: "resourcesHeading",
		links: [
			{ labelKey: "resourcesAbout", href: "/about" },
			{ labelKey: "resourcesDocs", href: "/docs" },
			{ labelKey: "resourcesContact", href: "/contact" },
		],
	},
	{
		headingKey: "legalHeading",
		links: [
			{ labelKey: "legalTerms", href: "/terms" },
			{ labelKey: "legalPrivacy", href: "/privacy" },
		],
	},
] as const;
