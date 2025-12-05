import { Calendar, User, ArrowRight, Instagram, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FallingLeaves, NatureParticles } from "@/components/NatureEffects";
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${activitiesImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <NatureParticles className="opacity-20" />
        <FallingLeaves className="opacity-15" />
        <div className="relative z-10 container mx-auto px-4 text-center" style={{ marginTop: '80px' }}>
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-accent to-nature-leaf rounded-2xl mb-3 sm:mb-4 md:mb-6 shadow-2xl border-2 border-white/20">
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}>
            Blog & Atualizações
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto px-2 font-medium" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 1px 5px rgba(0,0,0,0.6)' }}>
            Acompanhe nossas últimas postagens e novidades
          </p>
        </div>
      </section>
      
      <div className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Instagram Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
              <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                @urubuecoparque
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Acompanhe nossas últimas postagens do Instagram
            </p>
          </div>

          {/* Instagram Feed */}
          <div className="mb-12 sm:mb-16">
            <InstagramFeed 
              username="urubuecoparque"
              accessToken={import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || undefined}
              limit={12}
            />
          </div>

          {/* Separador */}
          <div className="relative my-12 sm:my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-primary/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 sm:px-6 text-sm sm:text-base text-foreground font-semibold">Posts em Destaque</span>
            </div>
          </div>

          {/* Featured Post */}
          <Card className="card-nature mb-12 sm:mb-16 overflow-hidden hover:shadow-xl transition-all duration-300">
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
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="card-nature overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
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
