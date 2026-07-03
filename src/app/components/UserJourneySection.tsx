import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Coffee, ShoppingBag, Car, Home, Utensils, Film } from 'lucide-react';

export default function UserJourneySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const journeySteps = [
    {
      time: '7:30 AM',
      icon: Coffee,
      title: 'Morning Coffee',
      amount: '-$4.50',
      category: 'Food & Drink',
      layer: y1,
    },
    {
      time: '12:15 PM',
      icon: Utensils,
      title: 'Lunch Break',
      amount: '-$12.00',
      category: 'Food & Drink',
      layer: y2,
    },
    {
      time: '3:45 PM',
      icon: ShoppingBag,
      title: 'Quick Shopping',
      amount: '-$45.99',
      category: 'Shopping',
      layer: y3,
    },
    {
      time: '6:30 PM',
      icon: Car,
      title: 'Uber Home',
      amount: '-$18.50',
      category: 'Transport',
      layer: y1,
    },
    {
      time: '8:00 PM',
      icon: Film,
      title: 'Movie Night',
      amount: '-$28.00',
      category: 'Entertainment',
      layer: y2,
    },
  ];

  return (
    <section
      id="journey"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center snap-start bg-background py-20 overflow-hidden"
    >
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="inline-block text-neon-blue mb-4">
            A Day With Expensa
          </motion.span>
          <h2
            className="mb-6 text-foreground"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.2, fontWeight: 700 }}
          >
            Every transaction,
            <br />
            <span className="text-neon-blue">automatically tracked</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From morning coffee to evening entertainment—see how Expensa captures it all
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-neon-blue to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Content Card */}
                  <motion.div
                    className={`relative w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}
                    style={{ y: step.layer }}
                  >
                    <motion.div
                      className="p-6 bg-gradient-to-br from-card to-secondary rounded-2xl border border-border hover:border-neon-blue/50 transition-all"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className={`flex items-start gap-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-neon-blue" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-neon-blue mb-1">{step.time}</p>
                          <h4 className="font-semibold mb-1">{step.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{step.category}</p>
                          <p className="text-lg font-bold text-orange-500">{step.amount}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Center dot */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-background shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Daily Summary */}
          <motion.div
            className="mt-16 p-8 bg-gradient-to-br from-card to-secondary rounded-3xl border border-neon-blue/30 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Total Spent</p>
                <p className="text-3xl font-bold text-orange-500">-$108.99</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Transactions</p>
                <p className="text-3xl font-bold text-neon-blue">5</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Budget Remaining</p>
                <p className="text-3xl font-bold text-green-500">$891.01</p>
              </div>
            </div>
            <motion.div
              className="mt-6 h-2 bg-secondary rounded-full overflow-hidden"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-neon-blue to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: '89%' }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </motion.div>
            <p className="text-sm text-muted-foreground mt-2">89% of daily budget remaining</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
