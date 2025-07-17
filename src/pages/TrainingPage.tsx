import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Award, Users, Target, Sparkles, GraduationCap, Brain, Stethoscope, Clock, Heart } from 'lucide-react';

const TrainingPage: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'ASFO | Action Sanitaire pour le Fouta';
  }, []);

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [objectivesRef, objectivesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [impactRef, impactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trainingTypes = [
    {
      title: "Soins médicaux de base",
      description: "Formation aux techniques de soins essentiels et protocoles médicaux standards",
      image: "/soins-medicaux-base.webp",
      icon: <Stethoscope size={24} />,
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500"
    },
    {
      title: "Premiers secours",
      description: "Formation aux gestes qui sauvent pour les enseignants et relais communautaires",
      image: "/secours.webp",
      icon: <Heart size={24} />,
      color: "from-red-500 to-red-600",
      iconBg: "bg-red-500"
    },
    {
      title: "Stages pratiques",
      description: "Immersion professionnelle pour les étudiants en santé",
      image: "/stages-pratiques.webp",
      icon: <Users size={24} />,
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-500"
    },
    {
      title: "Mise à niveau",
      description: "Ateliers de perfectionnement pour le personnel médical local",
      image: "/mise-niveau.webp",
      icon: <Target size={24} />,
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-500"
    },
    {
      title: "Spécialisation",
      description: "Formation approfondie dans des domaines médicaux spécifiques",
      image: "/specialisation.webp",
      icon: <Brain size={24} />,
      color: "from-indigo-500 to-indigo-600",
      iconBg: "bg-indigo-500"
    },
    {
      title: "Formation continue",
      description: "Programme de développement professionnel continu",
      image: "/formation-continue.webp",
      icon: <Clock size={24} />,
      color: "from-teal-500 to-teal-600",
      iconBg: "bg-teal-500"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="/barre-formation.webp" 
            alt="Formation médicale ASFO" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-700/60"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 transform hover:scale-105 transition-transform duration-300">
              <GraduationCap className="mr-2 text-white/80" size={16} />
              <span>Développer les compétences locales</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Formations et renforcement des capacités
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Développer l'expertise locale pour un impact durable sur la santé communautaire.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-white via-teal-50/20 to-blue-50/10 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div 
            ref={titleRef}
            className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="prose prose-lg max-w-none mb-16 text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                ASFO s'engage dans la <strong className="text-teal-600">formation continue des professionnels de santé</strong> et le 
                <strong className="text-teal-600"> renforcement des capacités des acteurs locaux</strong>. Notre programme de formation
                vise à améliorer durablement la qualité des soins dans les zones rurales et à développer l'autonomie des communautés.
              </p>
            </div>

            {/* Training Types Grid */}
            <div 
              ref={cardsRef}
              className={`mt-20 transition-all duration-1000 transform ${
                cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <SectionTitle 
                title="Nos programmes de formation" 
                subtitle="Des formations adaptées aux besoins spécifiques des communautés" 
                center
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12">
                {trainingTypes.map((training, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${training.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    {/* Enhanced Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={training.image}
                        alt={training.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                      
                      {/* Icon overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                        <div className={`w-16 h-16 ${training.iconBg} rounded-full flex items-center justify-center text-white shadow-lg`}>
                          {training.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                        {training.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {training.description}
                      </p>
                      
                      {/* Action button */}
                      <div className="mt-6">
                        <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 flex items-center justify-center group/btn">
                          <span>En savoir plus</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Bottom glow effect */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-teal-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectives Section */}
            <div 
              ref={objectivesRef}
              className={`mt-24 transition-all duration-1000 transform ${
                objectivesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-6">
                  <Target className="text-teal-600 mr-3" size={24} />
                  <span className="text-teal-700 font-semibold text-lg">Nos Objectifs</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-teal-700 to-gray-800 bg-clip-text text-transparent mb-6">
                  Une approche stratégique de la formation
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-teal-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-6 text-white shadow-lg">
                      <Award size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Amélioration des soins</h3>
                  </div>
                  
                  <div className="space-y-4 pl-4">
                    <div className="flex items-start bg-white/70 p-4 rounded-xl shadow-sm border border-teal-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-teal-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Renforcement des compétences cliniques</h4>
                        <p className="text-gray-600 text-sm">Développement des aptitudes pratiques et théoriques pour une meilleure prise en charge des patients</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-white/70 p-4 rounded-xl shadow-sm border border-teal-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-teal-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Mise à jour des connaissances médicales</h4>
                        <p className="text-gray-600 text-sm">Actualisation régulière des savoirs selon les dernières avancées scientifiques et médicales</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-white/70 p-4 rounded-xl shadow-sm border border-teal-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-teal-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Standardisation des pratiques</h4>
                        <p className="text-gray-600 text-sm">Harmonisation des protocoles de soins pour garantir une qualité constante des services médicaux</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-xl border border-blue-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-6 text-white shadow-lg">
                      <Sparkles size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Impact durable</h3>
                  </div>
                  
                  <div className="space-y-4 pl-4">
                    <div className="flex items-start bg-white/70 p-4 rounded-xl shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Autonomisation des structures locales</h4>
                        <p className="text-gray-600 text-sm">Renforcement des capacités des centres de santé locaux pour une meilleure autonomie opérationnelle</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-white/70 p-4 rounded-xl shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Transfert de compétences</h4>
                        <p className="text-gray-600 text-sm">Transmission des savoirs et savoir-faire entre professionnels pour un effet multiplicateur</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-white/70 p-4 rounded-xl shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Pérennisation des actions</h4>
                        <p className="text-gray-600 text-sm">Mise en place de mécanismes durables pour assurer la continuité des services après nos interventions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div 
              ref={impactRef}
              className={`mt-24 transition-all duration-1000 transform ${
                impactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-6">
                  <Award className="text-teal-600 mr-3" size={24} />
                  <span className="text-teal-700 font-semibold text-lg">Notre Impact</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-teal-700 to-gray-800 bg-clip-text text-transparent mb-6">
                  Des résultats concrets
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    value: "500+",
                    label: "Professionnels formés",
                    icon: <Users size={28} />,
                    color: "from-teal-500 to-teal-600",
                    description: "Médecins, infirmiers et agents de santé communautaire ayant bénéficié de nos programmes"
                  },
                  {
                    value: "50+",
                    label: "Sessions organisées",
                    icon: <BookOpen size={28} />,
                    color: "from-blue-500 to-blue-600",
                    description: "Formations théoriques et pratiques dispensées dans différentes localités"
                  },
                  {
                    value: "20+",
                    label: "Localités couvertes",
                    icon: <GraduationCap size={28} />,
                    color: "from-purple-500 to-purple-600",
                    description: "Zones rurales et urbaines touchées par nos programmes de formation"
                  }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-xl font-semibold text-gray-800 mb-4">
                        {stat.label}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {stat.description}
                      </p>
                    </div>
                    
                    {/* Bottom glow effect */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-teal-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom decorative element */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 font-semibold text-lg">
                      Former pour un impact durable
                    </p>
                    <p className="text-gray-600 text-sm">
                      Le transfert de compétences au cœur de notre mission
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;