import { NextResponse } from 'next/server';

export function middleware(request) {
  // Handle the old thank you page URL
  if (request.nextUrl.pathname === '/11235813.html') {
    return NextResponse.redirect(new URL('/thank-you', request.url));
  }
}

export const config = {
  matcher: '/11235813.html'
};
