import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, MessageCircle, ExternalLink, Loader2, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
  thumbnail_url?: string;
}

interface InstagramFeedProps {
  username?: string;
  accessToken?: string;
  limit?: number;
}

const InstagramFeed = ({ 
  username = "urubuecoparque",
  accessToken,
  limit = 12 
}: InstagramFeedProps) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      // Verificar se há token configurado
      const token = accessToken || import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
      
      if (!token) {
        setError(
          "Token do Instagram não configurado. " +
          "Adicione VITE_INSTAGRAM_ACCESS_TOKEN no arquivo .env. " +
          "Consulte INSTAGRAM_SETUP.md para instruções."
        );
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Método 1: Tentar Instagram Basic Display API
        try {
          // Buscar user ID primeiro
          const userResponse = await fetch(
            `https://graph.instagram.com/me?fields=id,username&access_token=${token}`
          );

          if (!userResponse.ok) {
            const errorData = await userResponse.json();
            throw new Error(errorData.error?.message || "Erro ao buscar dados do usuário");
          }

          const userData = await userResponse.json();

          // Buscar posts
          const postsResponse = await fetch(
            `https://graph.instagram.com/${userData.id}/media?fields=id,media_type,media_url,permalink,caption,timestamp,like_count,comments_count,thumbnail_url&limit=${limit}&access_token=${token}`
          );

          if (!postsResponse.ok) {
            const errorData = await postsResponse.json();
            throw new Error(errorData.error?.message || "Erro ao buscar posts");
          }

          const data = await postsResponse.json();
          
          if (data.data && data.data.length > 0) {
            setPosts(data.data);
          } else {
            setError("Nenhum post encontrado. Certifique-se de que a conta tem posts públicos.");
          }
        } catch (apiError: any) {
          // Se falhar, tentar método alternativo via Graph API
          console.warn("Tentando método alternativo...", apiError);
          
          // Método alternativo: Buscar via hashtag ou username (requer configuração adicional)
          throw new Error(
            `Erro na API do Instagram: ${apiError.message}. ` +
            `Verifique se o token está correto e não expirou. ` +
            `Consulte INSTAGRAM_SETUP.md para mais informações.`
          );
        }
      } catch (err: any) {
        console.error("Erro ao buscar posts do Instagram:", err);
        setError(err.message || "Não foi possível carregar os posts do Instagram. Verifique o token de acesso.");
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [accessToken, limit]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Hoje";
    if (days === 1) return "Ontem";
    if (days < 7) return `${days} dias atrás`;
    if (days < 30) return `${Math.floor(days / 7)} semanas atrás`;
    return date.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-3 text-muted-foreground">Carregando posts do Instagram...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="max-w-2xl mx-auto">
          <Instagram className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <p className="text-destructive mb-4 font-semibold">{error}</p>
          <div className="bg-muted/50 rounded-lg p-6 text-left">
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Como configurar:</strong>
            </p>
            <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
              <li>Crie um app no Facebook Developers</li>
              <li>Configure o Instagram Basic Display API</li>
              <li>Obtenha um Access Token</li>
              <li>Adicione no arquivo <code className="bg-background px-2 py-1 rounded">.env</code>:<br />
                <code className="bg-background px-2 py-1 rounded block mt-1">VITE_INSTAGRAM_ACCESS_TOKEN=seu_token_aqui</code>
              </li>
            </ol>
            <p className="text-sm text-muted-foreground mt-4">
              📖 Consulte o arquivo <strong>INSTAGRAM_SETUP.md</strong> na raiz do projeto para um guia completo passo a passo.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <Instagram className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <p className="text-muted-foreground">Nenhum post encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="relative aspect-square overflow-hidden bg-muted">
            {post.media_type === "VIDEO" ? (
              <video
                src={post.media_url}
                poster={post.thumbnail_url}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                controls
              />
            ) : (
              <img
                src={post.media_url}
                alt={post.caption || "Post do Instagram"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.like_count || 0}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments_count || 0}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            {post.caption && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                {post.caption.length > 150
                  ? `${post.caption.substring(0, 150)}...`
                  : post.caption}
              </p>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{formatDate(post.timestamp)}</span>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="h-8"
                onClick={() => window.open(post.permalink, "_blank")}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Ver no Instagram
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default InstagramFeed;

