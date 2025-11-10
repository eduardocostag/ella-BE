import { NextResponse } from 'next/server';

export const config = {
  // Aplica o middleware em todas as rotas
  matcher: '/:path*',
};

export function middleware(request) {
  // Em desenvolvimento (localhost) não bloqueia nada
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  // Vercel geralmente expõe o país aqui:
  const geoCountry = request.geo?.country || 'UNKNOWN';

  // Fallback para o header, se existir:
  const headerCountry =
    request.headers.get('x-vercel-ip-country') || 'UNKNOWN';

  // Usa o que estiver disponível
  const country = geoCountry !== 'UNKNOWN' ? geoCountry : headerCountry;

  // Bloqueia visitantes do Brasil
  if (country === 'BR') {
    return new NextResponse('Acesso não permitido.', { status: 403 });
  }

  // Caso contrário, permite acesso normalmente
  return NextResponse.next();
}
