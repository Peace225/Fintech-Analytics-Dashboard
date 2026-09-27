'use client';

import { useState } from 'react';
import TransactionTable from '@/components/TransactionTable';
import { Search, Filter, ArrowDownUp, Download, Calendar, TrendingUp, CheckCircle2, Clock } from 'lucide-react';

export default function TransactionsPage() {
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = [
    { id: 'ALL', label: 'Toutes les transactions' },
    { id: 'SUCCESS', label: 'Complétées' },
    { id: 'PENDING', label: 'En attente' },
    { id: 'FAILED', label: 'Échouées' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      
      {/* Glow de fond subtil pour l'effet Premium */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* En-tête de la page */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Historique des Transactions
          </h1>
          <p className="text-sm text-slate-400 mt-2">Gérez, filtrez et analysez vos flux financiers en temps réel.</p>
        </div>
        
        {/* Barre de recherche et actions rapides */}
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Rechercher un ID, un client..." 
              className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all shadow-inner placeholder:text-slate-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/50 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all shadow-sm active:scale-95">
            <Filter size={16} className="text-sky-400" /> <span className="hidden sm:inline">Filtres</span>
          </button>
          <button title="Exporter la liste" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/50 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all shadow-sm active:scale-95">
            <Download size={16} className="text-emerald-400" />
          </button>
        </div>
      </div>

      {/* Mini-KPIs contextuels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Volume du jour', value: '$24,500', icon: TrendingUp, color: 'text-sky-400', bg: 'bg-sky-400/10' },
          { label: 'Taux de succès', value: '98.2%', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
          { label: 'Flux en attente', value: '14', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-400/10' },
          { label: 'Période active', value: 'Septembre', icon: Calendar, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:bg-slate-900/60 transition-colors">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">{stat.label}</p>
              <p className="text-lg font-bold text-slate-100">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Zone du Tableau avec Onglets de filtrage rapide */}
      <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative">
        
        {/* Navigation des onglets (Tabs) */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-800 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="flex-1" />
          <button className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors">
            Trier par date <ArrowDownUp size={14} />
          </button>
        </div>

        {/* Conteneur du tableau */}
        <div className="p-2">
          {/* Le tableau gérera lui-même ses données, mais la structure d'accueil est luxueuse */}
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}