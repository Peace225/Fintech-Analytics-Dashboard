'use client';

import { useState } from 'react';
import { User, Shield, Bell, Users, Key, Save, CheckCircle2, Lock, Copy, MapPin, Briefcase } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulation d'un appel API vers votre base SQLite
    setTimeout(() => {
      setIsSaving(false);
      showNotification('Modifications sauvegardées avec succès !');
    }, 1200);
  };

  const tabs = [
    { id: 'profile', name: 'Profil Utilisateur', icon: User },
    { id: 'security', name: 'Sécurité & RBAC', icon: Shield },
    { id: 'team', name: 'Gestion de l\'équipe', icon: Users },
    { id: 'api', name: 'Clés API', icon: Key },
    { id: 'notifications', name: 'Notifications', icon: Bell },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      
      {/* Glow de fond subtil */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 border border-emerald-500/40 text-slate-200 px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-md animate-bounce">
          <CheckCircle2 className="text-emerald-400" size={20} />
          <span className="text-sm font-medium">{notification}</span>
        </div>
      )}

      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Paramètres du système
        </h1>
        <p className="text-sm text-slate-400 mt-2">Gérez votre environnement, la sécurité de vos flux et vos accès d'équipe.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Sidebar des paramètres interactive */}
        <div className="md:col-span-4 lg:col-span-3 space-y-2">
          {tabs.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button 
                key={item.id} 
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-sky-600/20 to-transparent text-sky-400 border border-sky-500/20 shadow-sm' 
                    : 'text-slate-400 hover:bg-slate-900/80 hover:text-slate-200 border border-transparent'
                }`}
              >
                <item.icon size={18} className={isActive ? 'text-sky-400' : 'text-slate-500'} /> 
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Contenu principal dynamique */}
        <div className="md:col-span-8 lg:col-span-9 space-y-6">
          
          {activeTab === 'profile' && (
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-800 animate-in fade-in zoom-in-95 duration-300">
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <User className="text-sky-400" size={22} /> Informations personnelles
              </h3>
              
              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Prénoms</label>
                    <input type="text" defaultValue="Brad Sergueï Falcone" required className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all shadow-inner" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Nom</label>
                    <input type="text" defaultValue="KOKOLIKO" required className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all shadow-inner" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide flex items-center gap-1.5"><MapPin size={14}/> Localisation</label>
                    <input type="text" defaultValue="Abidjan" required className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all shadow-inner" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide flex items-center gap-1.5"><Briefcase size={14}/> Fonction</label>
                    <input type="text" defaultValue="Full Stack Developer & Juriste Digital" required className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all shadow-inner" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Adresse Email (Identifiant)</label>
                  <input type="email" defaultValue="admin@fintech.com" disabled className="w-full bg-slate-950/30 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-500 cursor-not-allowed" />
                  <p className="text-xs text-slate-500 mt-2">L'adresse email est liée à vos habilitations RBAC et ne peut être modifiée ici.</p>
                </div>
                
                <div className="pt-6 border-t border-slate-800/80 flex justify-end">
                  <button 
                    type="submit" 
                    disabled={isSaving}
                    className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-sm font-bold text-white transition-all active:scale-95 shadow-lg shadow-sky-600/25 disabled:opacity-70 min-w-[200px]"
                  >
                    {isSaving ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <><Save size={18} /> Sauvegarder le profil</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-800 animate-in fade-in zoom-in-95 duration-300">
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Shield className="text-emerald-400" size={22} /> Sécurité & Accès
              </h3>
              <div className="space-y-6">
                <div className="p-5 border border-emerald-500/20 bg-emerald-500/5 rounded-2xl flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">Authentification à Double Facteur (2FA)</h4>
                    <p className="text-xs text-slate-400 mt-1">Sécurisez l'accès à votre compte Fintech Analytics.</p>
                  </div>
                  <button onClick={() => showNotification('Configuration 2FA initiée.')} className="px-4 py-2 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 text-xs font-bold rounded-lg transition-colors border border-emerald-500/30">
                    Activer
                  </button>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-200 mb-4">Changer le mot de passe</h4>
                  <div className="space-y-4">
                    <input type="password" placeholder="Mot de passe actuel" className="w-full max-w-md bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition-all shadow-inner" />
                    <input type="password" placeholder="Nouveau mot de passe" className="w-full max-w-md bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition-all shadow-inner" />
                    <button onClick={() => showNotification('Mot de passe mis à jour.')} className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-white transition-all shadow-sm">
                      Mettre à jour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-800 animate-in fade-in zoom-in-95 duration-300">
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Key className="text-amber-400" size={22} /> Clés d'API Rest
              </h3>
              <p className="text-sm text-slate-400 mb-6">Utilisez ces clés pour connecter vos applications externes (Node.js, Python) à la plateforme.</p>
              
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Clé Secrète de Production</label>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-slate-950 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-300 font-mono flex items-center gap-2">
                    <Lock size={14} className="text-amber-500"/> sk_prod_••••••••••••••••••••••••9f2a
                  </div>
                  <button onClick={() => showNotification('Clé API copiée dans le presse-papier.')} className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors shadow-sm">
                    <Copy size={18} />
                  </button>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button onClick={() => showNotification('Nouvelle clé API générée.')} className="px-6 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/20 text-sm font-semibold transition-all">
                  Générer une nouvelle clé
                </button>
              </div>
            </div>
          )}

          {/* Placeholders pour les autres onglets */}
          {(activeTab === 'team' || activeTab === 'notifications') && (
            <div className="bg-slate-900/60 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-slate-800 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-300 min-h-[400px]">
              <div className="p-4 bg-slate-800/50 rounded-full mb-4">
                {activeTab === 'team' ? <Users size={32} className="text-indigo-400" /> : <Bell size={32} className="text-sky-400" />}
              </div>
              <h3 className="text-lg font-bold text-slate-200 mb-2">Module en développement</h3>
              <p className="text-sm text-slate-400 max-w-sm">
                Les réglages détaillés pour {activeTab === 'team' ? "la gestion d'équipe" : "les notifications"} seront bientôt connectés à l'API principale.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}