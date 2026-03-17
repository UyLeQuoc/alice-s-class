import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Only rewrite the root path to our landing.html
    if (request.nextUrl.pathname === '/') {
        return NextResponse.rewrite(new URL('/landing.html', request.url));
    }
}

export const config = {
    matcher: '/',
};
