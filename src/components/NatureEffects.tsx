import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Componente de folhas caindo
export const FallingLeaves = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const leaves: Array<{
      element: HTMLDivElement;
      x: number;
      y: number;
      rotation: number;
      rotationSpeed: number;
      fallSpeed: number;
      size: number;
    }> = [];

    // Criar folhas
    for (let i = 0; i < 15; i++) {
      const leaf = document.createElement("div");
      const size = Math.random() * 20 + 15;
      leaf.style.width = `${size}px`;
      leaf.style.height = `${size}px`;
      leaf.style.position = "absolute";
      leaf.style.opacity = "0.6";
      leaf.style.pointerEvents = "none";
      leaf.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8 2 5 5 5 9C5 13 8 16 12 16C16 16 19 13 19 9C19 5 16 2 12 2Z" 
                fill="hsl(142, 76%, 36%)" 
                opacity="0.7"/>
          <path d="M12 4C9 4 7 6 7 9C7 12 9 14 12 14C15 14 17 12 17 9C17 6 15 4 12 4Z" 
                fill="hsl(85, 60%, 45%)" 
                opacity="0.5"/>
        </svg>
      `;
      container.appendChild(leaf);

      leaves.push({
        element: leaf,
        x: Math.random() * 100,
        y: -10 - Math.random() * 20,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        fallSpeed: Math.random() * 0.5 + 0.3,
        size,
      });
    }

    let animationId: number;
    const animate = () => {
      leaves.forEach((leaf) => {
        leaf.y += leaf.fallSpeed;
        leaf.rotation += leaf.rotationSpeed;
        leaf.x += Math.sin(leaf.y * 0.01) * 0.3;

        if (leaf.y > 100) {
          leaf.y = -10;
          leaf.x = Math.random() * 100;
        }

        leaf.element.style.left = `${leaf.x}%`;
        leaf.element.style.top = `${leaf.y}%`;
        leaf.element.style.transform = `rotate(${leaf.rotation}deg)`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      leaves.forEach((leaf) => leaf.element.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
    />
  );
};

// Componente de partículas de luz natural
export const NatureParticles = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = [
      "rgba(34, 197, 94, 0.3)", // Verde
      "rgba(133, 224, 133, 0.2)", // Verde claro
      "rgba(250, 204, 21, 0.2)", // Amarelo (luz do sol)
    ];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace("0.3", particle.opacity.toString());
        ctx.fill();

        // Conectar partículas próximas
        particles.forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = particle.color.replace("0.3", (0.1 * (1 - distance / 100)).toString());
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    />
  );
};

// Componente de ondas de água suaves
export const WaterWaves = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawWave = (offset: number, amplitude: number, frequency: number, color: string) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x += 2) {
        const y =
          canvas.height / 2 +
          amplitude * Math.sin((x * frequency) / canvas.width + timeRef.current + offset);
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 0.01;

      drawWave(0, canvas.height * 0.1, 2, "rgba(34, 197, 94, 0.15)");
      drawWave(Math.PI / 2, canvas.height * 0.08, 3, "rgba(133, 224, 133, 0.12)");
      drawWave(Math.PI, canvas.height * 0.06, 4, "rgba(34, 197, 94, 0.1)");

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    />
  );
};

