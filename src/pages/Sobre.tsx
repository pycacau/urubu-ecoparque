import { Heart, Target, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Sobre o Urubu Ecoparque
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um sonho de preservação da natureza que se tornou realidade, oferecendo experiências únicas para toda a família
            </p>
          </div>

          {/* Nossa História */}
          <div className="mb-20 animate-slide-up">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/30">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
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
          <div className="mb-20">
            <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-12">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="p-6 text-center hover-lift border-2 hover:border-primary/50 transition-all"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${valor.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <valor.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {valor.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {valor.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Números */}
          <div className="py-16 bg-gradient-to-br from-primary via-accent to-nature-leaf rounded-3xl animate-scale-in">
            <div className="text-center text-white mb-8">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Urubu Ecoparque em Números
              </h2>
              <p className="text-xl text-white/90">
                Mais de uma década criando memórias
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 px-8">
              {[
                { number: "50+", label: "Hectares Preservados" },
                { number: "10K+", label: "Visitantes/Ano" },
                { number: "500+", label: "Festas Realizadas" },
                { number: "100%", label: "Satisfação" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-heading font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-white/90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sobre;
