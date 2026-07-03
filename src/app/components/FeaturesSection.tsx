import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Wallet,
  TrendingUp,
  PieChart,
  Bell,
  Shield,
  Repeat,
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Wallet,
      title: 'Smart Wallet',
      description: 'Connect all your accounts and cards in seconds',
      details: 'Bank-level encryption keeps your data secure while syncing transactions in real-time.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: PieChart,
      title: 'Visual Budgets',
      description: 'Set limits that flex with your lifestyle',
      details: 'Dynamic budgets that adapt to your income and spending patterns automatically.',
      gradient: 'from-neon-blue to-purple-500',
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Understand spending patterns over time',
      details: 'Machine learning identifies opportunities to save and alerts you to unusual spending.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Never miss a bill or opportunity to save',
      details: 'Customizable notifications that keep you informed without overwhelming you.',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Fraud Protection',
      description: 'Advanced security monitoring 24/7',
      details: 'AI-powered fraud detection alerts you to suspicious activity instantly.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Repeat,
      title: 'Subscription Tracker',
      description: 'See all recurring charges in one view',
      details: 'Identify forgotten subscriptions and cancel directly from the app.',
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section id="features" className="relative py-20 snap-start bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-neon-blue mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Features
          </motion.span>
          <h2
            className="mb-6 text-foreground"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.2, fontWeight: 700 }}
          >
            Everything you need,
            <br />
            <span className="text-neon-blue">nothing you don't</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="relative h-full p-8 bg-card border border-border rounded-3xl hover:border-neon-blue/50 transition-all duration-300 overflow-hidden">
        {/* Animated gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl bg-neon-blue/10 transition-all duration-500 -z-10" />

        <motion.div
          className={`w-14 h-14 mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
          {feature.title}
        </h3>
        <p className="text-foreground/80 mb-4 leading-relaxed">{feature.description}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{feature.details}</p>

        {/* Hover arrow indicator */}
        <motion.div
          className="absolute bottom-6 right-6 w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ x: 5 }}
        >
          <span className="text-neon-blue text-sm">→</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
