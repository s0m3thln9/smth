"use client";

import {
	Box,
	Container,
	Divider,
	Link as MuiLink,
	Stack,
	Typography,
} from "@mui/material";
import NextLink from "next/link";
import { useT } from "@/shared/i18n";

const Footer = () => {
	const t = useT();
	const year = new Date().getFullYear();

	const columns = [
		{
			heading: t.footer.productHeading,
			links: [
				{ label: t.footer.productFinance, href: "/finance" },
				{ label: t.footer.productEvents, href: "/events" },
				{ label: t.footer.productWishlist, href: "/wishlist" },
			],
		},
		{
			heading: t.footer.resourcesHeading,
			links: [
				{ label: t.footer.resourcesAbout, href: "/about" },
				{ label: t.footer.resourcesDocs, href: "/docs" },
				{ label: t.footer.resourcesContact, href: "/contact" },
			],
		},
		{
			heading: t.footer.legalHeading,
			links: [
				{ label: t.footer.legalTerms, href: "/terms" },
				{ label: t.footer.legalPrivacy, href: "/privacy" },
			],
		},
	];

	return (
		<Box
			component="footer"
			sx={{
				mt: 8,
				borderTop: "1px solid",
				borderColor: "divider",
				bgcolor: "background.paper",
			}}
		>
			<Container maxWidth="lg" sx={{ py: 6 }}>
				<Stack
					direction={{ xs: "column", md: "row" }}
					gap={{ xs: 4, md: 6 }}
					justifyContent="space-between"
				>
					<Stack gap={1.5} sx={{ maxWidth: 320 }}>
						<Typography variant="h4">SMTH</Typography>
						<Typography variant="body2" color="text.secondary">
							{t.footer.tagline}
						</Typography>
					</Stack>

					<Stack
						direction={{ xs: "column", sm: "row" }}
						gap={{ xs: 3, sm: 6 }}
						flexWrap="wrap"
					>
						{columns.map((col) => (
							<Stack key={col.heading} gap={1.25} sx={{ minWidth: 140 }}>
								<Typography
									variant="overline"
									color="text.secondary"
									sx={{ letterSpacing: 1 }}
								>
									{col.heading}
								</Typography>
								{col.links.map((link) => (
									<MuiLink
										key={link.href}
										component={NextLink}
										href={link.href}
										underline="hover"
										color="text.primary"
										sx={{ fontSize: 14, "&:hover": { color: "primary.main" } }}
									>
										{link.label}
									</MuiLink>
								))}
							</Stack>
						))}
					</Stack>
				</Stack>

				<Divider sx={{ my: 4 }} />

				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
					alignItems={{ xs: "flex-start", sm: "center" }}
					gap={1}
				>
					<Typography variant="caption" color="text.secondary">
						© {year} SMTH. {t.footer.copyright}.
					</Typography>
					<Typography variant="caption" color="text.disabled">
						v0.1.0
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
