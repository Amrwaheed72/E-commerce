import { NextResponse } from 'next/server'

export function middleware(request) {
    // Only redirect for the root path
    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/home', request.url))
    }
}

export const config = {
    matcher: '/',
}