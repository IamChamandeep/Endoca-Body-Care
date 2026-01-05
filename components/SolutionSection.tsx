import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { Leaf, Droplet, ShieldCheck, Heart } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <Section className="bg-mint" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-teal-900 mb-4">
              Meet Hemp-Based Body Care That Actually Works
            </h2>
            <p className="font-sans text-lg text-teal-800 max-w-3xl mx-auto">
              Backed by European organic standards, third-party lab testing, and 12,000+ bodies that finally feel at ease.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 relative">
            <FadeIn direction="none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full group">
                <img 
                  src="https://i.ibb.co/YTjNQ1G9/gemini-3-pro-image-preview-2k-nano-banana-pro-a-Create-a-stunning-pr-1.png" 
                  alt="Application Ritual" 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 glass-card p-4 md:p-6 rounded-xl border border-white/40">
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <p className="font-poppins font-semibold text-teal-900 text-sm md:text-base">94% felt relief within 20 minutes</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <p className="font-poppins font-semibold text-teal-900 text-sm md:text-base">Zero synthetic ingredients</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <p className="font-poppins font-semibold text-teal-900 text-sm md:text-base">EU Certified Organic</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Pillars */}
          <div className="w-full lg:w-1/2 space-y-10">
            <SolutionPillar 
              icon={<Leaf className="text-white" size={24} />}
              title="Targeted Botanical Compounds"
              text="Hemp extract works with your body's natural systems to soothe discomfort and calm stressed tissue. No gimmicks. Just biology."
              delay={100}
            />
            <SolutionPillar 
              icon={<Droplet className="text-white" size={24} />}
              title="Textures That Feel Luxurious"
              text="From thick, melting balms to fluffy whipped butters—these aren't watery lotions. They're rich, comforting, and absorb beautifully."
              delay={200}
            />
            <SolutionPillar 
              icon={<ShieldCheck className="text-white" size={24} />}
              title="Lab-Verified Every Single Batch"
              text="Third-party tested for purity and potency. You know exactly what you're putting on your skin—and what you're NOT."
              delay={300}
            />
            <SolutionPillar 
              icon={<Heart className="text-white" size={24} />}
              title="A Ritual, Not Just a Routine"
              text="Turn 30 seconds into a grounding moment. The textures, subtle botanical scents, and intentional formulas help your body shift from 'go mode' to 'ease.'"
              delay={400}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

interface PillarProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay: number;
}

const SolutionPillar: React.FC<PillarProps> = ({ icon, title, text, delay }) => (
  <FadeIn delay={delay} className="flex gap-6 group">
    <div className="flex-shrink-0 w-14 h-14 bg-teal-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="font-poppins font-bold text-xl text-teal-900 mb-2">{title}</h3>
      <p className="text-teal-800/80 leading-relaxed">{text}</p>
    </div>
  </FadeIn>
);

export default SolutionSection;