import { NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*', // todas as rotas
};

export function middleware(request) {
  const geoCountry = request.geo?.country || 'UNKNOWN';
  const headerCountry = request.headers.get('x-vercel-ip-country') || 'UNKNOWN';

  const body = `
MIDDLEWARE DEBUG
---------------

Geo country:    ${geoCountry}
Header country: ${headerCountry}
NODE_ENV:       ${process.env.NODE_ENV}
URL:            ${request.url}
`;

  return new NextResponse(body, {
    status: 200,
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
