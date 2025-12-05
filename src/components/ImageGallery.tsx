import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  title?: string;
  columns?: 2 | 3 | 4;
}

const ImageGallery = ({ images, title, columns = 3 }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  // Carrossel automático
  useEffect(() => {
    if (!isVisible || images.length === 0) return;

    const animate = () => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.scrollWidth;
        const containerWidth = carouselRef.current.clientWidth;
        const maxScroll = totalWidth - containerWidth;

        if (maxScroll > 0) {
          const currentScroll = carouselRef.current.scrollLeft;
          let newScroll = currentScroll + 0.5; // Velocidade lenta (0.5px por frame)

          // Se chegou ao fim, volta ao início suavemente
          if (newScroll >= maxScroll) {
            newScroll = 0;
          }

          carouselRef.current.scrollLeft = newScroll;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, images.length]);

  const nextImage = useCallback(() => {
    if (selectedImage !== null && images.length > 0) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  }, [selectedImage, images.length]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null && images.length > 0) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  }, [selectedImage, images.length]);

  useEffect(() => {
    if (selectedImage === null || images.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextImage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevImage();
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, images.length, nextImage, prevImage]);

  return (
    <>
      <section className="py-20 bg-background overflow-hidden" ref={galleryRef}>
        <div className="container mx-auto px-4">
          {title && (
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                {title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Confira momentos especiais capturados no Urubu Ecoparque
              </p>
            </div>
          )}

          {images.length > 0 ? (
            <div className="relative">
              {/* Carrossel horizontal automático */}
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-hidden scroll-smooth carousel-container"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {/* Duplicar imagens para loop infinito */}
                {[...images, ...images, ...images].map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 group relative overflow-hidden rounded-xl cursor-pointer card-hover touch-feedback"
                    onClick={() => {
                      // Encontrar o índice real da imagem
                      const realIndex = index % images.length;
                      setSelectedImage(realIndex);
                    }}
                    style={{ width: '400px', height: '400px' }}
                  >
                    <img
                      src={image}
                      alt={`Imagem ${(index % images.length) + 1} do Urubu Ecoparque`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-medium text-sm sm:text-base">Ver em tamanho maior</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Estilo para esconder scrollbar */}
              <style>{`
                .carousel-container::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </div>
          ) : (
            <div className={cn(
              "grid grid-cols-1 gap-4",
              isVisible && "animate-on-scroll visible"
            )}>
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="image-placeholder animate-pulse-slow transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2 opacity-30">📷</div>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Espaço reservado para imagem
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal de imagem ampliada */}
      {selectedImage !== null && images.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10 touch-feedback p-2"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 sm:left-4 text-white hover:text-primary transition-colors z-10 touch-feedback p-2 hidden md:block"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={40} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 sm:right-4 text-white hover:text-primary transition-colors z-10 touch-feedback p-2 hidden md:block"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}

          <div
            className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage]}
              alt={`Imagem ${selectedImage + 1} ampliada`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Indicador de imagem no mobile */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 md:hidden">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all touch-feedback",
                    index === selectedImage
                      ? "bg-primary w-8"
                      : "bg-white/50 w-2"
                  )}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ImageGallery;
