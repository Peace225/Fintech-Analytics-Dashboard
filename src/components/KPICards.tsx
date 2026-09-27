import { DollarSign, TrendingUp, ShieldAlert, Activity } from 'lucide-react';

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase">Volume Global</p>
          <h4 className="text-2xl font-bold text-slate-100 mt-1">$128,430</h4>
        </div>
        <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl"><DollarSign size={24} /></div>
      </div>
      <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase">Flux Net</p>
          <h4 className="text-2xl font-bold text-slate-100 mt-1">+22.4%</h4>
        </div>
        <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl"><TrendingUp size={24} /></div>
      </div>
      <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase">Indice de Risque</p>
          <h4 className="text-2xl font-bold text-slate-100 mt-1">0.14 (Faible)</h4>
        </div>
        <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl"><ShieldAlert size={24} /></div>
      </div>
      <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase">Req / Sec</p>
          <h4 className="text-2xl font-bold text-slate-100 mt-1">1,420</h4>
        </div>
        <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl"><Activity size={24} /></div>
      </div>
    </div>
  );
}
