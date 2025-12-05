import { useState } from "react";
import { Calendar, Users, Cake, Music, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FallingLeaves, NatureParticles } from "@/components/NatureEffects";
import { toast } from "sonner";
import partyImage from "@/assets/party-venue.jpg";

const Festas = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    data: "",
    pessoas: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitação enviada! Entraremos em contato em breve.");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      data: "",
      pessoas: "",
      mensagem: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const packages = [
    {
      icon: Cake,
      title: "Pacote Básico",
      price: "R$ 800",
      features: ["Área reservada por 4h", "Mesas e cadeiras", "Churrasqueira", "Até 30 pessoas"]
    },
    {
      icon: Music,
      title: "Pacote Completo",
      price: "R$ 1.500",
      features: ["Área reservada por 6h", "Decoração temática", "Som ambiente", "Até 50 pessoas", "Monitores"]
    },
    {
      icon: Users,
      title: "Pacote Premium",
      price: "R$ 2.500",
      features: ["Área exclusiva por 8h", "Decoração premium", "Som e DJ", "Até 100 pessoas", "Buffet incluso", "Fotógrafo"]
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
            backgroundImage: `url(${partyImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <NatureParticles className="opacity-20" />
        <FallingLeaves className="opacity-15" />
        <div className="relative z-10 container mx-auto px-4 text-center" style={{ marginTop: '80px' }}>
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-secondary to-nature-brown rounded-2xl mb-3 sm:mb-4 md:mb-6 shadow-2xl border-2 border-white/20">
            <PartyPopper className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}>
            Festas & Eventos
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto px-2 font-medium" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 1px 5px rgba(0,0,0,0.6)' }}>
            Celebre momentos especiais em contato com a natureza
          </p>
        </div>
      </section>
      
      <div className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Packages */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
                Nossos Pacotes
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Escolha o pacote ideal para sua celebração
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="card-nature p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-gradient-to-br from-secondary to-nature-brown rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                    <pkg.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2 text-center">
                    {pkg.title}
                  </h3>
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4 sm:mb-6 text-center">
                    {pkg.price}
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm sm:text-base text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <Card className="card-nature p-6 sm:p-8 md:p-12 max-w-3xl mx-auto shadow-xl">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-2 sm:mb-3">
                Agende sua Festa
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Preencha o formulário abaixo e entraremos em contato em breve
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="data">Data Desejada</Label>
                  <Input
                    id="data"
                    name="data"
                    type="date"
                    value={formData.data}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="pessoas">Número de Pessoas</Label>
                <Input
                  id="pessoas"
                  name="pessoas"
                  type="number"
                  value={formData.pessoas}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="mensagem">Mensagem / Pedidos Especiais</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2"
                  placeholder="Conte-nos mais sobre seu evento..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-secondary to-nature-brown text-white hover:opacity-90 font-bold shadow-xl"
              >
                Solicitar Orçamento
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Festas;
