import { motion } from 'motion/react';
import { Download, ArrowRight, Apple, Smartphone } from 'lucide-react';
import { toast } from 'sonner';
import { incrementDownloadCount } from '../utils/storage';

export default function CTASection() {
  const handleAndroidDownload = () => {
    incrementDownloadCount();

    const link = document.createElement('a');
    link.href = '/apk/Expensa_beta.apk';
    link.download = 'Expensa_beta.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('🚀 APK Download Started!', {
      description: 'Expensa installation package is downloading. Enjoy tracking your expenses!',
      duration: 5000,
    });
  };

  const handleIosClick = () => {
    toast.info('📱 iOS Version Coming Soon!', {
      description: 'We are currently in active development for iOS and will launch on the App Store shortly!',
      duration: 5000,
      icon: <Apple className="w-5 h-5 text-neon-blue" />,
    });
  };

  return (
    <section id="download" className="relative min-h-screen flex items-center justify-center snap-start bg-background py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 50%, var(--neon-blue) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 50%, var(--neon-blue) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 50%, var(--neon-blue) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ opacity: 0.1 }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-neon-blue/10 border border-neon-blue/30 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            whileHover={{ scale: 1.05 }}
          >
            <Smartphone className="w-4 h-4 text-neon-blue" />
            <span className="text-neon-blue font-semibold">
              Direct Download for Android
            </span>
          </motion.div>

          {/* Main Headline */}
          <h2
            className="mb-6 bg-gradient-to-r from-foreground via-neon-blue to-foreground bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1.1, fontWeight: 700 }}
          >
            Ready to take control
            <br />
            of your <span className="text-neon-blue">finances?</span>
          </h2>

          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join thousands of users who've already simplified their financial lives with Expensa.
            Download now and get started in minutes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.button
              onClick={handleAndroidDownload}
              className="group relative px-10 py-5 bg-neon-blue text-background rounded-full overflow-hidden min-w-[250px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs opacity-80">Download for Android</p>
                  <p className="font-bold">Direct APK</p>
                </div>
              </span>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-blue-light to-neon-blue-dark"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              {/* Animated glow */}
              <div className="absolute inset-0 blur-xl bg-neon-blue/50 group-hover:blur-2xl transition-all" />
            </motion.button>

            <motion.button
              onClick={handleIosClick}
              className="group relative px-10 py-5 bg-secondary/40 border border-neon-blue/30 text-foreground rounded-full overflow-hidden min-w-[250px] backdrop-blur-sm cursor-pointer hover:border-neon-blue/60 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Apple className="w-6 h-6 text-muted-foreground group-hover:text-neon-blue transition-colors" />
                <div className="text-left">
                  <p className="text-xs opacity-80 text-muted-foreground">Download for iOS</p>
                  <p className="font-bold flex items-center gap-1 text-muted-foreground group-hover:text-neon-blue transition-colors">
                    Coming Soon 
                    <span className="text-[10px] px-1.5 py-0.5 bg-neon-blue/20 text-neon-blue rounded-full font-normal">
                      Short Time
                    </span>
                  </p>
                </div>
              </span>
              <motion.div
                className="absolute inset-0 bg-neon-blue/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.button
            className="group inline-flex items-center gap-2 text-neon-blue hover:gap-3 transition-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span>Watch how it works</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Trust Badges */}
          {/* <motion.div
            className="mt-16 pt-12 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          > */}
            {/* <p className="text-sm text-muted-foreground mb-6">Trusted by industry leaders</p> */}
            {/* <div className="flex flex-wrap gap-8 justify-center items-center opacity-50">
              {['Bank-Level Security', '256-bit Encryption', 'SOC 2 Certified', 'GDPR Compliant'].map(
                (badge, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-secondary/50 rounded-lg border border-border"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <p className="text-xs font-semibold text-foreground/60">{badge}</p>
                  </motion.div>
                )
              )}
            </div> */}
          {/* </motion.div> */}

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 right-10 w-20 h-20 bg-neon-blue/20 rounded-full blur-2xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
