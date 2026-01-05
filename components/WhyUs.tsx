import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { Hexagon, FlaskConical, XCircle, Users } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <Section className="bg-mint">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-teal-900">
              Why Choose Us Over Generic Body Care?
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <WhyUsItem 
            icon={<Hexagon className="text-teal-800" size={32} />}
            title="Certified Organic"
            text="USDA certified ingredients. Sustainably sourced. Just clean, potent botanicals."
            delay={0}
          />
          <WhyUsItem 
            icon={<FlaskConical className="text-teal-800" size={32} />}
            title="Third-Party Lab Tested"
            text="Every batch verified for purity. COA available on request. Total transparency."
            delay={100}
          />
          <WhyUsItem 
            icon={<XCircle className="text-teal-800" size={32} />}
            title="Clean Ingredients Only"
            text="No parabens, sulfates, synthetic fragrances, or anything your skin can't recognize."
            delay={200}
          />
          <WhyUsItem 
            icon={<Users className="text-teal-800" size={32} />}
            title="Small-Batch Craft"
            text="Made fresh in small batches to keep everything potent. Never mass-produced."
            delay={300}
          />
        </div>
      </div>
    </Section>
  );
};

const WhyUsItem = ({ icon, title, text, delay }: { icon: React.ReactNode, title: string, text: string, delay: number }) => (
  <FadeIn delay={delay} className="bg-white/50 p-8 rounded-2xl border border-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 text-center group">
    <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-poppins font-bold text-lg text-teal-900 mb-3">{title}</h3>
    <p className="text-teal-800/80 text-sm leading-relaxed">{text}</p>
  </FadeIn>
);

export default WhyUs;