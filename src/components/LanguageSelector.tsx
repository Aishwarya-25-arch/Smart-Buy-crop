import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Languages } from 'lucide-react';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
      <SelectTrigger className="w-[140px] rounded-xl border-2 bg-card shadow-card">
        <Languages className="h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="rounded-xl bg-card shadow-soft z-50">
        <SelectItem value="en" className="rounded-lg">English</SelectItem>
        <SelectItem value="kn" className="rounded-lg">ಕನ್ನಡ</SelectItem>
        <SelectItem value="hi" className="rounded-lg">हिन्दी</SelectItem>
      </SelectContent>
    </Select>
  );
};
