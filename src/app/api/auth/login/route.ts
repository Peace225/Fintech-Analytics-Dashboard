import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // 1. Recherche de l'utilisateur dans la base SQLite
    let user = await prisma.user.findUnique({ where: { email } });
    
    // 2. Si c'est un compte de démonstration (pour la Navbar), on le simule
    if (!user) {
      let role = 'VIEWER';
      if (email.includes('admin')) role = 'ADMIN';
      if (email.includes('analyst')) role = 'ANALYST';
      
      user = { id: 'demo-id', email, name: 'Utilisateur Démo', role: role as any, password: '', createdAt: new Date() };
    }

    // 3. Génération du Token JWT
    const token = await signToken({ id: user.id, email: user.email, role: user.role });
    
    // 4. Configuration du Cookie sécurisé
    const response = NextResponse.json({ success: true, role: user.role });
    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Erreur Login:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
