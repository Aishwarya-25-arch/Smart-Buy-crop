import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ShoppingCart, Sparkles } from 'lucide-react';
import arecaPlant from '@/assets/areca-plant.jpg';
import coconutPlant from '@/assets/coconut-plant.jpg';
import bananaPlant from '@/assets/banana-plant.jpg';
import pepperPlant from '@/assets/pepper-plant.jpg';
import mangoSapling from '@/assets/mango-sapling.jpg';
import jackfruitSapling from '@/assets/jackfruit-sapling.jpg';

const PlantDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();

  const plantsData: Record<string, any> = {
    areca: {
      image: arecaPlant,
      name: { en: 'Areca Plant', kn: 'ಅರೆಕಾ ಗಿಡ', hi: 'अरेका पौधा' },
      price: { en: '₹299', kn: '₹299', hi: '₹299' },
      description: {
        en: 'Beautiful Areca palm perfect for indoor decoration. Known for air purifying qualities.',
        kn: 'ಒಳಾಂಗಣ ಅಲಂಕಾರಕ್ಕೆ ಸೂಕ್ತವಾದ ಸುಂದರ ಅರೆಕಾ ತಾಳೆ. ಗಾಳಿ ಶುದ್ಧೀಕರಣ ಗುಣಗಳಿಗೆ ಹೆಸರುವಾಸಿ.',
        hi: 'घर की सजावट के लिए सुंदर अरेका पाम। वायु शुद्ध करने के गुणों के लिए जाना जाता है।',
      },
    },
    coconut: {
      image: coconutPlant,
      name: { en: 'Coconut Plant', kn: 'ತೆಂಗಿನ ಗಿಡ', hi: 'नारियल का पौधा' },
      price: { en: '₹399', kn: '₹399', hi: '₹399' },
      description: {
        en: 'Young coconut sapling ideal for tropical gardens. Grows well in warm climates.',
        kn: 'ಉಷ್ಣವಲಯದ ತೋಟಗಳಿಗೆ ಸೂಕ್ತವಾದ ಚಿಕ್ಕ ತೆಂಗಿನ ಸಸಿ. ಬೆಚ್ಚನೆಯ ವಾತಾವರಣದಲ್ಲಿ ಚೆನ್ನಾಗಿ ಬೆಳೆಯುತ್ತದೆ.',
        hi: 'उष्णकटिबंधीय बगीचों के लिए आदर्श युवा नारियल का पौधा। गर्म जलवायु में अच्छी तरह से उगता है।',
      },
    },
    banana: {
      image: bananaPlant,
      name: { en: 'Banana Plant', kn: 'ಬಾಳೆ ಗಿಡ', hi: 'केले का पौधा' },
      price: { en: '₹249', kn: '₹249', hi: '₹249' },
      description: {
        en: 'Fast-growing banana plant with broad green leaves. Perfect for farm gardens.',
        kn: 'ವಿಶಾಲವಾದ ಹಸಿರು ಎಲೆಗಳೊಂದಿಗೆ ವೇಗವಾಗಿ ಬೆಳೆಯುವ ಬಾಳೆ ಗಿಡ. ಕೃಷಿ ತೋಟಗಳಿಗೆ ಸೂಕ್ತ.',
        hi: 'चौड़ी हरी पत्तियों के साथ तेजी से बढ़ने वाला केले का पौधा। खेत के बगीचों के लिए एकदम सही।',
      },
    },
    pepper: {
      image: pepperPlant,
      name: { en: 'Pepper Plant', kn: 'ಮೆಣಸಿನ ಗಿಡ', hi: 'काली मिर्च का पौधा' },
      price: { en: '₹199', kn: '₹199', hi: '₹199' },
      description: {
        en: 'Organic pepper plant that produces fresh peppercorns. Easy to grow and maintain.',
        kn: 'ತಾಜಾ ಮೆಣಸು ಉತ್ಪಾದಿಸುವ ಸಾವಯವ ಮೆಣಸಿನ ಗಿಡ. ಬೆಳೆಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಸುಲಭ.',
        hi: 'ताजा काली मिर्च पैदा करने वाला जैविक काली मिर्च का पौधा। उगाने और बनाए रखने में आसान।',
      },
    },
    mango: {
      image: mangoSapling,
      name: { en: 'Mango Sapling', kn: 'ಮಾವಿನ ಮರದ ಸಸಿ', hi: 'आम का पौधा' },
      price: { en: '₹449', kn: '₹449', hi: '₹449' },
      description: {
        en: 'Premium mango tree sapling with glossy leaves. Will produce sweet mangoes in 3-4 years.',
        kn: 'ಹೊಳಪಿನ ಎಲೆಗಳೊಂದಿಗೆ ಉತ್ತಮ ಮಾವಿನ ಮರದ ಸಸಿ. 3-4 ವರ್ಷಗಳಲ್ಲಿ ಸಿಹಿ ಮಾವಿನಹಣ್ಣುಗಳನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ.',
        hi: 'चमकदार पत्तियों वाला प्रीमियम आम का पौधा। 3-4 साल में मीठे आम देगा।',
      },
    },
    jackfruit: {
      image: jackfruitSapling,
      name: { en: 'Jackfruit Sapling', kn: 'ಹಲಸಿನ ಮರದ ಸಸಿ', hi: 'कटहल का पौधा' },
      price: { en: '₹499', kn: '₹499', hi: '₹499' },
      description: {
        en: 'Healthy jackfruit tree sapling with large green leaves. Grows into a magnificent tree.',
        kn: 'ದೊಡ್ಡ ಹಸಿರು ಎಲೆಗಳೊಂದಿಗೆ ಆರೋಗ್ಯಕರ ಹಲಸಿನ ಮರದ ಸಸಿ. ಭವ್ಯವಾದ ಮರವಾಗಿ ಬೆಳೆಯುತ್ತದೆ.',
        hi: 'बड़ी हरी पत्तियों वाला स्वस्थ कटहल का पौधा। एक शानदार पेड़ में विकसित होता है।',
      },
    },
  };

  const plant = plantsData[id || 'areca'];

  return (
    <div className="min-h-screen gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => navigate('/plants')}
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            {t({ en: 'Back', kn: 'ಹಿಂದೆ', hi: 'वापस' })}
          </Button>
          <LanguageSelector />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Plant Image */}
            <div className="animate-fade-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-soft border-4 border-border bg-card">
                <img
                  src={plant.image}
                  alt={t(plant.name)}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Plant Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {t(plant.name)}
                </h1>
                <p className="text-3xl font-bold text-primary mb-6">
                  {t(plant.price)}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(plant.description)}
                </p>
              </div>

              <div className="bg-accent/30 rounded-2xl p-6 border-2 border-accent">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">
                    {t({
                      en: 'AI soil guidance available after purchase',
                      kn: 'ಖರೀದಿಯ ನಂತರ AI ಮಣ್ಣಿನ ಮಾರ್ಗದರ್ಶನ ಲಭ್ಯ',
                      hi: 'खरीद के बाद AI मिट्टी मार्गदर्शन उपलब्ध',
                    })}
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                variant="hero"
                className="w-full text-lg"
                onClick={() => navigate('/order-success')}
              >
                <ShoppingCart className="w-6 h-6" />
                {t({ en: 'Buy Now', kn: 'ಈಗ ಖರೀದಿಸಿ', hi: 'अभी खरीदें' })}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
