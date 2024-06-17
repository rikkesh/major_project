import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

publicRoutes: [ '/', '/About' ]



export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};