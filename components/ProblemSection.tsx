import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { Frown, Activity, Moon, ArrowDown } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <Section className="bg-cream">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-charcoal mb-12">
            We Know Your Body Feels Like This...
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <FadeIn delay={100} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mb-6 text-coral">
              <Activity size={32} />
            </div>
            <h3 className="font-poppins font-semibold text-2xl text-charcoal mb-4">
              Tired, Tense Muscles
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              You push through workouts, long work days, and endless errands. But your muscles? They need a break. Generic creams often fall short when you need real comfort.
            </p>
          </FadeIn>

          {/* Column 2 */}
          <FadeIn delay={200} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mb-6 text-coral">
              <Frown size={32} />
            </div>
            <h3 className="font-poppins font-semibold text-2xl text-charcoal mb-4">
              Dry, Uncomfortable Skin
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              You've tried every drugstore lotion. They smell fake, feel sticky, and your skin feels dry again in an hour. You deserve something that deeply nourishes.
            </p>
          </FadeIn>

          {/* Column 3 */}
          <FadeIn delay={300} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mb-6 text-coral">
              <Moon size={32} />
            </div>
            <h3 className="font-poppins font-semibold text-2xl text-charcoal mb-4">
              Need a Calming Evening Ritual
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              You collapse into bed exhausted. No ritual. No moment of calm. Your body craves a grounding routine that signals 'it's okay to relax now.'
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="relative inline-block">
            <p className="font-playfair font-bold text-2xl md:text-3xl text-teal-900 mb-8 max-w-2xl mx-auto">
              Generic Body Care Can't Solve These Problems. <br/>
              <span className="text-coral">Plant-Powered Botanicals Can.</span>
            </p>
            <div className="flex justify-center animate-bounce">
              <ArrowDown className="text-teal-900/50" size={32} />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

export default ProblemSection;