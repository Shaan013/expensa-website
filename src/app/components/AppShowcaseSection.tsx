import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Wallet, Plus, PieChart, History, Smartphone, ChevronRight } from 'lucide-react';

export default function AppShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const showcaseItems = [
    {
      title: 'Wallet Overview',
      subtitle: 'Complete financial status at a glance',
      description: 'Get a clean, real-time snapshot of your financial health. View your total balance, track income vs. expense flow, and navigate to key modules instantly.',
      image: '/home_screen.jpg',
      icon: Wallet,
      color: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/20',
      badge: 'Dashboard'
    },
    {
      title: 'Quick Logging',
      subtitle: 'Record transactions in under 5 seconds',
      description: 'Easily log expenses or income on the go. Enter the amount, add descriptions, pick dates, and assign categories with our intuitive grid selector.',
      image: '/add_transaction.jpg',
      icon: Plus,
      color: 'from-red-500 to-pink-500',
      glow: 'shadow-red-500/20',
      badge: 'Input Form'
    },
    {
      title: 'Financial Analysis',
      subtitle: 'Visualize patterns and save smarter',
      description: 'Deep-dive into your financial habits. Beautiful category breakdowns and monthly trend charts make it easy to spot saving opportunities.',
      image: '/financial_analysis.jpg',
      icon: PieChart,
      color: 'from-orange-500 to-yellow-500',
      glow: 'shadow-orange-500/20',
      badge: 'Insights'
    },
    {
      title: 'Transaction History',
      subtitle: 'Clean, filterable purchase logs',
      description: 'Keep a perfect record of all your cash flows. Quickly filter by income, expense, or category, and browse your detailed chronological history.',
      image: '/history_screen.jpg',
      icon: History,
      color: 'from-purple-500 to-indigo-500',
      glow: 'shadow-purple-500/20',
      badge: 'Ledger'
    },
  ];

  // Auto rotate tabs when not hovered
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % showcaseItems.length);
      }, 6000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  const activeItem = showcaseItems[activeTab];

  return (
    <section id="interface" className="relative min-h-screen flex items-center justify-center snap-start bg-background py-24 overflow-hidden border-t border-border/40">
      {/* Dynamic background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute -right-24 top-1/4 w-[500px] h-[500px] bg-gradient-to-br ${activeItem.color} rounded-full blur-3xl`}
        />
        <div className="absolute -left-48 bottom-1/4 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-sm font-medium text-neon-blue"
          >
            <Smartphone className="w-4 h-4" />
            <span>App Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-bold text-foreground tracking-tight"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)', lineHeight: 1.15 }}
          >
            Explore the <span className="bg-gradient-to-r from-neon-blue via-purple-500 to-pink-500 bg-clip-text text-transparent">Expensa Interface</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Designed to look premium, engineered for effortless tracking. Take a virtual tour through our live mobile UI.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Tabs / Descriptions (6 columns) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col gap-4">
            {showcaseItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeTab;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setIsHovered(true);
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-secondary/40 border-border/80 shadow-lg'
                      : 'bg-transparent border-transparent hover:bg-secondary/20 hover:border-border/30'
                  }`}
                >
                  {/* Left accent line for active item */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b ${item.color} rounded-r-full`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex gap-4 items-start pl-2">
                    {/* Icon container */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                        isActive
                          ? `bg-gradient-to-br ${item.color} text-background shadow-md`
                          : 'bg-secondary text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3
                          className={`font-semibold text-lg transition-colors duration-200 ${
                            isActive ? 'text-foreground font-bold' : 'text-muted-foreground group-hover:text-foreground'
                          }`}
                        >
                          {item.title}
                        </h3>
                        {isActive && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-gradient-to-r ${item.color} text-background`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-sm font-medium mb-2 transition-colors duration-200 ${
                        isActive ? 'text-neon-blue' : 'text-muted-foreground/80'
                      }`}>
                        {item.subtitle}
                      </p>
                      
                      {/* Collapsible description */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Small arrow */}
                    <ChevronRight className={`w-5 h-5 mt-1 transition-all duration-300 text-muted-foreground/30 ${
                      isActive ? 'rotate-90 text-neon-blue translate-x-0.5' : 'group-hover:translate-x-1 group-hover:text-foreground'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Smartphone Device Mockup (6 columns) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center items-center">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Outer Glow behind Phone */}
              <motion.div
                key={`glow-${activeTab}`}
                className={`absolute inset-0 bg-gradient-to-br ${activeItem.color} rounded-[54px] blur-3xl opacity-20 -z-10`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1.05, opacity: 0.25 }}
                transition={{ duration: 0.8 }}
              />

              {/* Floating tech decorations */}
              <motion.div 
                className="absolute -top-6 -left-8 w-12 h-12 bg-secondary border border-border/80 rounded-2xl flex items-center justify-center shadow-lg -rotate-12 pointer-events-none"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${activeItem.color}`} />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-8 px-4 py-2 bg-secondary border border-border/80 rounded-2xl flex items-center gap-2 shadow-lg rotate-6 pointer-events-none"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-[11px] font-bold text-foreground">Smooth UI</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </motion.div>

              {/* Smartphone Container Mockup */}
              <motion.div
                className="relative mx-auto w-[290px] h-[590px] md:w-[310px] md:h-[630px] bg-black rounded-[50px] p-[10px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border-[3px] border-zinc-800/80"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Phone screen reflection shine */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-30 rounded-[40px]" />

                {/* Inner Bezel and Screen */}
                <div className="relative w-full h-full bg-zinc-950 rounded-[40px] overflow-hidden border border-zinc-900 flex flex-col">
                  {/* Dynamic Island / Speaker notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-between px-4">
                    <div className="w-2 h-2 rounded-full bg-zinc-900" />
                    <div className="w-12 h-1 bg-zinc-900 rounded-full" />
                    <div className="w-3 h-3 rounded-full bg-blue-900/50 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
                    </div>
                  </div>

                  {/* Screenshots carousel */}
                  <div className="relative flex-1 w-full h-full bg-black">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <img
                          src={activeItem.image}
                          alt={activeItem.title}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Phone Home Indicator bar */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-700 rounded-full z-40" />
              </motion.div>

              {/* Under-phone Dots Indicator (hidden on lg, visible on mobile) */}
              <div className="flex justify-center gap-3 mt-6 lg:hidden">
                {showcaseItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeTab ? `w-8 bg-gradient-to-r ${activeItem.color}` : 'w-2.5 bg-zinc-800'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
