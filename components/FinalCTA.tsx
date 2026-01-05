import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { CreditCard, Truck, Users } from 'lucide-react';
import { trackPixelEvent, handleOutboundClick } from '../utils/pixel';

interface FinalCTAProps {
  onOpenQuiz: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuiz }) => {
  const handleQuizClick = () => {
    trackPixelEvent('Search', { content_name: 'Final CTA Quiz' });
    onOpenQuiz();
  };

  return (
    <Section className="bg-cream text-center">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="font-playfair font-bold text-4xl md:text-6xl text-charcoal mb-6">
            Ready to Give Your Body <br/> What It Deserves?
          </h2>
          <p className="font-sans text-xl text-gray-600 mb-10">
            Explore the full collection and find your perfect formula.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <a 
              href="https://www.endoca.com/cbd-products/cbd-cream"
              onClick={(e) => handleOutboundClick(e, 'https://www.endoca.com/cbd-products/cbd-cream', 'Search', { content_name: 'Final CTA Collection' })}
              className="w-full sm:w-auto bg-coral hover:bg-orange-500 text-white font-poppins font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 tracking-widest text-sm inline-flex justify-center items-center"
            >
              SHOP COLLECTION
            </a>
            <button 
              onClick={handleQuizClick}
              className="w-full sm:w-auto bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-poppins font-bold py-4 px-10 rounded-full transition-all duration-300 tracking-widest text-sm"
            >
              TAKE QUIZ
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-2"><CreditCard size={16} /> Secure Payment</span>
            <span className="flex items-center gap-2"><Truck size={16} /> Free Shipping Over $74</span>
            <span className="flex items-center gap-2"><Users size={16} /> Join 12,000+ Happy Users</span>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

export default FinalCTA;