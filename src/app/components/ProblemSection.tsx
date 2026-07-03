import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { AlertCircle, CreditCard, FileQuestion, TrendingDown } from 'lucide-react';

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    {
      icon: FileQuestion,
      title: 'Lost in receipts',
      description: 'Scattered transactions across apps, cards, and cash',
    },
    {
      icon: TrendingDown,
      title: 'No visibility',
      description: 'Where does your money actually go each month?',
    },
    {
      icon: CreditCard,
      title: 'Budget chaos',
      description: 'Plans that never survive the first week',
    },
    {
      icon: AlertCircle,
      title: 'Surprise bills',
      description: 'Subscriptions you forgot about draining your account',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center snap-start bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-neon-blue mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            The Reality
          </motion.span>
          <h2
            className="mb-6 text-foreground"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1.2, fontWeight: 700 }}
          >
            Financial confusion
            <br />
            is <span className="text-neon-blue">exhausting</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Most people don't have a spending problem. They have a visibility problem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <div className="relative p-8 bg-card border border-border rounded-3xl hover:border-neon-blue/50 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-neon-blue/0 group-hover:bg-neon-blue/5 transition-all duration-300" />
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl bg-neon-blue/20 transition-all duration-300 -z-10" />

                  <motion.div
                    className="relative"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <div className="w-14 h-14 mb-6 bg-gradient-to-br from-neon-blue/20 to-neon-blue-dark/20 rounded-2xl flex items-center justify-center border border-neon-blue/30">
                      <Icon className="w-7 h-7 text-neon-blue" />
                    </div>
                  </motion.div>

                  <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground italic">
            "I make good money, but I have no idea where it goes..."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
