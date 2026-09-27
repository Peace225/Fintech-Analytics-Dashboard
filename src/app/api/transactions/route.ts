import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;
    
    // Vérification de l'authentification (optionnel en dev, recommandé)
    const user = token ? await verifyToken(token) : null;
    const role = user?.role || 'VIEWER';

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    // Requête Prisma vers SQLite
    const transactions = await prisma.transaction.findMany({
      where: category && category !== 'ALL' ? { category } : undefined,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return NextResponse.json({ success: true, role, data: transactions });
  } catch (error) {
    console.error('Erreur API Transactions:', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}