export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next|favicon.ico).*)",
    "/",
    "/(api|trpc)(.*)"
  ],
};
