import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag, MessageCircle, Leaf } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen gradient-hero">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-12 animate-fade-in">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl gradient-primary shadow-soft">
            <Leaf className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Hero Section */}
          <div className="text-center space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              {t({ 
                en: 'Local Plant Marketplace', 
                kn: 'ಸ್ಥಳೀಯ ಸಸ್ಯ ಮಾರುಕಟ್ಟೆ', 
                hi: 'स्थानीय पौधा बाज़ार' 
              })}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t({ 
                en: 'Buy local plants & get soil guidance instantly', 
                kn: 'ಸ್ಥಳೀಯ ಸಸ್ಯಗಳನ್ನು ಖರೀದಿಸಿ ಮತ್ತು ತಕ್ಷಣ ಮಣ್ಣಿನ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ', 
                hi: 'स्थानीय पौधे खरीदें और तुरंत मिट्टी का मार्गदर्शन प्राप्त करें' 
              })}
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-soft">
            <img 
              src={heroBanner} 
              alt="Plants banner" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl px-4">
            <Button 
              size="lg"
              variant="hero"
              className="flex-1 text-lg"
              onClick={() => navigate('/plants')}
            >
              <ShoppingBag className="w-6 h-6" />
              {t({ en: 'Buy Local Plants', kn: 'ಸ್ಥಳೀಯ ಸಸ್ಯಗಳನ್ನು ಖರೀದಿಸಿ', hi: 'स्थानीय पौधे खरीदें' })}
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="flex-1 text-lg border-2"
              onClick={() => navigate('/chatbot')}
            >
              <MessageCircle className="w-6 h-6" />
              {t({ en: 'Ask AI Chatbot', kn: 'AI ಚಾಟ್‌ಬಾಟ್ ಕೇಳಿ', hi: 'AI चैटबॉट से पूछें' })}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
