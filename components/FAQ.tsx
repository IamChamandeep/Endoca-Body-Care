import React, { useState } from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  { question: "Are these products legal?", answer: "100% yes. Fully compliant, derived from legal botanical sources." },
  { question: "How fast do they work?", answer: "Most users feel comfort within 15-20 minutes of application." },
  { question: "What if I'm not satisfied?", answer: "30-day money-back guarantee. Try it for a full month. If you don't feel a real difference, we'll refund you—no forms, no hassle." },
  { question: "Where do you ship?", answer: "We ship across the USA. Free shipping on orders over $74." },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal">Quick Answers</h2>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div 
                className={`border rounded-xl transition-all duration-300 ${openIndex === idx ? 'border-teal-800 bg-mint/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-poppins font-semibold text-lg ${openIndex === idx ? 'text-teal-900' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  {openIndex === idx ? 
                    <Minus className="text-teal-800 flex-shrink-0" size={20} /> : 
                    <Plus className="text-gray-400 flex-shrink-0" size={20} />
                  }
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;