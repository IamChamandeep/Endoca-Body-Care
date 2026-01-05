import React, { useState, useEffect } from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { Star } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sophie M.',
    location: 'Los Angeles, CA',
    rating: 5,
    headline: 'Finally, comfort that lasts.',
    text: "I'm a runner and my legs are always tired. This salve is the only thing that's helped me actually recover. I use it every single night now.",
    productName: 'Botanical Salve',
    productId: '1'
  },
  {
    id: '2',
    name: 'Lars K.',
    location: 'Austin, TX',
    rating: 5,
    headline: 'My skin has never been this soft.',
    text: "The body butter is unreal. I have sensitive skin and this is the first product that keeps me moisturized without irritation.",
    productName: 'Whipped Body Butter',
    productId: '2'
  },
  {
    id: '3',
    name: 'Emma R.',
    location: 'Portland, OR',
    rating: 5,
    headline: 'This deodorant is a game-changer.',
    text: "I've tried every natural deodorant. They all failed by noon. This one? 14-hour shifts and still fresh. Obsessed.",
    productName: 'Natural Deodorant',
    productId: '5'
  },
  {
    id: '4',
    name: 'Elena G.',
    location: 'Denver, CO',
    rating: 5,
    headline: 'A ritual I can\'t live without.',
    text: "The smell, the texture, the feeling. It's the best part of my day. Highly recommend the oil for instant glow.",
    productName: 'Radiance Oil',
    productId: '3'
  }
];

const SocialProof: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-charcoal mb-12">
              12,000+ Americans That Finally Feel at Ease
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <FadeIn delay={0} className="p-4">
              <div className="text-4xl font-bold text-teal-800 mb-2 font-playfair">4.9/5</div>
              <div className="text-sm font-poppins text-gray-500 uppercase tracking-wide">Average Rating</div>
            </FadeIn>
            <FadeIn delay={100} className="p-4">
              <div className="text-4xl font-bold text-teal-800 mb-2 font-playfair">12,000+</div>
              <div className="text-sm font-poppins text-gray-500 uppercase tracking-wide">Happy Users</div>
            </FadeIn>
            <FadeIn delay={200} className="p-4">
              <div className="text-4xl font-bold text-teal-800 mb-2 font-playfair">94%</div>
              <div className="text-sm font-poppins text-gray-500 uppercase tracking-wide">Recommend Us</div>
            </FadeIn>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative h-80 md:h-64">
          {reviews.map((review, index) => {
            // Calculate styles for carousel transition
            let opacity = 0;
            let transform = 'translateX(100px) scale(0.9)';
            let zIndex = 0;

            if (index === activeIndex) {
              opacity = 1;
              transform = 'translateX(0) scale(1)';
              zIndex = 10;
            } else if (index === (activeIndex - 1 + reviews.length) % reviews.length) {
              opacity = 0; // Exit left
              transform = 'translateX(-100px) scale(0.9)';
            }
            
            return (
              <div 
                key={review.id}
                className="absolute top-0 left-0 w-full transition-all duration-700 ease-in-out"
                style={{ opacity, transform, zIndex, pointerEvents: index === activeIndex ? 'auto' : 'none' }}
              >
                <div className="glass-card bg-white/60 p-8 rounded-2xl shadow-lg border border-white mx-4">
                  <div className="flex items-center gap-1 text-gold mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <h3 className="font-playfair font-bold text-2xl text-charcoal mb-3">"{review.headline}"</h3>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{review.text}"</p>
                  
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div>
                      <p className="font-bold text-teal-900 text-sm">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.location}</p>
                    </div>
                    <div className="text-xs font-medium bg-teal-50 text-teal-800 px-3 py-1 rounded-full">
                       Verified Buyer • {review.productName}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-teal-800 w-8' : 'bg-gray-300'}`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SocialProof;