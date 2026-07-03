import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { TrendingUp, DollarSign, Target, Award } from 'lucide-react';

export default function AnalyticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeChart, setActiveChart] = useState(0);

  const spendingData = [
    { month: 'Jan', amount: 2400 },
    { month: 'Feb', amount: 2210 },
    { month: 'Mar', amount: 2690 },
    { month: 'Apr', amount: 2100 },
    { month: 'May', amount: 2450 },
    { month: 'Jun', amount: 2200 },
  ];

  const categoryData = [
    { name: 'Food', value: 30, color: '#6366f1' },
    { name: 'Transport', value: 20, color: '#8b5cf6' },
    { name: 'Entertainment', value: 15, color: '#ec4899' },
    { name: 'Bills', value: 25, color: '#10b981' },
    { name: 'Other', value: 10, color: '#f59e0b' },
  ];

  const stats = [
    { icon: DollarSign, label: 'Avg. Monthly Savings', value: '$847', change: '+12%' },
    { icon: TrendingUp, label: 'Budget Adherence', value: '94%', change: '+8%' },
    { icon: Target, label: 'Goals on Track', value: '5/6', change: '' },
    { icon: Award, label: 'Money Saved This Year', value: '$10,164', change: '+18%' },
  ];

  return (
    <section
      id="analytics"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center snap-start bg-background py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="inline-block text-neon-blue mb-4">
            Analytics
          </motion.span>
          <h2
            className="mb-6 text-foreground"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.2, fontWeight: 700 }}
          >
            Data that <span className="text-neon-blue">drives decisions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful visualizations turn your spending into actionable insights
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative p-6 bg-gradient-to-br from-card to-secondary rounded-2xl border border-border"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, borderColor: 'var(--neon-blue)' }}
              >
                <Icon className="w-8 h-8 text-neon-blue mb-3" />
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                {stat.change && (
                  <p className="text-xs text-green-500">{stat.change}</p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Chart Showcase */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Spending Trend Chart */}
          <div className="relative p-8 bg-gradient-to-br from-card to-secondary rounded-3xl border border-border">
            <div className="mb-6">
              <h3 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Spending Trend
              </h3>
              <p className="text-sm text-muted-foreground">Monthly overview</p>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={spendingData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--neon-blue)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--neon-blue)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="var(--neon-blue)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorAmount)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Category Breakdown */}
          <div className="relative p-8 bg-gradient-to-br from-card to-secondary rounded-3xl border border-border">
            <div className="mb-6">
              <h3 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Category Breakdown
              </h3>
              <p className="text-sm text-muted-foreground">This month</p>
            </div>
            <div className="flex items-center justify-between">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-3">
                {categoryData.map((category, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span className="text-sm font-semibold">{category.value}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Highlight */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-neon-blue/10 to-purple-500/10 border border-neon-blue/30 rounded-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-lg">
            <span className="text-neon-blue font-semibold">Real-time insights</span> help you make
            better financial decisions <span className="text-neon-blue font-semibold">instantly</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
