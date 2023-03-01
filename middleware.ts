import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
const PUBLIC_FILE = /\.(.*)$/;

// had to make this again here as the other one is in a file with bcrypt which is not supported on edge runtimes
const verifyJWT = async (jwt) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload;
};

export default async function middleware(req, res) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") || // ini bisa di komen kalo di handler gamake auth
    pathname.startsWith("/static") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/jejak") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/saran") ||
    pathname.startsWith("/kontribusi") ||
    pathname.startsWith("/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }
  const jwt = req.cookies.get(process.env.COOKIE_NAME);

  if (
    jwt &&
    (pathname.startsWith("/signin") || pathname.startsWith("/register"))
  ) {
    req.nextUrl.pathname = "/home";
    return NextResponse.redirect(req.nextUrl);
  }

  if (!jwt) {
    req.nextUrl.pathname = "/signin";
    return NextResponse.redirect(req.nextUrl);
  }

  try {
    await verifyJWT(jwt.value);
    return NextResponse.next();
  } catch (e) {
    console.error(e);
    req.nextUrl.pathname = "/signin";
    return NextResponse.redirect(req.nextUrl);
  }
}
