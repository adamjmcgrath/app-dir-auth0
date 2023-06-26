import { initAuth0 } from '@auth0/nextjs-auth0/edge';
import {NextResponse} from "next/server";

const auth0 = initAuth0({ routes: { login: '/api/page-router-auth/login' } });

export default auth0.withMiddlewareAuthRequired(async (req) => {
  const res = NextResponse.next();
  console.log(await auth0.getAccessToken(req, res, { refresh: true }));
  return res;
});

export const config = {
  matcher: ['/page-router/profile-middleware', '/profile-middleware']
};
