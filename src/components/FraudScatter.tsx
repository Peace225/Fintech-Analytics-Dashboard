'use client';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { amount: 1200, risk: 0.05 },
  { amount: 5400, risk: 0.12 },
  { amount: 18900, risk: 0.85 },
  { amount: 3200, risk: 0.02 },
  { amount: 14500, risk: 0.45 },
];

export default function FraudScatter() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">Détection d'Anomalies & Risques</h3>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="amount" name="Montant ($)" stroke="#64748b" fontSize={12} />
            <YAxis dataKey="risk" name="Score Risque" stroke="#64748b" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }} cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Transactions" data={data} fill="#f43f5e" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
