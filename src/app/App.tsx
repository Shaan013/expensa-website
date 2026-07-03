import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import AppShowcaseSection from './components/AppShowcaseSection';
import AnalyticsSection from './components/AnalyticsSection';
import LendBorrowSection from './components/LendBorrowSection';
import UserJourneySection from './components/UserJourneySection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="dark size-full bg-background text-foreground overflow-x-hidden overflow-y-auto snap-y snap-mandatory pt-20">
      <Toaster position="top-right" theme="dark" closeButton richColors />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <AppShowcaseSection />
      <AnalyticsSection />
      <LendBorrowSection />
      <UserJourneySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}