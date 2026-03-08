import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // If requesting root, serve the derma.html
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/derma.html', request.url))
  }
  return NextResponse.next()
}
