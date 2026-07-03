import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Eye, Zap } from 'lucide-react';

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center snap-start overflow-hidden bg-background"
    >
      {/* Parallax background layers */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: y1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue rounded-full blur-[120px]" />
      </motion.div>
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: y2 }}
      >
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue-light rounded-full blur-[120px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-neon-blue">The Solution</span>
          </motion.div>

          <h2
            className="mb-6 bg-gradient-to-r from-foreground to-neon-blue bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1.2, fontWeight: 700 }}
          >
            One app.
            <br />
            Complete clarity.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expensa automatically captures, categorizes, and visualizes every transaction—
            giving you a crystal-clear view of your financial life.
          </p>
        </motion.div>

        {/* Layered app UI showcase */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: 'Instant Visibility',
                description: 'See all your accounts in one place',
                delay: 0.2,
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Zap,
                title: 'Smart Categorization',
                description: 'AI that learns your spending patterns',
                delay: 0.4,
                color: 'from-neon-blue to-purple-500',
              },
              {
                icon: Sparkles,
                title: 'Actionable Insights',
                description: 'Recommendations that actually help',
                delay: 0.6,
                color: 'from-purple-500 to-pink-500',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: feature.delay, duration: 0.8 }}
                  style={{ perspective: 1000 }}
                >
                  <div className="relative h-full p-8 bg-gradient-to-br from-card to-secondary rounded-3xl border border-border group-hover:border-neon-blue/50 transition-all duration-300">
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-br from-neon-blue/20 to-transparent transition-all duration-500 -z-10" />

                    <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Animated line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-blue to-transparent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : {}}
                      transition={{ delay: feature.delay + 0.5, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central connection visual */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none hidden md:block"
            initial={{ scale: 0, rotate: 0 }}
            animate={isInView ? { scale: 1, rotate: 360 } : {}}
            transition={{ delay: 0.8, duration: 1.5 }}
          >
            <div className="w-full h-full border-2 border-neon-blue/30 rounded-full" />
            <div className="absolute inset-4 border-2 border-neon-blue/20 rounded-full" />
            <div className="absolute inset-8 border-2 border-neon-blue/10 rounded-full" />
          </motion.div>
        </div>

        {/* Bottom showcase */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="inline-block px-8 py-4 bg-secondary/50 border border-neon-blue/20 rounded-2xl backdrop-blur-sm">
            <p className="text-lg">
              <span className="text-neon-blue font-semibold">10,000+</span> users track{' '}
              <span className="text-neon-blue font-semibold">$50M+</span> monthly on Expensa
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
