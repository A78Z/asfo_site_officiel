import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { Calendar, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  excerpt,
  date,
  imageUrl,
  category,
  index,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <Link to={`/news/${id}`} className="block">
        <div className="relative h-56 md:h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg border border-teal-400 transform group-hover:scale-110 transition-transform duration-300">
            {category}
          </div>

          {/* Hover sparkles */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <Sparkles size={24} className="text-white/80 animate-pulse" />
          </div>

          {/* Bottom overlay with date */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-white/20 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center text-teal-600">
                <Calendar size={16} className="mr-2" />
                <span className="font-medium text-sm">{date}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="p-6 md:p-8">
        <Link to={`/news/${id}`} className="block">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300 leading-tight line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
          {excerpt}
        </p>
        
        <Link
          to={`/news/${id}`}
          className="group/btn inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-all duration-300 transform hover:translate-x-1"
        >
          <span className="mr-2">Lire plus</span>
          <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-teal-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const NewsPreview: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const news = [
    {
      id: "formation-premiers-secours",
      title: "Mamadou Thioye élu Président de l'Action Sanitaire pour le Fouta : Une Nouvelle Génération aux Commandes",
      excerpt: "C'est désormais officiel : Mamadou Thioye, doctorant en troisième année de médecine, vient d'être élu 20e président de l'Action Sanitaire pour le Fouta (ASFO).",
      date: "27 Avril 2025",
      imageUrl: "/president.jpg",
      category: "Président Asfo"
    },
    {
      id: "campagne-sensibilisation-covid",
      title: "MATAM SE PRÉPARE POUR LA 26e CAMPAGNE MÉDICALE DE L'ASFO SANTÉ",
      excerpt: "L'Action Sanitaire pour le Fouta (ASFO Santé) informe les habitants de la région de Matam et environs que les dépôts de dossiers sont officiellement...",
      date: "14 mars 2025",
      imageUrl: "/asfo-matam.jpeg",
      category: "dépôts-dossiers-Matam"
    },
    {
      id: "partenariat-oms",
      title: "Fierté et reconnaissance : le Dr Lamine Diallo couronné d'excellence !",
      excerpt: "C'est avec une immense joie et une grande fierté que nous adressons nos chaleureuses félicitations au Dr Lamine Diallo, président en exercice de l'ASFO Santé (Action Sanitaire pour le Fouta)... ",
      date: "14 mars 2025",
      imageUrl: "/dr-lamine-diallo.jpg",
      category: "Fierté et reconnaissance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-teal-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div 
            ref={titleRef}
            className={`flex-1 transition-all duration-1000 transform ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Floating Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-6 transform hover:scale-105 transition-transform duration-300">
              <TrendingUp className="text-teal-600 mr-3 animate-pulse" size={20} />
              <span className="text-teal-700 font-semibold">Dernières Nouvelles</span>
            </div>

            {/* Main Title with Gradient */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-teal-700 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight">
              Actualités
            </h2>
            
            {/* Subtitle with Enhanced Typography */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Suivez les dernières nouvelles et événements d'ASFO
            </p>
            
            {/* Decorative Line */}
            <div className="flex items-center mt-8">
              <div className="h-px bg-gradient-to-r from-teal-400 to-transparent w-32"></div>
              <div className="w-3 h-3 bg-teal-400 rounded-full mx-4 animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent to-teal-400 w-32"></div>
            </div>
          </div>
          
          <div 
            ref={buttonRef}
            className={`hidden lg:block transition-all duration-1000 transform ${
              buttonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <Button 
                variant="outline" 
                to="/news"
                className="relative bg-white/90 backdrop-blur-sm text-teal-600 border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-300 rounded-xl py-3 px-8 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                icon={<ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />}
              >
                Voir toutes les actualités
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {news.map((item, index) => (
            <NewsCard key={item.id} {...item} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center lg:hidden">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <Button 
              variant="outline" 
              to="/news"
              className="relative bg-white/90 backdrop-blur-sm text-teal-600 border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-300 rounded-xl py-4 px-8 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              icon={<ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />}
            >
              Voir toutes les actualités
            </Button>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-semibold text-lg">
                  Restez informé de nos actions
                </p>
                <p className="text-gray-600 text-sm">
                  Suivez l'actualité de l'ASFO en temps réel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;