import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { FallingLeaves, NatureParticles, WaterWaves } from "@/components/NatureEffects";
import { Calendar, PartyPopper, Mountain, Trees, Waves, Bird, ShoppingBag, Coffee, Utensils, Plane, Eye, Baby, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-ecopark.jpg";
import activitiesImage from "@/assets/activities.jpg";
import casalImage from "@/assets/party-venue.jpg";
import partyImage from "@/assets/comemoração.jpg";
import trilha from "@/assets/trilha.jpg";
import entranceImage from "@/assets/entrance.jpg";
// @ts-ignore
import urubudegaImage from "@/assets/urubudega.PNG";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          });
        },
        { threshold: 0.1 }
      );

      if (sectionRefs.current[key]) {
        observer.observe(sectionRefs.current[key]!);
        observers.push(observer);
      }
    });

    // Parallax effect melhorado
    if (typeof window !== 'undefined' && parallaxRef.current) {
      const handleScroll = () => {
        try {
          const scrolled = window.pageYOffset || window.scrollY || 0;
          const speed = 0.5;
          const yPos = scrolled * speed;
          
          if (parallaxRef.current) {
            parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
          }
        } catch (e) {
          // Silenciar erros de scroll
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        observers.forEach((observer) => observer.disconnect());
        window.removeEventListener('scroll', handleScroll);
      };
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const features = [
    {
      icon: Utensils,
      title: "RESTAURANTE",
      description: "Sabores regionais em meio à natureza",
    },
    {
      icon: ShoppingBag,
      title: "URUBUDEGA",
      description: "Lojinha com produtos naturais e artesanatos",
    },
    {
      icon: Plane,
      title: "VÔO LIVRE",
      description: "Experiências de voo livre e aventura",
    },
    {
      icon: Eye,
      title: "MIRANTES",
      description: "Vistas panorâmicas deslumbrantes",
    },
    {
      icon: Waves,
      title: "CACHOEIRAS",
      description: "Banhos refrescantes em cachoeiras naturais",
    },
    {
      icon: Trees,
      title: "TRILHAS",
      description: "Explore a natureza em trilhas seguras e bem sinalizadas",
    },
    {
      icon: Baby,
      title: "PARQUINHO",
      description: "Diversão garantida para as crianças",
    },
    {
      icon: Sprout,
      title: "VIVEIRO DE MUDAS",
      description: "Conheça e adquira mudas de plantas nativas",
    },
  ];

  // Array de imagens para a galeria (pode ser vazio inicialmente)
  const galleryImages: string[] = [
    heroImage,
    activitiesImage,
    trilha,
    casalImage,
    partyImage,
    entranceImage,
    // Espaço para mais imagens que serão adicionadas
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: 'translate3d(0, 0px, 0)',
          }}
        >
          <div className="gradient-overlay"></div>
          {/* Overlay mais claro para clarear a imagem */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
        
        {/* Efeitos naturais - mais sutis */}
        <NatureParticles className="opacity-50" />
        <FallingLeaves className="opacity-40" />
        <WaterWaves className="opacity-30" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            {/* Overlay escuro para melhor contraste do texto */}
            <div className="inline-block bg-black/60 backdrop-blur-md px-8 py-6 rounded-2xl mb-6 border border-white/20 shadow-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white drop-shadow-2xl animate-fade-in-up mb-4" style={{ animationDelay: "0.1s" }}>
                Urubu Ecoparque
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-white/95 drop-shadow-lg font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Viva experiências únicas em contato com a natureza. Diversão, aventura e memórias inesquecíveis!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/entradas" className="touch-feedback">
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-8 sm:px-10 bg-primary/90 backdrop-blur-sm border-2 border-white text-white hover:bg-primary transition-all hover:scale-105 active:scale-95 shadow-xl font-bold">
                  Entradas
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="py-20 sm:py-24 bg-gradient-to-b from-muted/40 via-muted/30 to-background bg-leaf-pattern relative overflow-hidden"
        ref={(el) => (sectionRefs.current.features = el)}
      >
        <NatureParticles className="opacity-25" />
        <FallingLeaves className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className={cn(
            "text-center mb-12 sm:mb-16 transition-all duration-700",
            isVisible.features ? "animate-fade-in-up opacity-100" : "opacity-0"
          )}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              O que temos
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Descubra todas as atividades e experiências que preparamos para você
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={cn(
                  "card-nature card-hover touch-feedback transition-all duration-500",
                  isVisible.features ? "animate-scale-in opacity-100" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-nature-leaf rounded-full flex items-center justify-center mx-auto mb-4 animate-float shadow-lg" style={{ animationDelay: `${index * 0.2}s` }}>
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-md" />
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 text-foreground text-nature-shadow">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section 
        className="py-20 sm:py-24 gradient-nature-forest relative overflow-hidden"
        ref={(el) => (sectionRefs.current.activities = el)}
      >
        <WaterWaves className="opacity-25" />
        <NatureParticles className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className={cn(
              "transition-all duration-700",
              isVisible.activities ? "animate-slide-in-left opacity-100" : "opacity-0"
            )}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                Aventuras para toda a família
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-6">
                No Urubu Ecoparque, oferecemos atividades para todas as idades. Desde trilhas leves até aventuras radicais, sempre em harmonia com a natureza.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start text-foreground text-sm sm:text-base">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold block">{feature.title}</span>
                      <span className="text-muted-foreground text-xs sm:text-sm">{feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={cn(
              "relative transition-all duration-700",
              isVisible.activities ? "animate-slide-in-right opacity-100" : "opacity-0"
            )}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl card-hover">
                  <img 
                    src={activitiesImage} 
                    alt="Atividades no Urubu Ecoparque" 
                    className="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl card-hover">
                  <img 
                    src={heroImage} 
                    alt="Natureza no Urubu Ecoparque" 
                    className="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl card-hover">
                  <img 
                    src={entranceImage} 
                    alt="Entrada do Urubu Ecoparque" 
                    className="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl card-hover">
                  <img 
                    src={trilha} 
                    alt="Trilhas no Urubu Ecoparque" 
                    className="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-primary to-nature-leaf p-4 sm:p-6 rounded-xl shadow-xl text-white animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <p className="text-2xl sm:text-3xl font-bold">100+</p>
                <p className="text-xs sm:text-sm">Atividades disponíveis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Section */}
      <section 
        className="py-20 sm:py-24 bg-gradient-to-b from-background via-muted/30 to-muted/40 bg-leaf-pattern relative overflow-hidden"
        ref={(el) => (sectionRefs.current.party = el)}
      >
        <FallingLeaves className="opacity-30" />
        <NatureParticles className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className={cn(
              "order-2 md:order-1 relative transition-all duration-700",
              isVisible.party ? "animate-slide-in-left opacity-100" : "opacity-0"
            )}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl card-hover">
                <img 
                  src={partyImage} 
                  alt="Comemorações no Urubu Ecoparque" 
                  className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-primary to-nature-leaf p-4 sm:p-6 rounded-xl shadow-xl text-white animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <PartyPopper className="w-10 h-10 sm:w-12 sm:h-12 mb-2 animate-float" />
                <p className="text-xs sm:text-sm font-medium">Momentos Inesquecíveis</p>
              </div>
            </div>
            <div className={cn(
              "order-1 md:order-2 transition-all duration-700",
              isVisible.party ? "animate-slide-in-right opacity-100" : "opacity-0"
            )}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                Comemore em meio à natureza
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-6">
                Transforme sua festa em uma experiência única! Oferecemos espaços completos para aniversários, confraternizações e eventos corporativos.
              </p>
              <div className="space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-sm sm:text-base">Agendamento Flexível</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Escolha a data que melhor se adequa à sua programação</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-sm sm:text-base">Estrutura Completa</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Churrasqueira, mesas, cadeiras e muito mais</p>
                  </div>
                </div>
              </div>
              <Link to="/festas" className="touch-feedback inline-block">
                <Button size="lg" className="bg-white text-primary hover:bg-white/95 transition-all hover:scale-105 active:scale-95 shadow-xl font-bold border-2 border-primary">
                  Agendar Minha Festa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urubudega Section */}
      <section 
        className="py-20 sm:py-24 bg-gradient-to-br from-nature-brown/10 via-muted/30 to-nature-earth/10 relative overflow-hidden"
        ref={(el) => (sectionRefs.current.urubudega = el)}
      >
        <FallingLeaves className="opacity-30" />
        <NatureParticles className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className={cn(
              "transition-all duration-700",
              isVisible.urubudega ? "animate-slide-in-left opacity-100" : "opacity-0"
            )}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-nature-brown to-nature-earth rounded-xl flex items-center justify-center shadow-lg">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                  Urubudega
                </h2>
              </div>
              <p className="text-muted-foreground text-base sm:text-lg mb-6">
                Nossa lojinha especial com produtos naturais, artesanatos locais, lembranças do parque e delícias regionais. Leve um pedacinho do Urubu Ecoparque para casa!
              </p>
              <ul className="space-y-3 mb-6 sm:mb-8">
                {["Produtos naturais e orgânicos", "Artesanatos da região", "Lembranças exclusivas", "Doces e quitutes caseiros", "Bebidas artesanais"].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground text-sm sm:text-base">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-nature-brown/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Coffee className="w-3 h-3 sm:w-4 sm:h-4 text-nature-brown" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/urubudega" className="touch-feedback inline-block">
                <Button size="lg" className="bg-gradient-to-r from-nature-brown to-nature-earth text-white hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-xl font-bold border-2 border-nature-brown">
                  Visitar Urubudega
                </Button>
              </Link>
            </div>
            <div className={cn(
              "relative transition-all duration-700",
              isVisible.urubudega ? "animate-slide-in-right opacity-100" : "opacity-0"
            )}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl card-hover">
                <img 
                  src={urubudegaImage} 
                  alt="Urubudega" 
                  className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ImageGallery 
        images={galleryImages}
        title="Galeria de Fotos"
        columns={3}
      />

      {/* CTA Section */}
      <section 
        className="py-20 sm:py-24 gradient-nature-sunset relative overflow-hidden"
        ref={(el) => (sectionRefs.current.cta = el)}
      >
        <NatureParticles className="opacity-30" />
        <FallingLeaves className="opacity-25" />
        <WaterWaves className="opacity-20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        </div>
        <div className={cn(
          "container mx-auto px-4 text-center text-white relative z-10 transition-all duration-700",
          isVisible.cta ? "animate-fade-in-up opacity-100" : "opacity-0"
        )}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 drop-shadow-lg">
              Pronto para a aventura?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-95 font-medium">
              Garanta sua entrada agora e venha viver momentos inesquecíveis em contato com a natureza!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sobre" className="touch-feedback">
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-8 sm:px-10 border-2 border-white text-white hover:bg-white/20 transition-all hover:scale-105 active:scale-95 font-bold shadow-xl bg-white/5">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
