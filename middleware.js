import { NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*', // aplica em todas as rotas
};

export function middleware(request) {
  // Não bloqueia em desenvolvimento (localhost)
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  // Primeiro tenta o header (que já vimos que vem como US pra você)
  const headerCountry = request.headers.get('x-vercel-ip-country') || 'UNKNOWN';

  // Também tenta o geo, por garantia
  const geoCountry = request.geo?.country || 'UNKNOWN';

  // Se qualquer um dos dois vier como BR, bloqueia
  const country = headerCountry !== 'UNKNOWN' ? headerCountry : geoCountry;

  if (country === 'BR') {
    return new NextResponse('Acesso não permitido.', { status: 403 });
  }

  return NextResponse.next();
}
