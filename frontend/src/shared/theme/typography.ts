import type { ThemeOptions } from "@mui/material/styles";

type TypographyOptions = ThemeOptions["typography"];

export const typography: TypographyOptions = {
	fontFamily: 'var(--font-nunito), "Nunito", sans-serif',

	h1: {
		fontFamily: 'var(--font-syne), "Syne", sans-serif',
		fontWeight: 800,
		fontSize: "2.75rem",
		lineHeight: 1.15,
		letterSpacing: "-0.03em",
	},
	h2: {
		fontFamily: 'var(--font-syne), "Syne", sans-serif',
		fontWeight: 700,
		fontSize: "2rem",
		lineHeight: 1.2,
		letterSpacing: "-0.02em",
	},
	h3: {
		fontFamily: 'var(--font-syne), "Syne", sans-serif',
		fontWeight: 700,
		fontSize: "1.5rem",
		lineHeight: 1.3,
	},
	h4: {
		fontFamily: 'var(--font-syne), "Syne", sans-serif',
		fontWeight: 600,
		fontSize: "1.25rem",
		lineHeight: 1.4,
	},
	h5: {
		fontWeight: 600,
		fontSize: "1.1rem",
	},
	h6: {
		fontWeight: 600,
		fontSize: "1rem",
	},
	body1: {
		fontSize: "1rem",
		lineHeight: 1.65,
	},
	body2: {
		fontSize: "0.875rem",
		lineHeight: 1.6,
	},
	subtitle1: {
		fontSize: "1rem",
		fontWeight: 500,
		lineHeight: 1.5,
	},
	subtitle2: {
		fontSize: "0.875rem",
		fontWeight: 500,
		lineHeight: 1.5,
	},
	caption: {
		fontSize: "0.75rem",
		lineHeight: 1.5,
		letterSpacing: "0.02em",
	},
	overline: {
		fontSize: "0.7rem",
		fontWeight: 700,
		letterSpacing: "0.1em",
		textTransform: "uppercase",
	},
	button: {
		fontWeight: 600,
		letterSpacing: "0.01em",
		textTransform: "none",
	},
};
