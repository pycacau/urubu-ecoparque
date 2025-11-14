import { useState } from "react";
import { Calendar, Users, Cake, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-nature-brown rounded-full mb-6 shadow-lg">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Festas & Eventos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebre momentos especiais em contato com a natureza
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 animate-scale-in">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={partyImage}
                alt="Área de Festas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h2 className="text-3xl font-heading font-bold mb-2">
                    Espaços Perfeitos para sua Celebração
                  </h2>
                  <p className="text-lg text-white/90">
                    Aniversários, casamentos, confraternizações e muito mais
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Packages */}
          <div className="mb-20">
            <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-12">
              Nossos Pacotes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="p-8 hover-lift border-2 hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-secondary to-nature-brown rounded-2xl flex items-center justify-center shadow-lg">
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-4xl font-heading font-bold text-primary mb-6">
                    {pkg.price}
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <Card className="p-8 md:p-12 max-w-3xl mx-auto bg-gradient-to-br from-card to-muted/30">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
              Agende sua Festa
            </h2>
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
                className="w-full bg-gradient-to-r from-secondary to-nature-brown hover:opacity-90"
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
