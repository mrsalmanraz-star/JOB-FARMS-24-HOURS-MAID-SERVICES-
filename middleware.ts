import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: Request) {
  const url = new URL(request.url);
  
  // Skip auth for public routes
  if (url.pathname.startsWith('/api/public') || url.pathname === '/') {
    return NextResponse.next();
  }

  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'GENESIS_DEFAULT_SECRET');
    const { payload } = await jwtVerify(token, secret);

    // RBAC Enforcement
    if (url.pathname.includes('/admin') && payload.role !== 'GOD_MODE') {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({ error: 'INVALID_TOKEN' }, { status: 401 });
  }
}

export const config = {
  matcher: ['/api/:path*', '/admin/:path*'],
};
