import React, { useEffect, useState } from 'react';
import { X, Copy, Check, ArrowRight } from 'lucide-react';
import { handleOutboundClick } from '../utils/pixel';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Trigger on mouse leave (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSeen) {
        setIsVisible(true);
        setHasSeen(true);
      }
    };

    // Optional: Trigger on timer (fallback for non-mouse devices)
    // const timer = setTimeout(() => {
    //   if (!hasSeen) {
    //     setIsVisible(true);
    //     setHasSeen(true);
    //   }
    // }, 60000); // 60 seconds

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      // clearTimeout(timer);
    };
  }, [hasSeen]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('WELCOME25');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-teal-900/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleClose}
          ></div>

          {/* Popup Card */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-charcoal transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col">
              {/* Top Banner */}
              <div className="bg-coral p-3 text-center text-white text-sm font-bold tracking-widest uppercase">
                Exclusive Welcome Offer
              </div>

              <div className="p-8 md:p-10 text-center">
                <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-4">
                  Wait! Your Body is <br/> <span className="text-teal-800">Asking for This.</span>
                </h2>
                
                <p className="font-sans text-gray-600 mb-8 leading-relaxed">
                  Don't let another day go by with sore muscles or dry skin. 
                  Start your ritual now and feel the difference.
                </p>

                {/* Offer Box */}
                <div className="bg-cream border border-dashed border-teal-800/30 rounded-xl p-6 mb-6">
                  <p className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">
                    Take 25% OFF Your First Order
                  </p>
                  
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2 pl-4">
                    <code className="flex-grow text-left font-mono font-bold text-xl text-charcoal">
                      WELCOME25
                    </code>
                    <button 
                      onClick={handleCopy}
                      className={`
                        px-4 py-2 rounded-md font-bold text-sm transition-all duration-300 flex items-center gap-2
                        ${copied ? 'bg-green-500 text-white' : 'bg-charcoal text-white hover:bg-black'}
                      `}
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? 'COPIED' : 'COPY'}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    + Free Shipping on orders over $74
                  </p>
                </div>

                <a 
                  href="https://www.endoca.com/cbd-products/cbd-cream"
                  onClick={(e) => handleOutboundClick(e, 'https://www.endoca.com/cbd-products/cbd-cream', 'Search', { content_name: 'Exit Intent Popup CTA' })}
                  className="w-full block bg-coral hover:bg-orange-500 text-white font-poppins font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-4 tracking-widest"
                >
                  USE MY CODE NOW
                </a>
                
                <button 
                  onClick={handleClose}
                  className="text-gray-400 text-sm hover:text-charcoal underline"
                >
                  No thanks, I prefer paying full price
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExitIntentPopup;