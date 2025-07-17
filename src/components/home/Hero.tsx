import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import { ChevronRight, Heart, Archive, ChevronDown } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttons: {
    primary: { text: string; to: string };
    secondary?: { text: string; to: string };
  };
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Soigner avec le cœur,",
    subtitle: "Former pour demain",
    description:
      "Depuis 2000, l'Action Sanitaire pour le Fouta (ASFO) mobilise des professionnels de santé et des bénévoles pour offrir des soins gratuits, des consultations spécialisées et des actions de sensibilisation au bénéfice des populations les plus vulnérables du Fouta.",
    image: "/slide1.webp",
    buttons: {
      primary: { text: "Nos Rapports", to: "/services" },
      secondary: { text: "Faire un don", to: "/donate" },
    },
  },
  {
    id: 2,
    title: "Votre satisfaction,",
    subtitle: "Notre crédo",
    description:
      "Depuis sa création, l'ASFO a permis à des milliers de patients d'accéder à des soins gratuits dans les zones les plus reculées du Fouta. À travers ses campagnes médicales, actions de sensibilisation, elle incarne une jeunesse engagée qui soigne, forme et transforme durablement des vies.",
    image: "/slide-2.webp",
    buttons: {
      primary: { text: "Voir les archives", to: "/archives" },
    },
  },
  {
    id: 3,
    title: "Ensemble, pour un avenir",
    subtitle: "Plus sain et plus solidaire",
    description:
      "Votre engagement peut réellement changer des vies. Rejoignez notre mission humanitaire  en vous impliquant comme, membre, partenaire ou volontaire Chaque geste compte. Chaque soutien fait la différence.",
    image: "/slide-3.webp",
    buttons: {
      primary: { text: "S'engager", to: "/join" },
      secondary: { text: "Nous contacter", to: "/contact" },
    },
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation d'apparition au chargement
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 15000); // Augmenté à 15 secondes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${index === currentSlide ? 'scale-105' : 'scale-100'}`}
        >
          <img
            src={slide.image}
            alt="ASFO slide"
            className="w-full h-full object-cover transition-transform duration-[20s] ease-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/80 to-teal-700/70 animate-pulse"></div>
          
          {/* Effet de particules animées */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-teal-300 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
            <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-28 md:pt-24">
        <div className="max-w-3xl">
          {/* Badge animé */}
          <div className={`inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-medium mb-6 md:mb-8 border border-white/30 shadow-lg transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } hover:bg-white/30 hover:scale-105 hover:shadow-xl relative`} style={{ zIndex: 1 }}>
            <Heart className="mr-2 text-red-400" size={14} />
            <span>Association à but non lucratif depuis 2000</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          </div>

          {/* Contenu principal avec animations échelonnées */}
          <div className={`transition-all duration-700 transform ${
            isTransitioning ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
          }`}>
            
            {/* Titre avec animation */}
            <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 transition-all duration-1000 transform ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '200ms' }}>
              {slides[currentSlide].title} <br className="hidden md:block" />
              <span className="text-teal-300 bg-gradient-to-r from-teal-300 to-teal-200 bg-clip-text text-transparent animate-pulse">
                {slides[currentSlide].subtitle}
              </span>
            </h1>

            {/* Description avec animation */}
            <p className={`text-xl md:text-2xl text-white/90 mb-10 leading-relaxed transition-all duration-1000 transform ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } max-w-4xl`} style={{ animationDelay: '400ms' }}>
              {slides[currentSlide].description}
            </p>

            {/* Boutons avec animations */}
            <div className={`flex flex-wrap gap-6 transition-all duration-1000 transform ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '600ms' }}>
              
              {/* Bouton principal modernisé */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <Button
                  variant="accent"
                  size="large"
                  to={slides[currentSlide].buttons.primary.to}
                  className="relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-0"
                  icon={<Archive size={20} className="transition-transform duration-300 group-hover:rotate-12" />}
                >
                  {slides[currentSlide].buttons.primary.text}
                </Button>
              </div>

              {/* Bouton secondaire si présent */}
              {slides[currentSlide].buttons.secondary && (
                <div className="relative group">
                  <Button
                    variant="outline"
                    size="large"
                    to={slides[currentSlide].buttons.secondary.to}
                    className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-2xl py-4 px-8 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                  >
                    {slides[currentSlide].buttons.secondary.text}
                    <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll modernisé */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} style={{ animationDelay: '800ms' }}>
        <div className="relative group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          {/* Ligne animée */}
          <div className="h-16 w-0.5 bg-gradient-to-b from-white/60 to-transparent mb-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-white animate-pulse"></div>
          </div>
          
          {/* Texte et flèche */}
          <div className="flex flex-col items-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-sm font-medium mb-2 group-hover:text-teal-300 transition-colors duration-300">Découvrir</span>
            <ChevronDown size={20} className="animate-bounce group-hover:text-teal-300 transition-colors duration-300" />
          </div>
          
          {/* Effet de halo au hover */}
          <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-500 blur-sm"></div>
        </div>
      </div>
      
      {/* Indicateurs de slides modernisés */}
      <div className="absolute bottom-24 right-8 flex flex-col space-y-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`w-3 h-8 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg scale-110' 
                : 'bg-white/40 hover:bg-white/60 hover:scale-105'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;