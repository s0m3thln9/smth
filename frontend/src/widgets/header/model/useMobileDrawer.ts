"use client";

import { useState } from "react";

export const useMobileDrawer = () => {
	const [open, setOpen] = useState(false);
	return {
		open,
		onOpen: () => setOpen(true),
		onClose: () => setOpen(false),
	};
};
