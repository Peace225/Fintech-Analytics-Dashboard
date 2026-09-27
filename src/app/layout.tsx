import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fintech Analytics Platform',
  description: 'Visualisation avancée de transactions financières et RBAC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-sky-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}