import type { Components, Theme } from "@mui/material";

export const components: Components<Theme> = {
	MuiCssBaseline: {
		styleOverrides: {
			"*, *::before, *::after": {
				boxSizing: "border-box",
			},
			body: {
				scrollbarWidth: "thin",
				"&::-webkit-scrollbar": { width: 6 },
				"&::-webkit-scrollbar-track": { background: "transparent" },
				"&::-webkit-scrollbar-thumb": {
					borderRadius: 8,
					backgroundColor: "rgba(120,113,108,0.4)",
				},
			},
		},
	},

	MuiButton: {
		defaultProps: {
			disableElevation: true,
		},
		styleOverrides: {
			root: () => ({
				borderRadius: 10,
				padding: "8px 20px",
				transition: "all 0.18s ease",
				"&:hover": {
					transform: "translateY(-1px)",
				},
				"&:active": {
					transform: "translateY(0)",
				},
			}),
			sizeLarge: {
				padding: "12px 28px",
				fontSize: "1rem",
			},
			sizeSmall: {
				padding: "5px 14px",
				fontSize: "0.8125rem",
			},
		},
	},

	MuiCard: {
		defaultProps: {
			elevation: 0,
		},
		styleOverrides: {
			root: ({ theme }) => ({
				borderRadius: 16,
				border: `1px solid ${theme.palette.divider}`,
				backgroundImage: "none",
			}),
		},
	},

	MuiPaper: {
		defaultProps: {
			elevation: 0,
		},
		styleOverrides: {
			root: ({ theme }) => ({
				backgroundImage: "none",
				border: `1px solid ${theme.palette.divider}`,
			}),
			rounded: {
				borderRadius: 16,
			},
		},
	},

	MuiTextField: {
		defaultProps: {
			variant: "outlined",
			size: "medium",
		},
		styleOverrides: {
			root: ({ theme }) => ({
				"& .MuiOutlinedInput-root": {
					borderRadius: 10,
					transition: "box-shadow 0.18s ease",
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: theme.palette.primary.main,
					},
					"&.Mui-focused": {
						boxShadow: `0 0 0 3px ${theme.palette.primary.main}22`,
					},
				},
			}),
		},
	},

	MuiChip: {
		styleOverrides: {
			root: {
				borderRadius: 8,
				fontWeight: 500,
			},
		},
	},

	MuiDialog: {
		styleOverrides: {
			paper: {
				borderRadius: 20,
			},
		},
	},

	MuiTooltip: {
		defaultProps: {
			arrow: true,
		},
		styleOverrides: {
			tooltip: ({ theme }) => ({
				borderRadius: 8,
				fontSize: "0.78rem",
				backgroundColor:
					theme.palette.mode === "dark"
						? theme.palette.grey[800]
						: theme.palette.grey[900],
			}),
		},
	},

	MuiAvatar: {
		styleOverrides: {
			root: {
				fontWeight: 700,
			},
		},
	},

	MuiListItemButton: {
		styleOverrides: {
			root: {
				borderRadius: 10,
				marginBottom: 2,
			},
		},
	},

	MuiTab: {
		styleOverrides: {
			root: {
				fontWeight: 600,
				textTransform: "none",
				minHeight: 44,
			},
		},
	},
};
