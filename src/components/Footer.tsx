import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Leaf } from "lucide-react";
import logoImage from "@/assets/favicon.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <img
                  src={logoImage}
                  alt="Urubu Ecoparque Logo"
                  className="w-full h-full object-contain drop-shadow-sm"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full items-center justify-center hidden"
                  style={{ display: 'none' }}
                >
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </div>
              {/* Texto da logo - opcional, pode ser removido se a logo já tiver texto */}
              <div>
                <span className="text-xl font-heading font-bold text-foreground">
                  Urubu
                </span>
                <span className="text-xl font-heading font-bold text-primary ml-1">
                  Ecoparque
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Viva experiências únicas em contato com a natureza. Diversão, aventura e memórias inesquecíveis.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/entradas"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Entradas
                </Link>
              </li>
              <li>
                <Link
                  to="/festas"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Festas
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">
              Horário de Funcionamento
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Segunda a Sexta: 8h - 18h</li>
              <li>Sábado: 8h - 19h</li>
              <li>Domingo: 8h - 19h</li>
              <li className="text-primary font-medium pt-2">
                Feriados: Consulte
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Estrada da Natureza, 1000<br />São Paulo, SP</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>(11) 98765-4321</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>contato@urubuecoparque.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Urubu Ecoparque. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
