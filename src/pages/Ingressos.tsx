import { Check, Ticket, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FallingLeaves, NatureParticles } from "@/components/NatureEffects";
import { toast } from "sonner";
import heroImage from "@/assets/hero-ecopark.jpg";

const Ingressos = () => {
  const handleBuyTicket = (tipo: string) => {
    toast.success(`Entrada ${tipo} adicionada ao carrinho!`);
  };

  const tickets = [
    {
      name: "Entrada Individual",
      price: "R$ 50",
      description: "Perfeito para um dia de aventura",
      features: [
        "Acesso a todas as trilhas",
        "Uso de áreas de lazer",
        "Estacionamento incluído",
        "Válido por 1 dia"
      ],
      color: "from-primary to-accent",
      popular: false
    },
    {
      name: "Entrada Família",
      price: "R$ 150",
      description: "Para até 4 pessoas",
      features: [
        "Tudo da entrada individual",
        "Desconto de 25%",
        "Kit lanche incluído",
        "Foto lembrança grátis",
        "Prioridade na entrada"
      ],
      color: "from-secondary to-nature-brown",
      popular: true
    },
    {
      name: "Entrada VIP",
      price: "R$ 120",
      description: "Experiência completa",
      features: [
        "Tudo da entrada individual",
        "Guia especializado",
        "Almoço incluso",
        "Acesso a áreas exclusivas",
        "Kit aventura"
      ],
      color: "from-accent to-nature-leaf",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
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
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-accent rounded-2xl mb-3 sm:mb-4 md:mb-6 shadow-2xl border-2 border-white/20">
            <Ticket className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}>
            Entradas
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto px-2 font-medium" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 1px 5px rgba(0,0,0,0.6)' }}>
            Escolha a entrada perfeita para sua aventura no Urubu Ecoparque
          </p>
        </div>
      </section>
      
      <div className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Tickets Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {tickets.map((ticket, index) => (
              <Card
                key={index}
                className={`relative card-nature p-6 sm:p-8 hover:shadow-xl transition-all duration-300 ${
                  ticket.popular ? 'border-4 border-primary shadow-2xl' : ''
                }`}
              >
                {ticket.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-gradient-to-br ${ticket.color} rounded-2xl flex items-center justify-center shadow-lg mx-auto`}>
                  <Ticket className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2 text-center">
                  {ticket.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 text-center">
                  {ticket.description}
                </p>
                
                <div className="mb-4 sm:mb-6 text-center">
                  <span className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
                    {ticket.price}
                  </span>
                  <span className="text-sm sm:text-base text-muted-foreground">/pessoa</span>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {ticket.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleBuyTicket(ticket.name)}
                  className={`w-full font-bold shadow-lg transition-all ${
                    ticket.popular
                      ? 'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90'
                      : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                  }`}
                  size="lg"
                >
                  Comprar Agora
                </Button>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <Card className="card-nature p-6 sm:p-8 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Informações Importantes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-bold text-foreground mb-2">Horários</h3>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Fins de semana: 8h às 19h</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Crianças</h3>
                <p>Crianças até 5 anos: Gratuito</p>
                <p>Crianças de 6 a 12 anos: 50% de desconto</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Grupos</h3>
                <p>Grupos acima de 10 pessoas têm desconto especial</p>
                <p>Entre em contato para orçamento</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Cancelamento</h3>
                <p>Reembolso total até 48h antes</p>
                <p>50% de reembolso até 24h antes</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ingressos;
