export const PROTECTED_PATHS = ["/profile", "/settings"] as const;

export const isProtectedPath = (pathname: string): boolean =>
	PROTECTED_PATHS.some(
		(base) => pathname === base || pathname.startsWith(`${base}/`),
	);
