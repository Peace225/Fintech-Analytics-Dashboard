import KPICards from '@/components/KPICards';
import TransactionChart from '@/components/TransactionChart';
import CategoryDonut from '@/components/CategoryDonut';
import FraudScatter from '@/components/FraudScatter';
import TransactionTable from '@/components/TransactionTable';
import AIInsightsCard from '@/components/AIInsightsCard';
import { Activity, Calendar } from 'lucide-react';

export default function DashboardPage() {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="flex-1 p-8 space-y-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      
      {/* Background Glows (Profondeur et effet néon subtil) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* En-tête du Dashboard */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/40 p-6 rounded-3xl border border-slate-800/60 backdrop-blur-md shadow-sm">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Aperçu Global
          </h1>
          <p className="text-sm text-slate-400 mt-1 flex items-center gap-2">
            <Activity size={14} className="text-sky-400" />
            Surveillance en temps réel des flux financiers
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-950/50 border border-slate-800 rounded-xl shadow-inner text-sm font-medium text-slate-300">
          <Calendar size={16} className="text-indigo-400" />
          <span className="capitalize">{currentDate}</span>
        </div>
      </div>

      {/* KPIs Principaux */}
      <div className="relative z-10">
        <KPICards />
      </div>
      
      {/* Section Centrale : Graphique principal & IA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        <div className="lg:col-span-8">
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-800/60 p-1 shadow-xl h-full hover:border-slate-700/80 transition-colors duration-300">
            <TransactionChart />
          </div>
        </div>
        <div className="lg:col-span-4 space-y-8 flex flex-col">
          <AIInsightsCard />
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-800/60 p-1 shadow-xl flex-1 hover:border-slate-700/80 transition-colors duration-300">
            <CategoryDonut />
          </div>
        </div>
      </div>

      {/* Section Basse : Risques & Tableau Live */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        <div className="lg:col-span-5">
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-800/60 p-1 shadow-xl h-full hover:border-slate-700/80 transition-colors duration-300">
            <FraudScatter />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-800/60 p-1 shadow-xl h-full hover:border-slate-700/80 transition-colors duration-300">
            <TransactionTable />
          </div>
        </div>
      </div>
    </main>
  );
}