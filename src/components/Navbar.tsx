'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, UserCheck, RefreshCw, Download, PlusCircle, Users, LogOut, CheckCircle2, X, LayoutDashboard, ArrowLeftRight, Settings, PieChart } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [currentRole, setCurrentRole] = useState('ADMIN');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isTxModalOpen, setIsTxModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleRoleSwitch = async (role: string) => {
    const emailMap: Record<string, string> = {
      ADMIN: 'admin@fintech.com',
      ANALYST: 'analyst@fintech.com',
      VIEWER: 'viewer@fintech.com',
    };
    try {
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailMap[role] }),
      });
      setCurrentRole(role);
      showNotification(`Rôle basculé avec succès : ${role}`);
      setTimeout(() => window.location.reload(), 800);
    } catch (error) {
      console.error('Erreur lors du changement de rôle', error);
      showNotification('Erreur réseau lors du changement de rôle.');
    }
  };

  const handleLogout = () => {
    document.cookie = 'token=; Max-Age=0; path=/;';
    showNotification('Déconnexion réussie.');
    setTimeout(() => { window.location.href = '/'; }, 1000);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      showNotification('Données synchronisées avec succès !');
    }, 1000);
  };

  const handleExport = () => {
    if (currentRole === 'VIEWER') {
      showNotification('⚠️ Action non autorisée pour votre rôle.');
      return;
    }
    showNotification('📥 Rapport exporté (CSV/PDF).');
  };

  const handleTeamSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Nouveau', email: 'test@fintech.com', role: 'ANALYST' })
      });
      setIsTeamModalOpen(false);
      showNotification('Collaborateur ajouté à la base de données !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout', error);
      showNotification('Erreur lors de l\'ajout du collaborateur.');
    }
  };

  const navLinks = [
    { name: 'Vue d\'ensemble', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Transactions', href: '/dashboard/transactions', icon: ArrowLeftRight },
    { name: 'Rapports IA', href: '/dashboard/reports', icon: PieChart },
    { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <>
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 border border-sky-500/40 text-slate-200 px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-md animate-bounce">
          <CheckCircle2 className="text-sky-400" size={20} />
          <span className="text-sm font-medium">{notification}</span>
        </div>
      )}

      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-xl px-8 py-3 flex flex-wrap justify-between items-center sticky top-0 z-40 gap-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-tr from-sky-600 to-indigo-600 rounded-xl text-white shadow-lg shadow-sky-500/20">
            <Shield size={20} />
          </div>
          <div className="mr-6">
            <h1 className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Fintech<span className="text-sky-400">Analytics</span>
            </h1>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/50 p-1 rounded-xl border border-slate-800">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.name} href={link.href} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-slate-800 text-sky-400 shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}`}>
                <Icon size={16} className={isActive ? 'text-sky-400' : 'text-slate-500'} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={handleRefresh} disabled={isRefreshing} className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition active:scale-95 shadow-sm">
            <RefreshCw size={16} className={isRefreshing ? 'animate-spin text-sky-400' : ''} />
          </button>

          <button onClick={handleExport} className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition active:scale-95 shadow-sm">
            <Download size={16} className="text-sky-400" />
          </button>

          {currentRole !== 'VIEWER' && (
            <button onClick={() => setIsTeamModalOpen(true)} className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 hover:bg-slate-800 hover:text-sky-300 transition active:scale-95 shadow-sm">
              <Users size={16} />
            </button>
          )}

          {currentRole !== 'VIEWER' && (
            <button onClick={() => setIsTxModalOpen(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-sm font-semibold text-white transition active:scale-95 shadow-lg shadow-sky-500/25">
              <PlusCircle size={16} />
              <span className="hidden sm:inline">Transaction</span>
            </button>
          )}

          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl shadow-inner ml-2">
            <span className="text-xs font-medium text-slate-500 px-1.5 flex items-center"><UserCheck size={14} className="text-emerald-500" /></span>
            {['ADMIN', 'ANALYST', 'VIEWER'].map((r) => (
              <button key={r} onClick={() => handleRoleSwitch(r)} className={`px-2 py-1 text-xs font-bold rounded-lg transition-all ${currentRole === r ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/80'}`}>{r.slice(0,3)}</button>
            ))}
          </div>

          <button onClick={handleLogout} className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 transition active:scale-95 shadow-sm ml-1"><LogOut size={16} /></button>
        </div>
      </header>

      {/* Modales */}
      {isTxModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 w-full max-w-md shadow-2xl relative">
            <button onClick={() => setIsTxModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={18} /></button>
            <h3 className="text-lg font-bold text-white mb-6">Nouvelle Transaction</h3>
            <form onSubmit={(e) => { e.preventDefault(); setIsTxModalOpen(false); showNotification('Transaction enregistrée !'); }} className="space-y-4">
              <input type="text" required placeholder="Bénéficiaire" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition" />
              <input type="number" required placeholder="Montant" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition" />
              <button type="submit" className="w-full py-2.5 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-500 transition">Valider</button>
            </form>
          </div>
        </div>
      )}

      {isTeamModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 w-full max-w-md shadow-2xl relative">
            <button onClick={() => setIsTeamModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={18} /></button>
            <h3 className="text-lg font-bold text-white mb-6">Ajouter à l'équipe</h3>
            <form onSubmit={handleTeamSubmit} className="space-y-4">
              <input type="email" required placeholder="Email du collaborateur" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition" />
              <button type="submit" className="w-full py-2.5 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-500 transition">Inviter</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}