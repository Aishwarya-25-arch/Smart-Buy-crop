import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Sparkles } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>

      <div className="w-full max-w-2xl text-center space-y-8 animate-fade-in">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative bg-card rounded-full p-8 shadow-soft border-4 border-primary">
              <CheckCircle className="w-24 h-24 text-primary" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {t({
              en: 'Order Placed Successfully!',
              kn: 'ಆರ್ಡರ್ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!',
              hi: 'ऑर्डर सफलतापूर्वक दिया गया!',
            })}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t({
              en: 'Your AI soil recommendation is ready',
              kn: 'ನಿಮ್ಮ AI ಮಣ್ಣಿನ ಶಿಫಾರಸು ಸಿದ್ಧವಾಗಿದೆ',
              hi: 'आपकी AI मिट्टी सिफारिश तैयार है',
            })}
          </p>
        </div>

        {/* Decorative Card */}
        <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-8 shadow-soft border-2 border-border mx-auto max-w-lg">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              {t({
                en: 'Get personalized soil guidance',
                kn: 'ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಮಣ್ಣಿನ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ',
                hi: 'व्यक्तिगत मिट्टी मार्गदर्शन प्राप्त करें',
              })}
            </h3>
          </div>
          <p className="text-muted-foreground mb-6">
            {t({
              en: 'Learn the best soil type, watering schedule, and care tips for your plant',
              kn: 'ನಿಮ್ಮ ಗಿಡಕ್ಕೆ ಉತ್ತಮ ಮಣ್ಣಿನ ಪ್ರಕಾರ, ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಆರೈಕೆ ಸಲಹೆಗಳನ್ನು ತಿಳಿಯಿರಿ',
              hi: 'अपने पौधे के लिए सर्वोत्तम मिट्टी का प्रकार, पानी देने का कार्यक्रम और देखभाल युक्तियाँ जानें',
            })}
          </p>
          <Button
            size="lg"
            variant="hero"
            className="w-full"
            onClick={() => navigate('/chatbot')}
          >
            <Sparkles className="w-5 h-5" />
            {t({
              en: 'Get Soil Recommendation',
              kn: 'ಮಣ್ಣಿನ ಶಿಫಾರಸು ಪಡೆಯಿರಿ',
              hi: 'मिट्टी की सिफारिश प्राप्त करें',
            })}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
