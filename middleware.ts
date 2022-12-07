import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// TODO: Update middleware redirection when nextjs fixes middleware redirection issue
// https://stackoverflow.com/questions/73229148/uncaught-syntaxerror-expected-expression-got-while-using-next-js-middlewar
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = '/wip';
  return NextResponse.rewrite(url);
}

// Temporary fix
export const config = {
  matcher: [
    '/',
    '/mentors',
    '/speakers',
    '/workshops',
    '/aboutUs',
    '/partners',
    '/faq',
    '/fintechHackathon',
  ],
};
