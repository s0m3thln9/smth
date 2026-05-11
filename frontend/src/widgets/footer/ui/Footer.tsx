import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { getT } from "@/shared/i18n/server";
import { FOOTER_COLUMNS } from "../config/footerColumns";
import { FooterLink } from "./FooterLink";

const Footer = async () => {
	const t = await getT();
	const year = new Date().getFullYear();

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
						{FOOTER_COLUMNS.map((col) => (
							<Stack key={col.headingKey} gap={1.25} sx={{ minWidth: 140 }}>
								<Typography
									variant="overline"
									color="text.secondary"
									sx={{ letterSpacing: 1 }}
								>
									{t.footer[col.headingKey]}
								</Typography>
								{col.links.map((link) => (
									<FooterLink key={link.href} href={link.href}>
										{t.footer[link.labelKey]}
									</FooterLink>
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
