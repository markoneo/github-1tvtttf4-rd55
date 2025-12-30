import React from 'react';
import { heroImages } from '../constants/images';
import Button from './ui/Button';
import { Search, Star, Award, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './ui/OptimizedImage';
import AnimatedContainer from './ui/AnimatedContainer';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-[70vh] sm:h-[75vh] lg:h-[85vh] flex items-center mb-8 sm:mb-16 overflow-hidden">
      {/* Background image with optimized loading */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="https://i.postimg.cc/dt5FCggN/airport-transfer-2914522212.jpg"
          alt="Airport transfer service"
          className="w-full h-full"
          objectFit="cover"
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content overlay - Mobile Optimized */}
      <div className="relative z-20 section-container w-full text-center text-white">
        <AnimatedContainer animation="fadeIn" delay={200}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {t('hero.title')}
          </h1>
        </AnimatedContainer>

        <AnimatedContainer animation="slideUp" delay={400}>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
            {t('hero.subtitle')}
          </p>
        </AnimatedContainer>

        <AnimatedContainer animation="slideUp" delay={600}>
          <Button
            href="#booking"
            className="px-8 sm:px-10 py-4 text-lg sm:text-xl font-bold transform hover:scale-105 focus:scale-105 transition-transform shadow-xl"
          >
            {t('hero.bookButton')}
          </Button>
        </AnimatedContainer>

        {/* Trust Signals */}
        <AnimatedContainer animation="scaleIn" delay={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-10 px-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star size={20} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm sm:text-base font-semibold">{t('hero.trustSignals.rating')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award size={20} className="text-blue-400" />
              <span className="text-sm sm:text-base font-semibold">{t('hero.trustSignals.experience')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock size={20} className="text-green-400" />
              <span className="text-sm sm:text-base font-semibold">{t('hero.trustSignals.support')}</span>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}