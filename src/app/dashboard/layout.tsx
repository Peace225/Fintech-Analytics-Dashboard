import Navbar from '@/components/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white relative">
      <Navbar />
      {/* Le contenu spécifique de chaque page (ex: page.tsx, transactions/page.tsx) s'affiche ici */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
