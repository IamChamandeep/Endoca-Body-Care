import React, { useState, useEffect } from 'react';

const StickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 py-3 border-b border-gray-100 animate-fade-in-up transform transition-transform duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
           {/* Desktop Logo/Brand */}
           <div className="hidden md:block">
              <img 
                src="https://www.endoca.com/wp-content/themes/endoca/assets/img/logo.svg" 
                alt="Endoca" 
                className="h-8 md:h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="font-playfair font-bold text-teal-900 text-2xl tracking-widest">ENDOCA</span>';
                }}
              />
           </div>
        </div>
        
        <div className="flex items-center gap-4 flex-1 md:flex-none justify-between md:justify-end">
          {/* Mobile Brand Name */}
          <div className="md:hidden">
             <img 
                src="https://www.endoca.com/wp-content/themes/endoca/assets/img/logo.svg" 
                alt="Endoca" 
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="font-playfair font-bold text-teal-900 text-xl tracking-widest">ENDOCA</span>';
                }}
              />
          </div>

          <a 
            href="https://www.endoca.com/cbd-products/cbd-cream"
            className="bg-coral hover:bg-orange-500 text-white font-poppins font-bold py-2 px-6 rounded-full shadow-md text-xs tracking-widest transition-colors"
          >
            EXPLORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;