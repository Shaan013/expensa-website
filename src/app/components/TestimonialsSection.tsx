import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Emma Chen',
      role: 'Freelance Designer',
      avatar: 'E',
      rating: 5,
      text: 'Expensa changed how I manage my business expenses. I finally understand my cash flow and can make informed decisions.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Software Engineer',
      avatar: 'M',
      rating: 5,
      text: "The lend & borrow feature is genius. No more awkward text reminders to friends—Expensa handles it gracefully.",
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Sophia Kim',
      role: 'Marketing Manager',
      avatar: 'S',
      rating: 5,
      text: 'Beautiful design meets powerful functionality. I track my expenses daily now because the app makes it enjoyable.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'David Thompson',
      role: 'Small Business Owner',
      avatar: 'D',
      rating: 5,
      text: "I've tried countless expense trackers. Expensa is the only one I actually stick with. It just works.",
      color: 'from-orange-500 to-amber-500',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center snap-start bg-gradient-to-b from-secondary/30 to-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="inline-block text-neon-blue mb-4">
            Testimonials
          </motion.span>
          <h2
            className="mb-6 text-foreground"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.2, fontWeight: 700 }}
          >
            Loved by <span className="text-neon-blue">thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about their experience
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative p-12 bg-gradient-to-br from-card to-secondary rounded-3xl border border-neon-blue/30"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote icon */}
                <div className="absolute top-8 left-8 opacity-10">
                  <Quote className="w-16 h-16 text-neon-blue" />
                </div>

                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1 justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-neon-blue text-neon-blue" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-2xl text-center mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-full flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-neon-blue/5 blur-2xl -z-10" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <motion.button
              className="w-12 h-12 bg-card border border-neon-blue/30 rounded-full flex items-center justify-center hover:bg-neon-blue/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6 text-neon-blue" />
            </motion.button>
            <motion.button
              className="w-12 h-12 bg-card border border-neon-blue/30 rounded-full flex items-center justify-center hover:bg-neon-blue/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6 text-neon-blue" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-neon-blue' : 'w-2 bg-border'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
            
        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            // { value: '4.3', label: 'App Store Rating' },
            { value: '100+', label: 'Active Users' },
            { value: '100k+', label: 'Tracked Monthly' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-neon-blue mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
