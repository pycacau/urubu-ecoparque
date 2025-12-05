import { Check, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

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
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6 shadow-lg">
              <Ticket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Entradas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha a entrada perfeita para sua aventura no Urubu Ecoparque
            </p>
          </div>

          {/* Tickets Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tickets.map((ticket, index) => (
              <Card
                key={index}
                className={`relative p-8 hover-lift transition-all ${
                  ticket.popular ? 'border-4 border-primary shadow-2xl scale-105' : 'border-2'
                }`}
              >
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${ticket.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <Ticket className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {ticket.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {ticket.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-heading font-bold text-foreground">
                    {ticket.price}
                  </span>
                  <span className="text-muted-foreground">/pessoa</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {ticket.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleBuyTicket(ticket.name)}
                  className={`w-full font-bold shadow-lg ${
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
          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
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
