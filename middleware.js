import { NextResponse } from 'next/server';

export function middleware(request) {
  // Simula país Brasil para teste local
  const country = 'BR';  // Mude para 'US' para testar acesso permitido

  // Bloqueia visitantes do Brasil
  if (country === 'BR') {
    return new NextResponse('Acesso não permitido.', { status: 403 });
  }

  // Caso contrário, permite acesso
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};