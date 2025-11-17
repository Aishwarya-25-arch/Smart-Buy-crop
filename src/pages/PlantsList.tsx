import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Eye } from 'lucide-react';
import arecaPlant from '@/assets/areca-plant.jpg';
import coconutPlant from '@/assets/coconut-plant.jpg';
import bananaPlant from '@/assets/banana-plant.jpg';
import pepperPlant from '@/assets/pepper-plant.jpg';
import mangoSapling from '@/assets/mango-sapling.jpg';
import jackfruitSapling from '@/assets/jackfruit-sapling.jpg';

const PlantsList = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const plants = [
    {
      id: 'areca',
      image: arecaPlant,
      name: { en: 'Areca Plant', kn: 'ಅರೆಕಾ ಗಿಡ', hi: 'अरेका पौधा' },
      price: { en: '₹299', kn: '₹299', hi: '₹299' },
    },
    {
      id: 'coconut',
      image: coconutPlant,
      name: { en: 'Coconut Plant', kn: 'ತೆಂಗಿನ ಗಿಡ', hi: 'नारियल का पौधा' },
      price: { en: '₹399', kn: '₹399', hi: '₹399' },
    },
    {
      id: 'banana',
      image: bananaPlant,
      name: { en: 'Banana Plant', kn: 'ಬಾಳೆ ಗಿಡ', hi: 'केले का पौधा' },
      price: { en: '₹249', kn: '₹249', hi: '₹249' },
    },
    {
      id: 'pepper',
      image: pepperPlant,
      name: { en: 'Pepper Plant', kn: 'ಮೆಣಸಿನ ಗಿಡ', hi: 'काली मिर्च का पौधा' },
      price: { en: '₹199', kn: '₹199', hi: '₹199' },
    },
    {
      id: 'mango',
      image: mangoSapling,
      name: { en: 'Mango Sapling', kn: 'ಮಾವಿನ ಮರದ ಸಸಿ', hi: 'आम का पौधा' },
      price: { en: '₹449', kn: '₹449', hi: '₹449' },
    },
    {
      id: 'jackfruit',
      image: jackfruitSapling,
      name: { en: 'Jackfruit Sapling', kn: 'ಹಲಸಿನ ಮರದ ಸಸಿ', hi: 'कटहल का पौधा' },
      price: { en: '₹499', kn: '₹499', hi: '₹499' },
    },
  ];

  return (
    <div className="min-h-screen gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
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

        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t({ en: 'Local Plants', kn: 'ಸ್ಥಳೀಯ ಸಸ್ಯಗಳು', hi: 'स्थानीय पौधे' })}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t({ 
              en: 'Choose from our fresh collection of local plants', 
              kn: 'ನಮ್ಮ ತಾಜಾ ಸ್ಥಳೀಯ ಸಸ್ಯಗಳ ಸಂಗ್ರಹದಿಂದ ಆಯ್ಕೆಮಾಡಿ', 
              hi: 'हमारे ताजा स्थानीय पौधों के संग्रह से चुनें' 
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plants.map((plant, index) => (
            <Card
              key={plant.id}
              className="overflow-hidden bg-card border-2 border-border hover:border-primary transition-smooth cursor-pointer group shadow-card hover:shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={plant.image}
                  alt={t(plant.name)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(plant.name)}
                  </h3>
                  <p className="text-2xl font-bold text-primary">
                    {t(plant.price)}
                  </p>
                </div>
                <Button
                  className="w-full"
                  variant="default"
                  onClick={() => navigate(`/plant/${plant.id}`)}
                >
                  <Eye className="w-4 h-4" />
                  {t({ en: 'View Details', kn: 'ವಿವರಗಳನ್ನು ನೋಡಿ', hi: 'विवरण देखें' })}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantsList;
