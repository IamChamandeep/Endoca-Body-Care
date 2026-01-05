import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <div className="mb-6">
               <img 
                 src="https://www.endoca.com/wp-content/themes/endoca/assets/img/logo.svg" 
                 alt="Endoca" 
                 className="h-10 md:h-12 w-auto object-contain object-left brightness-0 invert opacity-90"
                 onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                   (e.target as HTMLImageElement).parentElement!.innerHTML = '<h3 class="font-poppins font-bold text-3xl tracking-widest text-white">ENDOCA</h3>';
                 }}
               />
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Plant-powered care for real bodies. <br/>
              Expertly crafted in the USA.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/endoca/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={22}/></a>
              <a href="https://www.facebook.com/endoca" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook size={22}/></a>
              <a href="https://twitter.com/Endocacbdoil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter size={22}/></a>
              <a href="https://www.youtube.com/channel/UCNXwDCTBaa0WPEf1cOUHe9g" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Youtube size={22}/></a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 md:items-end">
            <h4 className="font-poppins font-bold mb-4 text-gold text-lg">Customer Care</h4>
            <a href="https://www.endoca.com/about-us/endoca-history?v=13b5bfe96f3e" className="text-gray-400 hover:text-white transition-colors">Our Story</a>
            <a href="https://www.endoca.com/shipping-list?v=13b5bfe96f3e" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a>
            <a href="https://www.endoca.com/terms-and-conditions?v=13b5bfe96f3e" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
            <a href="https://www.endoca.com/cookie-policy?v=13b5bfe96f3e" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://www.endoca.com/contact-us?v=13b5bfe96f3e" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-col gap-2">
            <p>© 2026 Endoca. All rights reserved.</p>
            <p className="max-w-2xl opacity-60">
              *These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
          <div className="flex items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
             <span className="sr-only">Secure Checkout</span>
             {/* Visa */}
             <svg className="h-6 w-auto" viewBox="0 0 36 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
                <path fill="#fff" d="M13.2 0.4L9.1 11.2H6.3L4.2 2.6C3.9 1.6 3.8 1.4 3.3 1.2C2.5 0.8 1.2 0.5 0 0.3L0.2 0.4H4.5C5.7 0.4 6.8 1.3 7 2.8L8.4 8.7L11.8 0.4H13.2ZM24.8 7.7C24.8 4.7 20.8 4.5 20.9 3.2C20.9 2.8 21.3 2.4 22.2 2.3C22.6 2.3 23.8 2.2 24.9 2.8L25.3 0.8C24.7 0.6 23.9 0.4 22.9 0.4C20.1 0.4 18.2 1.9 18.2 4.1C18.2 5.9 19.8 6.9 21 7.5C22.2 8.1 22.6 8.5 22.6 9C22.6 9.8 21.6 10.2 20.7 10.2C19.7 10.2 19 10 18.1 9.6L17.7 11.7C18.5 12.1 19.6 12.3 20.9 12.3C23.9 12.3 25.8 10.8 25.8 8.4M32 0.4H29.3C28.5 0.4 27.9 0.6 27.6 1.4L23.6 11.2H26.5L27.1 9.5H30.5L30.8 11.2H33.3L32 0.4ZM27.8 7.5L28.5 2.5C28.5 2.5 29 5 29 5.1L29.7 7.5H27.8ZM18 0.4H15.4L13.4 11.2H16L18 0.4Z"/>
             </svg>
             {/* Mastercard */}
             <svg className="h-6 w-auto" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
                <rect width="32" height="20" rx="2" fill="#fff" fillOpacity="0.1"/>
                <circle cx="11" cy="10" r="6" fill="#EB001B"/>
                <circle cx="21" cy="10" r="6" fill="#F79E1B"/>
                <path d="M16 14C14.5 14 13.1 13.5 12 12.7C11.5 12.3 11.1 11.9 10.7 11.4C10.3 10.9 10.1 10.5 10 10C10.1 9.5 10.3 9.1 10.7 8.6C11.1 8.1 11.5 7.7 12 7.3C13.1 6.5 14.5 6 16 6C17.5 6 18.9 6.5 20 7.3C20.5 7.7 20.9 8.1 21.3 8.6C21.7 9.1 21.9 9.5 22 10C21.9 10.5 21.7 10.9 21.3 11.4C20.9 11.9 20.5 12.3 20 12.7C18.9 13.5 17.5 14 16 14Z" fill="#FF5F00"/>
             </svg>
             {/* PayPal */}
             <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PayPal">
               <path d="M7.05001 20.301L5.05001 20.301C4.85001 20.301 4.65 20.101 4.75 19.901L8.25001 3.501C8.25001 3.201 8.55001 3.001 8.85001 3.001H14.15C17.05 3.001 19.15 4.301 19.35 7.201C19.45 8.901 18.75 10.501 17.55 11.501C16.65 12.201 15.35 12.601 13.95 12.601H11.25L10.05 18.401L9.65001 20.201C9.65001 20.201 9.55001 20.301 9.45001 20.301H7.05001Z" fill="#fff"/>
             </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;