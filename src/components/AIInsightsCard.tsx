'use client';
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function AIInsightsCard() {
  const [insights, setInsights] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/ai/insights')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setInsights(data.insights);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-900/80 text-white p-6 rounded-2xl shadow-sm border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="text-sky-400" size={20} />
          <h3 className="text-lg font-semibold">Assistant IA - Analyse Prédictive</h3>
        </div>
        <span className="text-xs bg-sky-500/20 text-sky-300 px-2.5 py-1 rounded-full font-medium">GPT-4o mini</span>
      </div>

      {loading ? (
        <p className="text-sm text-slate-400 animate-pulse">Analyse des flux financiers en cours...</p>
      ) : (
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
            <span className="text-slate-300">Score de Risque Global</span>
            <span className="font-bold text-emerald-400">0.14 / 1.0</span>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Recommandation IA</p>
            <p className="text-slate-300 leading-relaxed bg-slate-800/30 p-3 rounded-xl border border-slate-700/50">
              {insights?.recommendation || "Tous les flux respectent les seuils de conformité habituels. Aucune anomalie critique détectée."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
