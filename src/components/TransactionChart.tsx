'use client';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { time: '08:00', value: 4000 },
  { time: '10:00', value: 7800 },
  { time: '12:00', value: 12500 },
  { time: '14:00', value: 10200 },
  { time: '16:00', value: 19800 },
  { time: '18:00', value: 24500 },
];

export default function TransactionChart() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">Flux de Transactions en Temps Réel</h3>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0284c7" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0284c7" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
            <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }} />
            <Area type="monotone" dataKey="value" stroke="#0284c7" strokeWidth={3} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
