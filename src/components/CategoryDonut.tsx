'use client';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Revenus', value: 54 },
  { name: 'Dépenses', value: 24 },
  { name: 'Investissements', value: 15 },
  { name: 'Transferts', value: 7 },
];
const COLORS = ['#0284c7', '#f43f5e', '#10b981', '#f59e0b'];

export default function CategoryDonut() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">Répartition par Catégorie</h3>
      <div className="h-72 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value">
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
