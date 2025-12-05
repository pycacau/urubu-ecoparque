import { ShoppingBag, MapPin, Phone, Utensils, Coffee, Wine, IceCream } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { FallingLeaves } from "@/components/NatureEffects";
import heroImage from "@/assets/hero-ecopark.jpg";
import activitiesImage from "@/assets/activities.jpg";
import casalImage from "@/assets/party-venue.jpg";
import partyImage from "@/assets/comemoração.jpg";
import entranceImage from "@/assets/entrance.jpg";
// @ts-ignore
import urubudegaImage from "@/assets/urubudega.PNG";

const Urubudega = () => {
  const galleryImages = [
    urubudegaImage,
    heroImage,
    activitiesImage,
    casalImage,
    partyImage,
    entranceImage,
  ];

  const menuSections = [
    {
      title: "ENTRADAS",
      icon: Utensils,
      items: [
        { name: "Batata Frita 20", price: "R$ 20,00" },
        { name: "Batata Frita 30", description: "com Cheddar e Bacon", price: "R$ 30,00" },
        { name: "Batata Frita 40", description: "Gratinada com Calabresa Acebolada", price: "R$ 40,00" },
        { name: "Macaxeira Frita 20", price: "R$ 20,00" },
        { name: "Pastel", description: "Costela, Queijo ou Carne de Sol", price: "R$ 25,00" },
        { name: "Bolinho de Carne de Sol 25", price: "R$ 25,00" },
        { name: "Bolinho de Bacalhau 30", price: "R$ 30,00" },
        { name: "Queijo à Milanesa 25", price: "R$ 25,00" },
        { name: "Isca de Peixe 45", price: "R$ 45,00" },
        { name: "Frango à Passarinho 30", price: "R$ 30,00" },
        { name: "Camarão Alho e Óleo 40", price: "R$ 40,00" },
        { name: "Camarão Empanado 45", price: "R$ 45,00" },
        { name: "Tábua Sertaneja", description: "Carne de Sol em cubos, macaxeira frita e queijo à milanesa", price: "R$ 90,00" },
        { name: "Tábua Sol e Mar", description: "Carne de sol em cubos, Isca de Peixe, Camarão empanado, Queijo à milanesa", price: "R$ 130,00" },
        { name: "Tábua Express", description: "Bolinho de Bacalhau, Pastel de Carne de Sol, Batata Frita, Trinchado de Filé Mignon", price: "R$ 130,00" },
        { name: "Tábua Sugestão do Chefe", price: "R$ 100,00" },
      ],
    },
    {
      title: "PRATO REGIONAL",
      icon: Utensils,
      items: [
        { name: "Galinha Caipira", description: "SOB ENCOMENDA - Galinha Caipira, pirão, arroz branco, espaguete, macaxeira frita e salada", price: "R$ 160,00" },
        { name: "Tilápia Frita", description: "Tilápia 1kg, Baião, macaxeira frita e farofa", price: "R$ 90,00" },
      ],
      guarnicoes: [
        { name: "Arroz Branco", price: "R$ 12,00" },
        { name: "Arroz à Grega", price: "R$ 15,00" },
        { name: "Arroz de Brócolis", price: "R$ 18,00" },
        { name: "Arroz Maluco", price: "R$ 15,00" },
        { name: "Arroz Piamontese", price: "R$ 18,00" },
        { name: "Baião de Dois", price: "R$ 18,00" },
        { name: "Feijão", price: "R$ 12,00" },
        { name: "Purê de Macaxeira", price: "R$ 12,00" },
      ],
    },
    {
      title: "BOVINOS - SERVE 2 PESSOAS",
      icon: Utensils,
      items: [
        { name: "Contra Filé na Manteiga de Ervas", description: "Contra Filé 400g, arroz à grega e batata frita", price: "R$ 115,00" },
        { name: "Medalhão de Filé Mignon com Bacon", description: "Filé Mignon 400g, arroz piamontese e batata frita", price: "R$ 125,00" },
        { name: "Tornedor de Filé Mignon", description: "Filé de mignon 400g ao molho de Gorgonzola, batata rústica, arroz recheado na redução de vinho", price: "R$ 125,00" },
        { name: "Bife de Chorizo à Gaucha", description: "(Estancia 92) Bife de Chorizo 400g, linguiça de pernil, queijo, arroz branco, farofa de ovo e batata frita", price: "R$ 125,00" },
        { name: "Maminha completa", description: "Maminha 400g, arroz carreteiro, batata frita", price: "R$ 110,00" },
        { name: "Picanha À Brasileira", description: "Picanha Australiana 400g, arroz à brasileira, farofa à brasileira e batata Sauté", price: "R$ 150,00" },
        { name: "Carne de Sol Acebolada", description: "Carne de sol em cubos 400g, baião, macaxeira frita e farofa", price: "R$ 105,00" },
        { name: "Carne de Sol Cearense", description: "Carne de sol desfiada 400g, arroz e queijo coalho no molho branco", price: "R$ 95,00" },
        { name: "Filé à Parmegiana", description: "Filé 400g, arroz branco, espaguete e purê de macaxeira", price: "R$ 110,00" },
        { name: "Filé de Frango à Parmegiana", description: "Peito de Frango 400g, arroz branco, espaguete e purê de macaxeira", price: "R$ 85,00" },
        { name: "Picanha Suína", description: "Picanha suína 400g, arroz de brócolis, farofa panko e batata rosti", price: "R$ 95,00" },
      ],
    },
    {
      title: "DO MAR - SERVE 2 PESSOAS",
      icon: Utensils,
      items: [
        { name: "Filé de Tilápia ao Molho de Coco", description: "Filé de tilápia 500g e arroz de castanha", price: "R$ 90,00" },
        { name: "Filé de Tilápia Fiorentina", description: "Filé de tilápia gratinado, espinafre, purê, arroz branco", price: "R$ 120,00" },
        { name: "Salmão ao Molho de Camarão", description: "Salmão 400g, arroz de brócolis e batata frita", price: "R$ 140,00" },
        { name: "Salmão ao Molho de Alcaparras", description: "Salmão 400g, arroz branco e batata sauté", price: "R$ 135,00" },
        { name: "Camarão Internacional", description: "Camarão 350g, arroz branco ao molho branco, presunto, ervilha fresca e batata palha", price: "R$ 110,00" },
        { name: "Fettuccini com Camarão", description: "Fettuccini ao molho branco com camarão 350g", price: "R$ 95,00" },
      ],
    },
    {
      title: "SALADAS",
      icon: Utensils,
      items: [
        { name: "Salada Caesar com Frango", description: "Alface americana, queijo parmesão, frango desfiado, croutons e molho caesar", price: "R$ 35,00" },
        { name: "Salada El Ranchito", description: "Mix de alface, mix de queijos, repolho roxo, bacon, croutons e molho barbecue ranch", price: "R$ 30,00" },
        { name: "Salada Salpicante", description: "Peito de frango desfiado, maionese, cenoura ralada, milho, passas, cebola e batata palha", price: "R$ 35,00" },
        { name: "Salada de legumes", description: "Legumes salteados", price: "R$ 30,00" },
      ],
    },
    {
      title: "SOBREMESAS",
      icon: IceCream,
      items: [
        { name: "Gelato Artesanal de Rapadura", price: "R$ 25,00" },
        { name: "Cheesecake", price: "R$ 25,00" },
        { name: "Brownie com Sorvete", price: "R$ 30,00" },
        { name: "Torta Mousse de Chocolate", price: "R$ 25,00" },
        { name: "Gelato de Doce de Leite", price: "R$ 25,00" },
        { name: "Gelato de Pistache com amendoim", price: "R$ 25,00" },
        { name: "Torta de Limão", price: "R$ 25,00" },
      ],
    },
    {
      title: "BEBIDAS",
      icon: Coffee,
      items: [
        { name: "Água mineral sem gás", price: "R$ 4,50" },
        { name: "Água mineral com gás", price: "R$ 5,00" },
        { name: "Refrigerante lata 350ml", price: "R$ 7,00" },
        { name: "Schweppes Citrus ou Tônica 350ml", price: "R$ 8,00" },
        { name: "Coco verde", price: "R$ 6,00" },
        { name: "Energético", price: "R$ 12,00" },
        { name: "Suco copo", description: "Graviola | Cajá | Maracujá", price: "R$ 7,00" },
        { name: "Sucos da Estação", description: "(Consultar o Garçom)", price: "Consultar" },
      ],
    },
    {
      title: "CERVEJAS",
      icon: Wine,
      items: [
        { name: "Skol 300ml", price: "R$ 6,00" },
        { name: "Bohemia 300ml", price: "R$ 6,00" },
        { name: "Budweiser 355ml", price: "R$ 12,00" },
        { name: "Stella Artois 275ml", price: "R$ 12,00" },
        { name: "Heineken 355ml", price: "R$ 14,00" },
        { name: "Corona 355ml", price: "R$ 15,00" },
        { name: "Cervejas Artesanais 600ml", price: "R$ 25,00" },
        { name: "Outras", description: "Consultar Garçom", price: "Consultar" },
      ],
    },
    {
      title: "CHOPP",
      icon: Wine,
      items: [
        { name: "Lager 400ml", price: "R$ 12,00" },
        { name: "Apa 400ml", price: "R$ 15,00" },
        { name: "Ipa 400ml", price: "R$ 18,00" },
      ],
    },
    {
      title: "WHISKY",
      icon: Wine,
      items: [
        { name: "Black White", price: "R$ 10,00" },
        { name: "Red Label", price: "R$ 12,00" },
        { name: "Jack Daniels", price: "R$ 12,00" },
        { name: "Old Parr", price: "R$ 15,00" },
        { name: "Outras", description: "Consultar Garçom", price: "Consultar" },
      ],
    },
    {
      title: "CAIPIS",
      icon: Wine,
      items: [
        { name: "Limão", price: "R$ 16,00" },
        { name: "Morango", price: "R$ 22,00" },
        { name: "Kiwi", price: "R$ 22,00" },
        { name: "Maracujá", price: "R$ 22,00" },
        { name: "Maracujá e limão", price: "R$ 22,00" },
        { name: "Limão, Kiwi e Morango", price: "R$ 22,00" },
        { name: "Morango e Kiwi", price: "R$ 22,00" },
        { name: "Caipiroska Smirnoff - Limão", price: "R$ 18,00" },
        { name: "Caipiroska Smirnoff - Morango", price: "R$ 24,00" },
        { name: "Caipiroska Smirnoff - Kiwi", price: "R$ 24,00" },
        { name: "Caipiroska Smirnoff - Maracujá", price: "R$ 24,00" },
        { name: "Caipiroska Smirnoff - Maracujá e limão", price: "R$ 24,00" },
        { name: "Caipiroska Smirnoff - Limão, Kiwi e Morango", price: "R$ 24,00" },
        { name: "Caipiroska Smirnoff - Morango e Kiwi", price: "R$ 24,00" },
        { name: "Caipirosca Absolut - Limão", price: "R$ 22,00" },
        { name: "Caipirosca Absolut - Morango", price: "R$ 26,00" },
        { name: "Caipirosca Absolut - Kiwi", price: "R$ 26,00" },
        { name: "Caipirosca Absolut - Maracujá", price: "R$ 26,00" },
        { name: "Caipirosca Absolut - Maracujá e limão", price: "R$ 26,00" },
        { name: "Caipirosca Absolut - Limão, Kiwi e Morango", price: "R$ 26,00" },
        { name: "Caipirosca Absolut - Morango e Kiwi", price: "R$ 26,00" },
      ],
    },
    {
      title: "DESTILADOS",
      icon: Wine,
      items: [
        { name: "Cachaça Ypioca Empalhada", price: "R$ 6,00" },
        { name: "Cachaça Ypioca", price: "R$ 4,00" },
        { name: "Cachaça Envelhecida Tonel", price: "R$ 7,00" },
        { name: "Campari", price: "R$ 10,00" },
        { name: "Vodka Smirnoff", price: "R$ 9,00" },
        { name: "Vodka Absolut", price: "R$ 15,00" },
        { name: "Tequila Jose Cuervo", price: "R$ 15,00" },
      ],
    },
    {
      title: "DRINKS",
      icon: Wine,
      items: [
        { name: "Dry Martini", description: "Gin Vermute seco e Azeitona", price: "R$ 22,00" },
        { name: "Lagoa Azul", description: "Vodka, Curaçau Blue, Limão e Soda", price: "R$ 20,00" },
        { name: "Margarita", description: "Tequila, Coincau e Limão", price: "R$ 25,00" },
        { name: "Margarita Blue", description: "Tequila, Roiueau, Curaçau Blue e Limão", price: "R$ 25,00" },
        { name: "Mojito", description: "Rum, Limão, Hortelã e água com gás", price: "R$ 20,00" },
        { name: "Negroni", description: "Campari, gim e vermute tinto", price: "R$ 22,00" },
        { name: "Sex on the Beach", description: "Vodka, licor de pêssego, suco de laranja e groselha", price: "R$ 20,00" },
        { name: "Gin Tradicional", description: "com água tônica, limão siciliano", price: "R$ 20,00" },
        { name: "Gin Morango", description: "morango, especiarias e canela", price: "R$ 27,00" },
        { name: "Gin kiwi", description: "Kiwi, especiarias e canela", price: "R$ 27,00" },
        { name: "Gin Tropical", description: "Maracujá, Limão siciliano, especiarias e canela", price: "R$ 27,00" },
        { name: "Gin Tropical Mix", description: "Morango, Kiwi, Limão Siciliano, especiarias e canela", price: "R$ 27,00" },
        { name: "Moscow Mule", description: "Vodka + limão + espuma de gengibre", price: "R$ 29,00" },
        { name: "Cozumel", description: "Corona, limão e sal", price: "R$ 20,00" },
        { name: "Alexander", description: "Canela em pó, conhaque, licor de cacau, leite condensado, noz-moscada", price: "R$ 25,00" },
        { name: "Piña Colada", description: "Rum, leite de coco, suco de abacaxi", price: "R$ 25,00" },
        { name: "Cosmopolitan", price: "R$ 25,00" },
      ],
    },
    {
      title: "MENU NOITE",
      icon: Utensils,
      subSections: [
        {
          title: "RISOTOS",
          items: [
            { name: "Risoto de Camarão com Alho Poró", price: "R$ 72,00" },
            { name: "Risoto de Arroz Negro e Polvo", price: "R$ 80,00" },
          ],
        },
        {
          title: "SUGESTÃO DO CHEFE",
          items: [
            { name: "Sugestão do Chefe", price: "R$ 69,00" },
          ],
        },
        {
          title: "MASSAS",
          items: [
            { name: "Fettuccine com Frutos do Mar", price: "R$ 80,00" },
            { name: "Fettuccine de Mignon", price: "R$ 70,00" },
            { name: "Fettuccine ao molho quatro queijos", price: "R$ 80,00" },
            { name: "Espaguete à Carbonara", price: "R$ 50,00" },
            { name: "Gnocchi com Mignon ao Funghi", price: "R$ 72,00" },
          ],
        },
        {
          title: "BOVINOS",
          items: [
            { name: "Mignon Recheado com Queijo", description: "Risoto de parmesão e batata rústica", price: "R$ 70,00" },
            { name: "Chorizo Trinchado", description: "com redução de vinho", price: "R$ 80,00" },
          ],
        },
        {
          title: "DO MAR",
          items: [
            { name: "Filé de tilápia ao molho de camarão", description: "com Risoto de limão Siciliano", price: "R$ 65,00" },
            { name: "Salmão grelhado", description: "ao molho de alcaparras", price: "R$ 79,00" },
            { name: "Salmão molho de camarão", price: "R$ 79,00" },
            { name: "Salmão grelhado com Risoto", description: "de arroz negro com molho de camarão", price: "R$ 85,00" },
            { name: "Polvo grelhado", description: "com legumes caramelizado, arroz de castanha e açafrão", price: "R$ 85,00" },
          ],
        },
        {
          title: "KIDS",
          items: [
            { name: "Filé mignon", price: "R$ 30,00" },
            { name: "Filé de Frango", price: "R$ 30,00" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <FallingLeaves className="opacity-20" />
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-nature-brown to-nature-earth rounded-2xl mb-6 shadow-xl relative z-10">
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 relative z-10">
              Urubudega
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto relative z-10">
              Cardápio completo com pratos regionais, bebidas e muito mais!
            </p>
          </div>

          {/* Menu Sections */}
          <div className="space-y-12 mb-16">
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <section.icon className="w-8 h-8 text-nature-brown" />
                  <h2 className="text-3xl font-heading font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                
                {section.subSections ? (
                  <div className="space-y-8">
                    {section.subSections.map((subSection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                          {subSection.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {subSection.items.map((item, itemIndex) => (
                            <Card key={itemIndex} className="card-nature">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <div className="flex-1">
                                    <h4 className="font-bold text-foreground">{item.name}</h4>
                                    {item.description && (
                                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                    )}
                                  </div>
                                  <span className="text-lg font-bold text-primary ml-4">{item.price}</span>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="card-nature">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h4 className="font-bold text-foreground">{item.name}</h4>
                              {item.description && (
                                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                              )}
                            </div>
                            <span className="text-lg font-bold text-primary ml-4">{item.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    {section.guarnicoes && (
                      <div className="md:col-span-2 lg:col-span-3 mt-4">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-4">GUARNIÇÕES</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {section.guarnicoes.map((guarnicao, gIndex) => (
                            <Card key={gIndex} className="card-nature">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <span className="font-medium text-foreground">{guarnicao.name}</span>
                                  <span className="font-bold text-primary">{guarnicao.price}</span>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <ImageGallery 
              images={galleryImages}
              title="Galeria de Fotos"
              columns={3}
            />
          </div>

          {/* Info Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-nature-brown/10 to-nature-earth/10 border-2 border-nature-brown/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Horário de Funcionamento
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Localizada na entrada do parque
                  </p>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado e Domingo: 8h às 19h</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Entre em Contato
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    (11) 98765-4321
                  </p>
                  <p>Para encomendas especiais ou produtos em maior quantidade, entre em contato conosco!</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Urubudega;
