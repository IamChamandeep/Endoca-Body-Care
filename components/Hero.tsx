import React, { useEffect, useState } from 'react';
import { ArrowRight, FlaskConical, Leaf, Truck } from 'lucide-react';
import { trackPixelEvent } from '../utils/pixel';

interface HeroProps {
  onOpenQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuizClick = () => {
    trackPixelEvent('Search', { content_name: 'Hero Quiz CTA' });
    onOpenQuiz();
  };

  const handleExploreClick = () => {
    trackPixelEvent('Search', { content_name: 'Hero Explore Collection' });
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col overflow-hidden bg-gradient-to-br from-teal-900 to-teal-800 text-white">
      {/* Top Logo */}
      <div className="absolute top-0 left-0 w-full pt-8 pb-4 z-20">
        <div className="container mx-auto flex justify-center">
          <img 
             src="https://www.endoca.com/wp-content/themes/endoca/assets/img/logo.svg" 
             alt="Endoca" 
             className="h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-95"
             onError={(e) => {
               (e.target as HTMLImageElement).style.display = 'none';
               (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="font-playfair font-bold text-white text-3xl tracking-widest drop-shadow-md">ENDOCA</span>';
             }}
           />
        </div>
      </div>

      {/* Background Animated Shapes */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L50 20 L100 0 V100 H0 Z" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-12 flex-grow flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left">
          <p className="text-gold font-poppins uppercase tracking-widest text-sm mb-4 animate-fade-in-up">
            Trusted by 12,000+ Americans Who Refuse to Settle
          </p>
          <h1 className="font-playfair font-bold text-5xl lg:text-7xl leading-tight mb-6 drop-shadow-lg">
            Your Body Works Hard. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Doesn't It Deserve More?
            </span>
          </h1>
          <p className="font-sans text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Discover plant-powered botanical formulas that actually soothe tired muscles, 
            deeply nourish stressed skin, and turn self-care into a ritual you'll crave.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-sm font-medium text-gray-300">
            <span className="flex items-center gap-2">
              <FlaskConical className="text-green-400" size={18} />
              Lab-Tested
            </span>
            <span className="flex items-center gap-2">
              <Leaf className="text-green-400" size={18} />
              USDA Organic
            </span>
            <span className="flex items-center gap-2">
              <Truck className="text-blue-400" size={18} />
              Free Shipping over $74
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <a 
              href="https://www.endoca.com/cbd-products/cbd-cream"
              onClick={handleExploreClick}
              className="bg-coral hover:bg-orange-500 text-white font-poppins font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,107,88,0.4)] hover:shadow-[0_0_30px_rgba(255,107,88,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 tracking-widest text-sm"
            >
              EXPLORE THE COLLECTION <ArrowRight size={18} />
            </a>
            <button 
              onClick={handleQuizClick}
              className="group flex items-center gap-2 text-white border-b border-transparent hover:border-white transition-all pb-1 text-sm font-medium"
            >
              TAKE PRODUCT QUIZ <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full lg:h-[600px] flex items-center justify-center">
            {/* Spotlight Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-teal-500/20 to-transparent pointer-events-none blur-3xl" />
            
            {/* Main Lifestyle Image (No Packshot) */}
            <div className="relative animate-float z-10 w-full h-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl glass-card-dark border-0 p-1">
               <img 
                 src="https://i.ibb.co/0VJn263N/gemini-3-pro-image-preview-2k-nano-banana-pro-a-Create-a-stunning-pr-1.png" 
                 alt="Applying botanical cream" 
                 className="w-full h-full object-cover object-center rounded-xl"
               />
               <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-lg flex items-center justify-between">
                 <div>
                   <p className="text-teal-900 font-bold font-playfair">The Complete Ritual</p>
                   <p className="text-teal-700 text-xs">Essential Collection</p>
                 </div>
                 <span className="bg-coral text-white text-xs font-bold px-3 py-1 rounded-full">Best Seller</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;