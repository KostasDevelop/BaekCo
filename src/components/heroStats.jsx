'use client';
import { useEffect, useRef, useState } from 'react';
import '../styles/navbar.styles.css';

function StatCard({ title, number, backgroundImage }) {
  const cardRef = useRef(null); // Referencia al elemento para el Observer
  const [currentNumber, setCurrentNumber] = useState(0); // Estado para animar el número
  const [hasAnimated, setHasAnimated] = useState(false); // Para prevenir reanimaciones

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateNumber();
            setHasAnimated(true); // Solo animar una vez
          }
        });
      },
      { threshold: 0.1 } // Umbral de visibilidad
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);

  // Animar el número
  const animateNumber = () => {
    const target = parseInt(number.replace(/[^\d]/g, ''), 10); // Remover símbolos como "+" o "M²"
    const duration = 2500; // Duración total en milisegundos
    const increment = target / (duration / 16.66); // Incremento para ~60fps

    let current = 0;

    const update = () => {
      current += increment;
      if (current < target) {
        setCurrentNumber(Math.ceil(current));
        requestAnimationFrame(update);
      } else {
        setCurrentNumber(target); // Asegurarse de mostrar el valor final exacto
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <div
      ref={cardRef}
      className="relative h-[500px] rounded-xl overflow-hidden group flex items-center justify-center text-center"
    >
      {/* Fondo con imagen */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
      </div>

      {/* Contenido */}
      <div className="relative flex flex-col items-center justify-center gap-6 text-white px-4">
        {/* Título */}
        <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-medium uppercase tracking-wider">
          {title}
        </h3>

        {/* Número animado */}
        <div className="flex items-center gap-2 md:text-[clamp(4rem,6vw,4rem)]  lg:text-[clamp(6rem,6vw,4rem)] text-[clamp(7rem,6vw,4rem)] font-bold relative">
          {number.startsWith('+') ? (
            <>
              <span className="text-[clamp(1.5rem,5vw,3rem)]">+</span>
              <span>{currentNumber}</span>
            </>
          ) : (
            <span>{currentNumber}</span>
          )}
          {number.endsWith('M²') && (
            <span className="absolute top-[-20px] text-[clamp(0.75rem,2vw,1.25rem)]">M²</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HeroStats() {
  return (
    <div className="grid px-4 mt-10 grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="DESARROLLOS FINALIZADOS"
        number="11"
        backgroundImage="https://baekyco.com/img/estadisticas_desarrollos_finalizados.webp"
      />
      <StatCard
        title="SUPERFICIE TOTAL DESARROLLADA"
        number="+50000"
        backgroundImage="https://baekyco.com/img/estadisticas_superficie_total.webp"
      />
      <StatCard
        title="DESARROLLOS EN PROCESO"
        number="8"
        backgroundImage="https://baekyco.com/img/estadisticas_desarrollos_en_proceso.webp"
      />
    </div>
  );
}
