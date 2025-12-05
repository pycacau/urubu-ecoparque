import { Calendar, User, ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import activitiesImage from "@/assets/activities.jpg";
import entranceImage from "@/assets/entrance.jpg";
import partyImage from "@/assets/party-venue.jpg";

const Blog = () => {
  const posts = [
    {
      title: "5 Trilhas Imperdíveis no Urubu Ecoparque",
      excerpt: "Descubra as melhores trilhas para explorar a natureza e se conectar com o meio ambiente. De iniciantes a experientes, temos opções para todos.",
      image: activitiesImage,
      date: "15 de Março, 2024",
      author: "Equipe Urubu",
      category: "Aventura"
    },
    {
      title: "Como Organizar a Festa de Aniversário Perfeita",
      excerpt: "Dicas essenciais para planejar uma festa inesquecível em meio à natureza. Saiba como aproveitar ao máximo nossos espaços.",
      image: partyImage,
      date: "10 de Março, 2024",
      author: "Marina Silva",
      category: "Eventos"
    },
    {
      title: "Biodiversidade: Conheça as Espécies do Parque",
      excerpt: "Uma jornada pela fauna e flora do Urubu Ecoparque. Descubra as espécies nativas que chamam nosso parque de lar.",
      image: entranceImage,
      date: "5 de Março, 2024",
      author: "Dr. João Santos",
      category: "Natureza"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <Instagram className="w-8 h-8 text-primary" />
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
                Atualizações do Instagram
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acompanhe nossas últimas postagens do @urubuecoparque
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Tudo que postamos no Instagram aparece automaticamente aqui!
            </p>
          </div>

          {/* Instagram Feed */}
          <div className="mb-16">
            <InstagramFeed 
              username="urubuecoparque"
              accessToken={import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || undefined}
              limit={12}
            />
          </div>

          {/* Separador */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground">Posts em Destaque</span>
            </div>
          </div>

          {/* Featured Post */}
          <Card className="mb-16 overflow-hidden hover-lift animate-scale-in">
            <div className="grid md:grid-cols-2">
              <div className="relative h-80 md:h-auto">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {posts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{posts[0].author}</span>
                  </div>
                </div>
                <Button className="w-fit bg-white text-primary hover:bg-white/95 font-bold shadow-lg border-2 border-primary">
                  Ler Mais
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover-lift group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-white text-primary border-2 border-primary group-hover:bg-primary group-hover:text-white transition-colors font-bold">
                    Ler Mais
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
