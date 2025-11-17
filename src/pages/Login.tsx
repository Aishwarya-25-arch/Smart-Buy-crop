import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Lock, Leaf } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>

      <div className="w-full max-w-md">
        <div className="bg-card/80 backdrop-blur-lg rounded-3xl shadow-soft p-8 space-y-6 border border-border/50 animate-fade-in">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-4">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              {t({ en: 'Welcome Back', kn: 'ಸ್ವಾಗತ', hi: 'स्वागत है' })}
            </h1>
            <p className="text-muted-foreground">
              {t({ 
                en: 'Local Plant Marketplace', 
                kn: 'ಸ್ಥಳೀಯ ಸಸ್ಯ ಮಾರುಕಟ್ಟೆ', 
                hi: 'स्थानीय पौधा बाज़ार' 
              })}
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {t({ en: 'Email / Phone', kn: 'ಇಮೇಲ್ / ಫೋನ್', hi: 'ईमेल / फ़ोन' })}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder={t({ 
                    en: 'Enter your email or phone', 
                    kn: 'ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ಫೋನ್ ನಮೂದಿಸಿ', 
                    hi: 'अपना ईमेल या फ़ोन दर्ज करें' 
                  })}
                  className="pl-10 h-12 rounded-xl border-2 bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {t({ en: 'Password', kn: 'ಗುಪ್ತಪದ', hi: 'पासवर्ड' })}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="password" 
                  placeholder={t({ 
                    en: 'Enter your password', 
                    kn: 'ನಿಮ್ಮ ಗುಪ್ತಪದವನ್ನು ನಮೂದಿಸಿ', 
                    hi: 'अपना पासवर्ड दर्ज करें' 
                  })}
                  className="pl-10 h-12 rounded-xl border-2 bg-background"
                />
              </div>
            </div>

            <Button 
              className="w-full" 
              size="lg"
              variant="hero"
              onClick={() => navigate('/home')}
            >
              {t({ en: 'Login', kn: 'ಲಾಗಿನ್', hi: 'लॉगिन करें' })}
            </Button>

            <div className="text-center">
              <button className="text-sm text-primary hover:underline font-medium">
                {t({ en: 'Create Account', kn: 'ಖಾತೆ ರಚಿಸಿ', hi: 'खाता बनाएं' })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
