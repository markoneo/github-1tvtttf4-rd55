import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function StickyMobileCTA() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7;
      const shouldShow = window.scrollY > heroHeight;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slideUp">
      <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-2xl">
        <button
          onClick={handleClick}
          className="w-full px-6 py-4 flex items-center justify-center gap-2 text-white font-bold text-lg active:scale-95 transition-transform"
        >
          {t('hero.bookButton')}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
