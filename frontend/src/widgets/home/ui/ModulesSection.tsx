import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SavingsIcon from "@mui/icons-material/Savings";
import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { getT } from "@/shared/i18n";

export const ModulesSection = async () => {
	const t = await getT();

	const modules = [
		{
			icon: <SavingsIcon fontSize="large" />,
			title: t.home.financeTitle,
			desc: t.home.financeDesc,
			color: "primary.main",
		},
		{
			icon: <CalendarMonthIcon fontSize="large" />,
			title: t.home.eventsTitle,
			desc: t.home.eventsDesc,
			color: "secondary.main",
		},
		{
			icon: <CardGiftcardIcon fontSize="large" />,
			title: t.home.wishlistTitle,
			desc: t.home.wishlistDesc,
			color: "success.main",
		},
	];

	return (
		<Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
			<Stack alignItems="center" textAlign="center" gap={1.5} sx={{ mb: 6 }}>
				<Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 } }}>
					{t.home.modulesTitle}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{t.home.modulesSubtitle}
				</Typography>
			</Stack>
			<Stack direction={{ xs: "column", md: "row" }} gap={3}>
				{modules.map((m) => (
					<Card key={m.title} sx={{ flex: 1 }}>
						<CardContent
							sx={{
								p: 4,
								display: "flex",
								flexDirection: "column",
								gap: 2,
								height: "100%",
							}}
						>
							<Box
								sx={{
									width: 56,
									height: 56,
									borderRadius: 2,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									bgcolor: m.color,
									color: "common.white",
								}}
							>
								{m.icon}
							</Box>
							<Typography variant="h4">{m.title}</Typography>
							<Typography variant="body2" color="text.secondary">
								{m.desc}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Stack>
		</Container>
	);
};
