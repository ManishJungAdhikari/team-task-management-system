import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import PageHeader from '../components/PageHeader.jsx';
import StatCard from '../components/StatCard.jsx';

const weeklyProgress = [
  { week: 'W1', tasks: 4 },
  { week: 'W2', tasks: 6 },
  { week: 'W3', tasks: 8 },
  { week: 'W4', tasks: 9 },
  { week: 'W5', tasks: 7 },
  { week: 'W6', tasks: 10 },
];

export default function Analytics() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Progress insights"
        title="Analytics"
        description="Visualize weekly progress and productivity trends across active work."
      />

      <section className="stats-grid">
        <StatCard label="Weekly Average" value="7.3" hint="Tasks completed" />
        <StatCard label="Focus Score" value="86%" hint="Based on planned work" tone="green" />
        <StatCard label="Open Issues" value="3" hint="Remaining UI fixes" tone="orange" />
        <StatCard label="Review Rate" value="92%" hint="Feedback addressed" tone="purple" />
      </section>

      <section className="panel chart-panel">
        <div className="panel-header">
          <h2>Weekly Task Completion</h2>
          <span>Milestone tracking</span>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={weeklyProgress}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="tasks" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
