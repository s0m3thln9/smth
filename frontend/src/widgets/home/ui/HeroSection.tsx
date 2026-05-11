import { Button, Chip, Container, Stack, Typography } from "@mui/material";
import { getT } from "@/shared/i18n/server";

export const HeroSection = async () => {
	const t = await getT();

	return (
		<Container maxWidth="md" sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
			<Stack alignItems="center" gap={3}>
				<Chip label={t.home.heroBadge} color="primary" variant="outlined" />
				<Typography
					variant="h1"
					sx={{ fontSize: { xs: 40, md: 64 }, lineHeight: 1.1 }}
				>
					{t.home.heroTitle}
				</Typography>
				<Typography
					variant="body1"
					color="text.secondary"
					sx={{ maxWidth: 580, fontSize: { xs: 16, md: 18 } }}
				>
					{t.home.heroSubtitle}
				</Typography>
				<Stack direction={{ xs: "column", sm: "row" }} gap={2} sx={{ mt: 1 }}>
					<Button variant="contained" size="large">
						{t.home.heroCtaPrimary}
					</Button>
					<Button variant="outlined" size="large">
						{t.home.heroCtaSecondary}
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
};
