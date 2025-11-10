import { NextResponse } from 'next/server';

export function middleware(request) {
  const country = request.headers.get('x-vercel-ip-country') || 'UNKNOWN';

  // Bloqueia visitantes do Brasil
  if (country === 'BR') {
    return new NextResponse('Acesso não permitido.', { status: 403 });
  }

  // Caso contrário, permite acesso
  return NextResponse.next();
}

export const config = {
  matcher: '/' // Aplica a todas as rotas
};