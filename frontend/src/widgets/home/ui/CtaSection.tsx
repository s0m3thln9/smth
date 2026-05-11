import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { getT } from "@/shared/i18n/server";

export const CtaSection = async () => {
	const t = await getT();

	return (
		<Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
			<Card
				sx={{
					p: { xs: 4, md: 6 },
					textAlign: "center",
					bgcolor: "primary.main",
					color: "primary.contrastText",
					border: "none",
				}}
			>
				<Stack alignItems="center" gap={3}>
					<Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 } }}>
						{t.home.ctaTitle}
					</Typography>
					<Typography variant="body1" sx={{ opacity: 0.9 }}>
						{t.home.ctaSubtitle}
					</Typography>
					<Button
						variant="contained"
						size="large"
						sx={{
							bgcolor: "background.paper",
							color: "primary.main",
							"&:hover": { bgcolor: "background.default" },
						}}
					>
						{t.home.ctaButton}
					</Button>
				</Stack>
			</Card>
		</Container>
	);
};
