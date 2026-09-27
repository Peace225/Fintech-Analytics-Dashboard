'use client';

import AIInsightsCard from '@/components/AIInsightsCard';
import CategoryDonut from '@/components/CategoryDonut';
import { FileText, Download, Sparkles, Bot, ChevronRight, Zap } from 'lucide-react';

export default function ReportsPage() {
  const pastReports = [
    { date: 'Août 2026', type: 'Audit Trimestriel', status: 'Généré' },
    { date: 'Juillet 2026', type: 'Analyse de Risque', status: 'Généré' },
    { date: 'Juin 2026', type: 'Rapport Mensuel', status: 'Archivé' },
    { date: 'Mai 2026', type: 'Bilan de Conformité', status: 'Archivé' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      
      {/* Glow de fond subtil pour l'effet Premium */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* En-tête de la page */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold tracking-wider flex items-center gap-1.5">
              <Bot size={14} /> Moteur IA Actif
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Rapports & Intelligence Artificielle
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Analyses prédictives, détection d'anomalies et génération automatisée de rapports financiers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Colonne de gauche (Widgets d'analyse) */}
        <div className="lg:col-span-7 space-y-8">
          <AIInsightsCard />
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative">
            <CategoryDonut />
          </div>
        </div>

        {/* Colonne de droite (Générateur & Archives) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Section Génération Rapide */}
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-indigo-500/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all" />
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Zap className="text-indigo-400" size={18} /> Générateur IA
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Compilez les données du mois en cours pour générer un rapport complet instantané.
            </p>
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-sm font-bold text-white transition-all active:scale-95 shadow-lg shadow-indigo-600/25">
              <Sparkles size={16} /> Générer le rapport d'Octobre
            </button>
          </div>

          {/* Section Archives */}
          <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-slate-100">Archives des Rapports</h3>
              <button className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition flex items-center gap-1">
                Voir tout <ChevronRight size={14} />
              </button>
            </div>
            
            <div className="space-y-3">
              {pastReports.map((report, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/50 border border-slate-800/50 hover:border-slate-700 hover:bg-slate-800/50 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-800/80 rounded-xl text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/10 transition-all">
                      <FileText size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">{report.type}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-slate-500">{report.date}</p>
                        <span className="text-slate-700">•</span>
                        {report.status === 'Généré' ? (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            Généré
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
                            Archivé
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-slate-500 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-all opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0">
                    <Download size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}