import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { getT } from "@/shared/i18n/server";

export const AudienceSection = async () => {
	const t = await getT();

	const items = [
		{
			icon: <GroupsIcon fontSize="large" />,
			title: t.home.audienceGroupsTitle,
			desc: t.home.audienceGroupsDesc,
		},
		{
			icon: <PersonIcon fontSize="large" />,
			title: t.home.audienceSoloTitle,
			desc: t.home.audienceSoloDesc,
		},
	];

	return (
		<Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
			<Container maxWidth="lg">
				<Stack alignItems="center" textAlign="center" gap={1.5} sx={{ mb: 6 }}>
					<Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 } }}>
						{t.home.audienceTitle}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{t.home.audienceSubtitle}
					</Typography>
				</Stack>
				<Stack direction={{ xs: "column", md: "row" }} gap={3}>
					{items.map((item) => (
						<Card key={item.title} sx={{ flex: 1 }} variant="outlined">
							<CardContent sx={{ p: 4 }}>
								<Stack direction="row" gap={3} alignItems="flex-start">
									<Box
										sx={{
											width: 48,
											height: 48,
											borderRadius: 2,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											bgcolor: "action.hover",
											color: "primary.main",
											flexShrink: 0,
										}}
									>
										{item.icon}
									</Box>
									<Stack gap={1}>
										<Typography variant="h4">{item.title}</Typography>
										<Typography variant="body2" color="text.secondary">
											{item.desc}
										</Typography>
									</Stack>
								</Stack>
							</CardContent>
						</Card>
					))}
				</Stack>
			</Container>
		</Box>
	);
};
