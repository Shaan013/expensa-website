import { motion } from 'motion/react';
import { ArrowRight, Smartphone } from 'lucide-react';

export default function HeroSection() {
  const handleDownloadClick = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center snap-start overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background ">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, var(--neon-blue) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, var(--neon-blue) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, var(--neon-blue) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary/50 border border-neon-blue/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-neon-blue">Track. Analyze. Control.</span>
          </motion.div>

          <motion.h1
            className="mb-6 bg-gradient-to-r from-foreground via-neon-blue-light to-foreground bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: 1.1, fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Money,
            <br />
            <span className="text-neon-blue">Simplified</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expensa brings clarity to your finances with intelligent tracking,
            beautiful insights, and effortless control over every dollar.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button 
              onClick={handleDownloadClick}
              className="group relative px-8 py-4 bg-neon-blue text-background rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 font-bold">
                Download App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-neon-blue-light"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
            {/* <button className="px-8 py-4 border-2 border-neon-blue text-neon-blue rounded-full hover:bg-neon-blue/10 transition-all cursor-pointer">
              Watch Demo
            </button> */}
          </motion.div>
        </motion.div>

        {/* App Mockup */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="relative max-w-md mx-auto">
            {/* Phone frame with glow */}
            <div className="relative bg-gradient-to-br from-card to-secondary rounded-[3rem] p-4 shadow-2xl border border-neon-blue/20">
              <div className="absolute inset-0 rounded-[3rem] bg-neon-blue/20 blur-3xl" />
              <div className="relative bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                <img
                  src="/home_screen.jpg"
                  alt="Expensa Wallet Overview Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -right-8 top-20 bg-card border border-neon-blue/30 rounded-2xl p-4 shadow-lg backdrop-blur-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center">
                  <span className="text-neon-blue">+</span>
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Saved Today</p>
                  <p className="text-sm font-semibold">$125</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-8 top-40 bg-card border border-neon-blue/30 rounded-2xl p-3 shadow-lg backdrop-blur-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500/20 rounded-full" />
                <p className="text-xs">Bill Paid</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-neon-blue rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
