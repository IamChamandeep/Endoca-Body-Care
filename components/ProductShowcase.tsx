import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { ArrowRight, Activity, Droplet, Sparkles, Heart, Wind, Waves } from 'lucide-react';

const benefits = [
  {
    id: 'muscle',
    title: 'Targeted Muscle Comfort',
    description: 'Deeply penetrating botanicals designed to soothe tension and stiffness after movement or long days.',
    icon: <Activity size={32} />,
    link: 'https://www.endoca.com/cbd-products/cbd-cream'
  },
  {
    id: 'hydration',
    title: 'Intense Skin Hydration',
    description: 'Rich, whipped moisture that transforms dry, thirsty skin instantly without feeling heavy or sticky.',
    icon: <Droplet size={32} />,
    link: 'https://www.endoca.com/cbd-products/cbd-cream'
  },
  {
    id: 'radiance',
    title: 'Natural Radiance',
    description: 'A lightweight, non-greasy botanical oil that restores your natural glow and locks in essential nutrients.',
    icon: <Sparkles size={32} />,
    link: 'https://www.endoca.com/cbd-products/cbd-cream'
  },
  {
    id: 'nourish',
    title: 'Spot Nourishment',
    description: 'Concentrated care for lips, cuticles, and rough patches. Portable protection for skin that needs extra love.',
    icon: <Heart size={32} />,
    link: 'https://www.endoca.com/cbd-products/cbd-cream'
  },
  {
    id: 'freshness',
    title: 'All-Day Freshness',
    description: 'Plant-powered odor protection that actually works, keeping you fresh through workouts and workdays.',
    icon: <Wind size={32} />,
    link: 'https://www.endoca.com/cbd-products/cbd-cream'
  },
  {
    id: 'pure',
    title: 'Gentle Purification',
    description: 'An artisan cleanser that removes impurities while respecting your skin’s delicate moisture barrier.',
    icon: <Waves size={32} />,
    link: 'https://www.endoca.com/cbd-products/cbd-cream'
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <Section className="bg-white" id="products">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-charcoal mb-6">
              Why Choose Our Collection?
            </h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just sell products; we deliver specific advantages for your body. 
              Discover the benefits of a plant-powered routine.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, idx) => (
            <FadeIn key={benefit.id} delay={idx * 100} className="h-full">
              <div className="group h-full bg-cream/50 hover:bg-white rounded-2xl p-8 border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden">
                {/* Visual Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-900/5 text-teal-900 group-hover:bg-coral group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                
                <h3 className="font-playfair font-bold text-2xl text-charcoal mb-3 group-hover:text-teal-900 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {benefit.description}
                </p>
                
                <div className="mt-auto">
                  <a 
                    href={benefit.link}
                    className="inline-flex items-center gap-2 font-poppins font-bold text-sm text-coral uppercase tracking-widest group-hover:gap-3 transition-all"
                  >
                    Explore Formula <ArrowRight size={16} />
                  </a>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-900/5 rounded-full blur-2xl group-hover:bg-coral/10 transition-colors duration-300 pointer-events-none"></div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.endoca.com/cbd-products/cbd-cream"
            className="inline-flex bg-teal-900 hover:bg-teal-800 text-white font-poppins font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 items-center gap-2 mx-auto tracking-widest text-sm"
          >
            SHOP THE FULL COLLECTION <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ProductShowcase;