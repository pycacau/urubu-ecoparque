import { Heart, Target, Award, Users, Mountain, Leaf, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FallingLeaves, NatureParticles } from "@/components/NatureEffects";
import heroImage from "@/assets/hero-ecopark.jpg";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <NatureParticles className="opacity-20" />
        <FallingLeaves className="opacity-15" />
        <div className="relative z-10 container mx-auto px-4 text-center" style={{ marginTop: '80px' }}>
          <div className="inline-block mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto shadow-2xl border-2 border-white/20">
              <Mountain className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}>
            Sobre o Urubu Ecoparque
          </h1>
        
        </div>
      </section>
      
      <div className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Nossa História */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <Card className="card-nature p-6 sm:p-8 md:p-12 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Nossa História
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  O Urubu Ecoparque surgiu do desejo de transformar a Serra da Ibiapaba – CE em um ponto de encontro entre aventura, natureza e contemplação. O local, que abriga a mais alta rampa de voo livre do Norte–Nordeste, tornou-se um dos cenários mais impressionantes da região, a mais de 900 metros de altitude.
                </p>
                <p>
                  Desde o início, o propósito sempre foi claro: valorizar a riqueza natural da serra e oferecer uma experiência inesquecível a quem nos visita. Com trilhas, cachoeiras, área de camping, restaurante e mirantes panorâmicos, cada espaço foi pensado para aproximar visitantes da beleza bruta e preservada da Ibiapaba.
                </p>
                <p>
                  Hoje, o Urubu Ecoparque se consolida como referência em turismo ecológico e de aventura, atraindo visitantes de todo o país que buscam lazer, esportes ao ar livre, liberdade e um contato genuíno com a natureza.
                </p>
              </div>
            </Card>
          </div>

          {/* Valores */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
                Nossos Valores
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Os princípios que guiam cada experiência no Urubu Ecoparque
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: Heart,
                  title: "Amor pela Natureza",
                  description: "Preservação e respeito ao meio ambiente em primeiro lugar",
                  color: "from-primary to-accent"
                },
                {
                  icon: Target,
                  title: "Compromisso",
                  description: "Dedicação em oferecer experiências memoráveis",
                  color: "from-secondary to-nature-brown"
                },
                {
                  icon: Award,
                  title: "Excelência",
                  description: "Qualidade e segurança em todos os nossos serviços",
                  color: "from-accent to-nature-leaf"
                },
                {
                  icon: Users,
                  title: "Família",
                  description: "Ambiente acolhedor para todas as idades",
                  color: "from-nature-leaf to-primary"
                }
              ].map((valor, index) => (
                <Card
                  key={index}
                  className="card-nature p-5 sm:p-6 text-center hover-lift transition-all duration-300"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br ${valor.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <valor.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
                    {valor.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {valor.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Números */}
          <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
            <NatureParticles className="opacity-15" />
            <div className="relative z-10 text-center text-white mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4 drop-shadow-lg">
                Urubu Ecoparque em Números
              </h2>
              <p className="text-lg sm:text-xl text-white/90">
                Mais de uma década criando memórias
              </p>
            </div>
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-8">
              {[
                { number: "50+", label: "Hectares Preservados" },
                { number: "10K+", label: "Visitantes/Ano" },
                { number: "500+", label: "Festas Realizadas" },
                { number: "100%", label: "Satisfação" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-2 drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-white/90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Localização */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <Card className="card-nature p-6 sm:p-8 md:p-12 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-nature-brown to-nature-earth rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Localização
                </h2>
              </div>
              <div className="space-y-3 text-muted-foreground text-base sm:text-lg">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong className="text-foreground">Sitio Correios - Zona Rural</strong><br />Guaraciaba do Norte - CE</span>
                </p>
                <p className="text-sm sm:text-base">
                  A mais de 900 metros de altitude, na majestosa Serra da Ibiapaba, oferecendo uma das vistas mais impressionantes do Norte-Nordeste.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sobre;
