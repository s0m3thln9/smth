import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { getT } from "@/shared/i18n/server";

const WishlistPage = async () => {
	const t = await getT();

	return (
		<Container
			maxWidth="sm"
			sx={{ py: { xs: 8, md: 14 }, textAlign: "center" }}
		>
			<Stack alignItems="center" gap={3}>
				<Box
					sx={{
						width: 72,
						height: 72,
						borderRadius: 3,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						bgcolor: "success.main",
						color: "common.white",
					}}
				>
					<CardGiftcardIcon sx={{ fontSize: 36 }} />
				</Box>
				<Typography variant="h2">{t.nav.wishlist}</Typography>
				<Typography variant="body1" color="text.secondary">
					{t.home.wishlistDesc}
				</Typography>
				<Button component={NextLink} href="/" variant="outlined">
					{t.nav.home}
				</Button>
			</Stack>
		</Container>
	);
};

export default WishlistPage;
