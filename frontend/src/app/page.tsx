"use client";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import SavingsIcon from "@mui/icons-material/Savings";
import {
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Container,
	Stack,
	Typography,
} from "@mui/material";
import type { ReactNode } from "react";
import { useT } from "@/shared/i18n";

const Home = () => {
	const t = useT();

	return (
		<Box>
			<HeroSection
				badge={t.home.heroBadge}
				title={t.home.heroTitle}
				subtitle={t.home.heroSubtitle}
				ctaPrimary={t.home.heroCtaPrimary}
				ctaSecondary={t.home.heroCtaSecondary}
			/>

			<ModulesSection
				title={t.home.modulesTitle}
				subtitle={t.home.modulesSubtitle}
				modules={[
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
				]}
			/>

			<AudienceSection
				title={t.home.audienceTitle}
				subtitle={t.home.audienceSubtitle}
				items={[
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
				]}
			/>

			<CtaSection
				title={t.home.ctaTitle}
				subtitle={t.home.ctaSubtitle}
				button={t.home.ctaButton}
			/>
		</Box>
	);
};

type HeroProps = {
	badge: string;
	title: string;
	subtitle: string;
	ctaPrimary: string;
	ctaSecondary: string;
};

const HeroSection = ({
	badge,
	title,
	subtitle,
	ctaPrimary,
	ctaSecondary,
}: HeroProps) => (
	<Container maxWidth="md" sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
		<Stack alignItems="center" gap={3}>
			<Chip label={badge} color="primary" variant="outlined" />
			<Typography
				variant="h1"
				sx={{ fontSize: { xs: 40, md: 64 }, lineHeight: 1.1 }}
			>
				{title}
			</Typography>
			<Typography
				variant="body1"
				color="text.secondary"
				sx={{ maxWidth: 580, fontSize: { xs: 16, md: 18 } }}
			>
				{subtitle}
			</Typography>
			<Stack direction={{ xs: "column", sm: "row" }} gap={2} sx={{ mt: 1 }}>
				<Button variant="contained" size="large">
					{ctaPrimary}
				</Button>
				<Button variant="outlined" size="large">
					{ctaSecondary}
				</Button>
			</Stack>
		</Stack>
	</Container>
);

type ModuleCard = {
	icon: ReactNode;
	title: string;
	desc: string;
	color: string;
};

type ModulesProps = {
	title: string;
	subtitle: string;
	modules: ModuleCard[];
};

const ModulesSection = ({ title, subtitle, modules }: ModulesProps) => (
	<Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
		<Stack alignItems="center" textAlign="center" gap={1.5} sx={{ mb: 6 }}>
			<Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 } }}>
				{title}
			</Typography>
			<Typography variant="body1" color="text.secondary">
				{subtitle}
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

type AudienceItem = {
	icon: ReactNode;
	title: string;
	desc: string;
};

type AudienceProps = {
	title: string;
	subtitle: string;
	items: AudienceItem[];
};

const AudienceSection = ({ title, subtitle, items }: AudienceProps) => (
	<Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
		<Container maxWidth="lg">
			<Stack alignItems="center" textAlign="center" gap={1.5} sx={{ mb: 6 }}>
				<Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 } }}>
					{title}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{subtitle}
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

type CtaProps = {
	title: string;
	subtitle: string;
	button: string;
};

const CtaSection = ({ title, subtitle, button }: CtaProps) => (
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
					{title}
				</Typography>
				<Typography variant="body1" sx={{ opacity: 0.9 }}>
					{subtitle}
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
					{button}
				</Button>
			</Stack>
		</Card>
	</Container>
);

export default Home;
