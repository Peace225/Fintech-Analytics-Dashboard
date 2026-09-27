import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role } = body;

    // Création du nouvel utilisateur dans SQLite
    const newUser = await prisma.user.create({
      data: {
        name: name || 'Nouveau Collaborateur',
        email,
        role,
        password: 'temporary-password-123', // Dans un cas réel, on enverrait un email pour définir le mot de passe
      }
    });

    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error('Erreur Ajout Équipe:', error);
    return NextResponse.json({ error: 'Erreur lors de la création du collaborateur.' }, { status: 500 });
  }
}
