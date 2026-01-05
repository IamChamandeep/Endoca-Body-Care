import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ProductShowcase from './components/ProductShowcase';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import QuizModal from './components/QuizModal';
import ExitIntentPopup from './components/ExitIntentPopup';
import { trackPixelEvent } from './utils/pixel';

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Trigger Pixel PageView on App Mount
  useEffect(() => {
    trackPixelEvent('PageView');
  }, []);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal">
      <StickyBar />
      <Hero onOpenQuiz={openQuiz} />
      <ProblemSection />
      <ProductShowcase />
      <SocialProof />
      <FAQ />
      <FinalCTA onOpenQuiz={openQuiz} />
      <Footer />
      
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
      <ExitIntentPopup />
    </div>
  );
}

export default App;