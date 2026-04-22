import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const ADMIN_USER = process.env.ADMIN_PANEL_USERNAME;
const ADMIN_PASS = process.env.ADMIN_PANEL_PASSWORD;

function unauthorizedResponse() {
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Admin Panel", charset="UTF-8"',
    },
  });
}

export function middleware(request: NextRequest) {
  if (!ADMIN_USER || !ADMIN_PASS) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return unauthorizedResponse();
  }

  try {
    const base64Credentials = authHeader.split(' ')[1] ?? '';
    const credentials = atob(base64Credentials);
    const separatorIndex = credentials.indexOf(':');
    const username = separatorIndex >= 0 ? credentials.slice(0, separatorIndex) : '';
    const password = separatorIndex >= 0 ? credentials.slice(separatorIndex + 1) : '';
    if (username !== ADMIN_USER || password !== ADMIN_PASS) {
      return unauthorizedResponse();
    }
    return NextResponse.next();
  } catch {
    return unauthorizedResponse();
  }
}

export const config = {
  matcher: ['/admin/admin-log-panel/:path*', '/api/admin-logs/:path*'],
};
