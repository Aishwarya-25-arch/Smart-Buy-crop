import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { ArrowLeft, Mic, Send } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Chatbot = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [recommendationLang, setRecommendationLang] = useState<Language>(language);

  const recommendations = {
    en: "Best soil for Areca Plant is Red Loamy Soil. Avoid clay soil. Water regularly but ensure good drainage. Keep in indirect sunlight.",
    kn: "ಅರೆಕಾ ಗಿಡಕ್ಕೆ ಕೆಂಪು ಲೋಮಿ ಮಣ್ಣು ಅತ್ಯುತ್ತಮ. ಕ್ಲೇ ಮಣ್ಣನ್ನು ತಪ್ಪಿಸಿ. ನಿಯಮಿತವಾಗಿ ನೀರುಣಿಸಿ ಆದರೆ ಉತ್ತಮ ಒಳಚರಂಡಿ ಖಚಿತಪಡಿಸಿ. ಪರೋಕ್ಷ ಸೂರ್ಯನ ಬೆಳಕಿನಲ್ಲಿ ಇರಿಸಿ.",
    hi: "अरेका पौधे के लिए लाल दोमट मिट्टी सबसे अच्छी है। चिकनी मिट्टी से बचें। नियमित रूप से पानी दें लेकिन अच्छी जल निकासी सुनिश्चित करें। अप्रत्यक्ष सूर्य के प्रकाश में रखें।",
  };

  return (
    <div className="min-h-screen gradient-hero flex flex-col">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => navigate('/home')}
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            {t({ en: 'Back', kn: 'ಹಿಂದೆ', hi: 'वापस' })}
          </Button>
          <LanguageSelector />
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 container mx-auto px-4 pb-6 max-w-4xl">
        <div className="h-full flex flex-col">
          {/* Chat Header */}
          <div className="text-center mb-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t({ en: 'AI Soil Assistant', kn: 'AI ಮಣ್ಣಿನ ಸಹಾಯಕ', hi: 'AI मिट्टी सहायक' })}
            </h1>
            <p className="text-muted-foreground">
              {t({
                en: 'Get personalized soil recommendations',
                kn: 'ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಮಣ್ಣಿನ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ',
                hi: 'व्यक्तिगत मिट्टी सिफारिशें प्राप्त करें',
              })}
            </p>
          </div>

          {/* Language Selector for Recommendations */}
          <div className="mb-6 animate-fade-in flex items-center justify-center gap-3">
            <span className="text-sm font-medium text-foreground">
              {t({ en: 'Get suggestion in:', kn: 'ಶಿಫಾರಸು ಪಡೆಯಿರಿ:', hi: 'सुझाव प्राप्त करें:' })}
            </span>
            <Select value={recommendationLang} onValueChange={(value) => setRecommendationLang(value as Language)}>
              <SelectTrigger className="w-[160px] rounded-xl bg-card shadow-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-xl bg-card shadow-soft z-50">
                <SelectItem value="en" className="rounded-lg">English</SelectItem>
                <SelectItem value="kn" className="rounded-lg">ಕನ್ನಡ</SelectItem>
                <SelectItem value="hi" className="rounded-lg">हिन्दी</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 bg-card/60 backdrop-blur-lg rounded-3xl shadow-soft border-2 border-border p-6 mb-6 overflow-y-auto animate-fade-in">
            <div className="space-y-4">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-6 py-3 max-w-[80%] shadow-card">
                  <p className="text-sm">
                    {t({
                      en: 'What soil is best for my Areca plant?',
                      kn: 'ನನ್ನ ಅರೆಕಾ ಗಿಡಕ್ಕೆ ಯಾವ ಮಣ್ಣು ಉತ್ತಮ?',
                      hi: 'मेरे अरेका पौधे के लिए कौन सी मिट्टी सबसे अच्छी है?',
                    })}
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-sm px-6 py-4 max-w-[80%] shadow-card">
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {recommendations[recommendationLang]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Bar */}
          <div className="bg-card/80 backdrop-blur-lg rounded-2xl shadow-soft border-2 border-border p-4 animate-fade-in">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder={t({
                  en: 'Type your question...',
                  kn: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ...',
                  hi: 'अपना प्रश्न टाइप करें...',
                })}
                className="flex-1 bg-background border-2 border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              />
              <Button size="icon" variant="ghost" className="rounded-xl" disabled>
                <Mic className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="hero" className="rounded-xl" disabled>
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
