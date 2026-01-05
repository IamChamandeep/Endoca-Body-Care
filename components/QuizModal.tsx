import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Activity, Droplet, Sparkles, Moon, Leaf, Check } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { trackPixelEvent, handleOutboundClick } from '../utils/pixel';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface Option {
  label: string;
  icon?: React.ReactNode;
  tag?: string;
  value: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "What's your biggest body care concern right now?",
    options: [
      { label: "Tired muscles after workouts or long days", value: "Sore muscles", icon: <Activity size={24} /> },
      { label: "Dry, rough, or irritated skin that needs moisture", value: "Dry skin", icon: <Droplet size={24} /> },
      { label: "Dull, tired-looking skin that needs radiance", value: "Dull skin", icon: <Sparkles size={24} /> },
      { label: "Need a calming evening ritual to unwind", value: "Evening ritual", icon: <Moon size={24} /> },
      { label: "Looking for daily freshness and natural protection", value: "Daily freshness", icon: <Leaf size={24} /> },
    ]
  },
  {
    id: 2,
    text: "What texture do you prefer in body care products?",
    options: [
      { label: "Thick, rich balms that melt into skin", value: "Thick balms", tag: "For targeted relief" },
      { label: "Fluffy, whipped creams that absorb beautifully", value: "Whipped creams", tag: "For all-over moisture" },
      { label: "Lightweight oils that don't feel greasy", value: "Lightweight oils", tag: "For quick absorption" },
      { label: "Convenient stick formats for on-the-go", value: "Stick formats", tag: "For portability" },
    ]
  },
  {
    id: 3,
    text: "When do you most need body care support?",
    options: [
      { label: "After workouts or physical activity", value: "After workouts" },
      { label: "Before bed as part of evening routine", value: "Before bed" },
      { label: "In the morning to start the day fresh", value: "Morning" },
      { label: "Throughout the day as needed", value: "All day" },
      { label: "Multiple times (morning, after workout, and night)", value: "Multiple" },
    ]
  },
  {
    id: 4,
    text: "How would you describe your skin type?",
    options: [
      { label: "Very dry – needs intense hydration", value: "Very dry" },
      { label: "Normal – just needs balanced care", value: "Normal" },
      { label: "Sensitive – reacts to harsh ingredients", value: "Sensitive" },
      { label: "Combination – some areas dry, some normal", value: "Combination" },
    ]
  }
];

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<{product: Product, reason: string}[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setAnswers({});
      setShowResults(false);
      setRecommendations([]);
    }
  }, [isOpen]);

  const handleSelect = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentStep + 1]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const q1 = answers[1];
    const q2 = answers[2];
    const q3 = answers[3];
    const q4 = answers[4];

    const scores = new Set<string>();
    const reasons: Record<string, string> = {};

    const addRec = (id: string, reason: string) => {
      scores.add(id);
      if (!reasons[id]) reasons[id] = reason;
    };

    // Logic Rules
    if (q1 === "Sore muscles") addRec('1', "You mentioned tired muscles. This rich, targeted balm is our best formula for comforting overworked muscles.");
    
    if (q1 === "Dry skin" && q2 === "Whipped creams") addRec('2', "Perfect for dry skin that needs deep moisture. The whipped texture absorbs beautifully without feeling heavy.");
    
    if (q1 === "Dry skin" && q2 === "Lightweight oils") addRec('3', "Ideal for dry skin when you prefer a lightweight feel. This oil gives you a radiant glow without greasiness.");
    
    if (q1 === "Dull skin") addRec('3', "To combat dull, tired-looking skin, this oil is packed with botanicals that restore natural radiance.");
    
    if (q1 === "Evening ritual" && q3 === "Before bed") addRec('2', "A perfect companion for your evening routine. The comforting scent and texture signal your body it's time to rest.");
    
    if (q1 === "Daily freshness") {
      addRec('5', "For all-day freshness that relies on plant power, not harsh chemicals.");
      addRec('6', "A gentle start to your daily routine that respects your skin barrier.");
    }
    
    if (q4 === "Very dry") {
      addRec('2', "Your skin needs intense hydration, and this butter delivers lasting moisture.");
      addRec('1', "Deep hydration for the driest, most stubborn patches.");
    }
    
    if (q4 === "Sensitive") {
      addRec('6', "Formulated without harsh irritants, perfect for sensitive skin.");
      addRec('4', "Gentle, soothing care for delicate areas.");
    }

    // Default Fallback
    if (scores.size === 0) {
      addRec('1', "Our best-selling all-rounder for body comfort.");
      addRec('2', "A customer favorite for daily hydration.");
    }

    // Convert Set to Array of Products with Reasons
    const finalRecs = Array.from(scores).map(id => {
      const prod = products.find(p => p.id === id);
      return prod ? { product: prod, reason: reasons[id] } : null;
    }).filter(Boolean) as {product: Product, reason: string}[];

    setRecommendations(finalRecs.slice(0, 3)); // Limit to top 3
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-teal-900/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header / Progress */}
        {!showResults && (
          <div className="p-6 border-b border-gray-100">
             <div className="flex justify-between items-center mb-4">
               <span className="text-sm font-semibold text-teal-800 tracking-wider uppercase">
                 Question {currentStep + 1} of {questions.length}
               </span>
               <button onClick={onClose} className="text-gray-400 hover:text-teal-900 transition-colors">
                 <X size={24} />
               </button>
             </div>
             <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-coral transition-all duration-500 ease-out"
                 style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
               ></div>
             </div>
          </div>
        )}

        {/* Scrollable Content */}
        <div className="overflow-y-auto no-scrollbar flex-grow">
          {showResults ? (
            /* Results View */
            <div className="p-8 animate-fade-in-up">
              <div className="flex justify-end mb-4">
                 <button onClick={onClose} className="text-gray-400 hover:text-teal-900">
                   <X size={24} />
                 </button>
              </div>
              <div className="text-center mb-10">
                <h2 className="font-playfair font-bold text-3xl text-charcoal mb-3">
                  Based on Your Answers, <br/> Here's What We Recommend:
                </h2>
                <p className="text-gray-600 font-sans">
                  These formulas are perfect for {answers[1]?.toLowerCase() || "your needs"}.
                </p>
              </div>

              <div className="space-y-6 mb-10">
                {recommendations.map((rec, idx) => (
                  <div 
                    key={rec.product.id} 
                    className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm flex flex-col gap-4 items-center animate-fade-in-up text-center"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    {/* Image removed */}
                    <div className="w-full">
                      <h3 className="font-playfair font-bold text-2xl text-teal-900 mb-2">{rec.product.name}</h3>
                      <p className="text-gray-600 italic mb-6 leading-relaxed max-w-lg mx-auto">{rec.reason}</p>
                      <a 
                        href={rec.product.link}
                        onClick={(e) => {
                          // Allow navigation via helper
                          handleOutboundClick(e, rec.product.link, 'Search', { content_name: rec.product.name, source: 'Quiz Result' });
                          onClose();
                        }}
                        className="inline-block bg-coral hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-xs tracking-widest transition-colors shadow-md hover:shadow-lg"
                      >
                        EXPLORE THIS FORMULA →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center space-y-4">
                <button 
                  onClick={restartQuiz} 
                  className="text-sm text-gray-400 underline hover:text-teal-800 transition-colors"
                >
                  Not quite right? Retake the quiz
                </button>
                <div className="pt-4">
                  <a 
                    href="https://www.endoca.com/cbd-products/cbd-cream" 
                    onClick={(e) => {
                       handleOutboundClick(e, 'https://www.endoca.com/cbd-products/cbd-cream', 'Search', { content_name: 'Quiz Full Collection' });
                       onClose();
                    }}
                    className="block w-full sm:w-auto mx-auto bg-teal-900 hover:bg-teal-800 text-white font-poppins font-bold py-4 px-12 rounded-full shadow-lg transition-all hover:scale-105 text-center"
                  >
                    SHOP FULL COLLECTION →
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Question View */
            <div className={`p-6 md:p-10 transition-all duration-300 ${isAnimating ? 'opacity-0 -translate-x-10' : 'opacity-100 translate-x-0'}`}>
              <h2 className="font-playfair font-bold text-2xl md:text-3xl text-charcoal mb-8 text-center md:text-left">
                {questions[currentStep].text}
              </h2>
              
              <div className="space-y-3">
                {questions[currentStep].options.map((option, idx) => {
                  const isSelected = answers[currentStep + 1] === option.value;
                  return (
                    <div 
                      key={idx}
                      onClick={() => handleSelect(option.value)}
                      className={`
                        relative p-4 md:p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-center gap-4 group
                        ${isSelected 
                          ? 'border-coral bg-coral/5 shadow-md scale-[1.01]' 
                          : 'border-gray-100 hover:border-coral/40 hover:bg-gray-50'
                        }
                      `}
                    >
                      {option.icon && (
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center transition-colors
                          ${isSelected ? 'bg-coral text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-coral/10 group-hover:text-coral'}
                        `}>
                          {option.icon}
                        </div>
                      )}
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <h3 className={`font-poppins font-semibold text-lg ${isSelected ? 'text-coral' : 'text-gray-800'}`}>
                            {option.label}
                          </h3>
                          {isSelected && <Check className="text-coral" size={20} />}
                        </div>
                        {option.tag && (
                          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-md mt-1 inline-block">
                            {option.tag}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions (Only for Questions) */}
        {!showResults && (
          <div className="p-6 border-t border-gray-100 bg-white">
            <button
              onClick={handleNext}
              disabled={!answers[currentStep + 1]}
              className={`
                w-full py-4 rounded-full font-bold font-poppins text-white tracking-widest transition-all duration-300 flex items-center justify-center gap-2
                ${answers[currentStep + 1] 
                  ? 'bg-coral hover:bg-orange-500 shadow-[0_0_20px_rgba(255,107,88,0.4)] hover:shadow-[0_0_30px_rgba(255,107,88,0.6)] transform hover:-translate-y-1' 
                  : 'bg-gray-200 cursor-not-allowed text-gray-400'
                }
              `}
            >
              {currentStep === questions.length - 1 ? 'SEE MY RECOMMENDATIONS' : 'NEXT'} <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;