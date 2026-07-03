import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRightLeft, UserPlus, Bell, CheckCircle } from 'lucide-react';

export default function LendBorrowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCard, setActiveCard] = useState(0);

  const transactions = [
    { name: 'Sarah M.', amount: 150, type: 'owed', status: 'pending', avatar: 'S' },
    { name: 'John D.', amount: 75, type: 'borrowed', status: 'paid', avatar: 'J' },
    { name: 'Mike R.', amount: 200, type: 'owed', status: 'pending', avatar: 'M' },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center snap-start bg-gradient-to-b from-background to-secondary/30 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <ArrowRightLeft className="w-4 h-4 text-neon-blue" />
              <span className="text-neon-blue text-sm">Unique Feature</span>
            </motion.div>

            <h2
              className="mb-6 text-foreground"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.2, fontWeight: 700 }}
            >
              Lend & Borrow
              <br />
              <span className="text-neon-blue">without awkwardness</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Track money you've lent or borrowed from friends. Set reminders,
              split bills, and keep friendships intact.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: UserPlus,
                  title: 'Add transactions instantly',
                  description: 'Quick entry for IOUs and shared expenses',
                },
                {
                  icon: Bell,
                  title: 'Gentle reminders',
                  description: 'Auto-notifications that keep things friendly',
                },
                {
                  icon: CheckCircle,
                  title: 'Track settlements',
                  description: 'Mark as paid and keep a clean history',
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Interactive Card Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Card */}
              <div className="relative p-8 bg-gradient-to-br from-card to-secondary rounded-3xl border border-neon-blue/30 shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-neon-blue/5 blur-xl" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-semibold">Lend & Borrow</h3>
                    <div className="px-3 py-1 bg-neon-blue/20 rounded-full">
                      <span className="text-neon-blue text-sm font-semibold">$425</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {transactions.map((transaction, index) => (
                      <motion.div
                        key={index}
                        className="relative p-4 bg-background/50 rounded-2xl border border-border hover:border-neon-blue/50 cursor-pointer transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        onClick={() => setActiveCard(index)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                              {transaction.avatar}
                            </div>
                            <div>
                              <p className="font-semibold">{transaction.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {transaction.type === 'owed' ? 'Owes you' : 'You borrowed'}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-bold ${transaction.type === 'owed' ? 'text-green-500' : 'text-orange-500'}`}>
                              {transaction.type === 'owed' ? '+' : '-'}${transaction.amount}
                            </p>
                            <div className="flex items-center gap-1 justify-end mt-1">
                              {transaction.status === 'paid' ? (
                                <>
                                  <CheckCircle className="w-3 h-3 text-green-500" />
                                  <span className="text-xs text-green-500">Paid</span>
                                </>
                              ) : (
                                <span className="text-xs text-orange-500">Pending</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-neon-blue to-purple-500 rounded-2xl text-white font-semibold hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add Transaction
                  </motion.button>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                className="absolute -top-4 -right-4 p-4 bg-card border border-neon-blue/30 rounded-2xl shadow-lg backdrop-blur-sm max-w-[200px]"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="flex items-start gap-2">
                  <Bell className="w-4 h-4 text-neon-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold mb-1">Reminder</p>
                    <p className="text-xs text-muted-foreground">Sarah's payment due tomorrow</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
