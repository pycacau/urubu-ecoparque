import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, PartyPopper, Mountain, Trees, Waves, Bird } from "lucide-react";
import heroImage from "@/assets/hero-ecopark.jpg";
import activitiesImage from "@/assets/activities.jpg";
import partyImage from "@/assets/party-venue.jpg";

const Index = () => {
  const features = [
    {
      icon: Trees,
      title: "Trilhas Ecológicas",
      description: "Explore a natureza em trilhas seguras e bem sinalizadas",
    },
    {
      icon: Waves,
      title: "Cachoeiras",
      description: "Banhos refrescantes em cachoeiras naturais",
    },
    {
      icon: Mountain,
      title: "Aventura",
      description: "Tirolesa, escalada e muito mais",
    },
    {
      icon: Bird,
      title: "Observação de Aves",
      description: "Conheça a fauna local com guias especializados",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-slide-up">
            Bem-vindo ao <span className="text-primary">Urubu Ecopark</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Viva experiências únicas em contato com a natureza. Diversão, aventura e memórias inesquecíveis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/ingressos">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Comprar Ingressos
              </Button>
            </Link>
            <Link to="/festas">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                Agendar Festa
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              O que oferecemos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubra todas as atividades e experiências que preparamos para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Aventuras para toda a família
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                No Urubu Ecopark, oferecemos atividades para todas as idades. Desde trilhas leves até aventuras radicais, sempre em harmonia com a natureza.
              </p>
              <ul className="space-y-3 mb-8">
                {["Trilhas guiadas", "Banho de cachoeira", "Tirolesa", "Área de piquenique", "Parquinho infantil"].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/ingressos">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Ver Ingressos
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={activitiesImage} 
                alt="Atividades no Urubu Ecopark" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-accent p-6 rounded-xl shadow-xl text-white">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm">Atividades disponíveis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                src={partyImage} 
                alt="Festas no Urubu Ecopark" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-accent to-primary p-6 rounded-xl shadow-xl text-white">
                <PartyPopper className="w-12 h-12 mb-2" />
                <p className="text-sm font-medium">Festas Inesquecíveis</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Comemore em meio à natureza
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Transforme sua festa em uma experiência única! Oferecemos espaços completos para aniversários, confraternizações e eventos corporativos.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Agendamento Flexível</h4>
                    <p className="text-muted-foreground">Escolha a data que melhor se adequa à sua programação</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PartyPopper className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Estrutura Completa</h4>
                    <p className="text-muted-foreground">Churrasqueira, mesas, cadeiras e muito mais</p>
                  </div>
                </div>
              </div>
              <Link to="/festas">
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90">
                  Agendar Minha Festa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Pronto para a aventura?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Garanta seu ingresso agora e venha viver momentos inesquecíveis em contato com a natureza!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ingressos">
              <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
                Comprar Agora
              </Button>
            </Link>
            <Link to="/sobre">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
