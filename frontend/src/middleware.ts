import { type NextRequest, NextResponse } from "next/server";
import { isProtectedPath } from "@/shared/config/protectedPaths";

export const middleware = (req: NextRequest) => {
	const { pathname } = req.nextUrl;
	if (!isProtectedPath(pathname)) return NextResponse.next();

	const hasToken = req.cookies.has("accessToken");
	if (hasToken) return NextResponse.next();

	const url = req.nextUrl.clone();
	url.pathname = "/";
	url.search = "";
	url.searchParams.set("auth", "required");
	url.searchParams.set("from", pathname);
	return NextResponse.redirect(url);
};

export const config = {
	matcher: ["/profile/:path*", "/settings/:path*"],
};
