import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Clock, Eye, Flame } from 'lucide-react';

const UrgencyGuarantee: React.FC = () => {
  return (
    <Section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white relative">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

       <div className="container mx-auto px-6 relative z-10">
         <FadeIn className="text-center mb-12">
           <h2 className="font-playfair font-bold text-4xl md:text-6xl mb-8">
             Your Body Can't Wait. <br/> Neither Should You.
           </h2>
           
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm font-medium">
             <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
               <Flame className="text-orange-400" size={16} />
               <span className="text-gray-100">Only 12 Deep Comfort Salve units left today</span>
             </div>
             <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
               <Clock className="text-gold" size={16} />
               <span className="text-gray-100">Restock happening in 48h</span>
             </div>
             <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
               <Eye className="text-blue-300" size={16} />
               <span className="text-gray-100">23 people viewing this page</span>
             </div>
           </div>
         </FadeIn>

         <FadeIn delay={200}>
           <div className="max-w-3xl mx-auto glass-card-dark p-8 md:p-12 rounded-3xl text-center border border-white/20 shadow-2xl">
             <div className="inline-block p-4 bg-teal-800/50 rounded-full mb-6">
                <ShieldCheck size={48} className="text-gold" />
             </div>
             <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4 text-white">
               30-Day Satisfaction Promise
             </h3>
             <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
               Try any product for a full month. If you don't feel a real difference, we'll refund you—no forms, no hassle.
             </p>

             <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-400">
               <span className="flex items-center gap-2"><ShieldCheck size={16} /> Secure Checkout</span>
               <span className="flex items-center gap-2"><Truck size={16} /> Free Shipping Over $74</span>
               <span className="flex items-center gap-2"><RotateCcw size={16} /> Easy Returns</span>
             </div>

             <a 
               href="https://www.endoca.com/cbd-products/cbd-cream"
               className="w-full md:w-auto bg-coral hover:bg-orange-500 text-white font-poppins font-bold py-5 px-12 rounded-full shadow-[0_0_30px_rgba(255,107,88,0.5)] hover:shadow-[0_0_40px_rgba(255,107,88,0.7)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg tracking-widest animate-pulse-slow"
             >
               DISCOVER THE FULL COLLECTION NOW <ArrowRight size={20} />
             </a>
           </div>
         </FadeIn>
       </div>
    </Section>
  );
};

export default UrgencyGuarantee;