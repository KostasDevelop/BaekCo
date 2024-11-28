'use client';
import { AnimatedNumber } from './ui/animated-numbers';
import '../styles/navbar.styles.css';

function StatCard({ title, number, backgroundImage, delay, duration, updateSpeed }) {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden group flex items-center justify-center text-center">
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

        {/* Números */}
        <div className="flex items-center gap-2 md:text-[clamp(4rem,6vw,4rem)]  lg:text-[clamp(6rem,6vw,4rem)] text-[clamp(7rem,6vw,4rem)] font-bold relative">
          {number.startsWith('+') ? (
            <>
              <span className="text-[clamp(1.5rem,5vw,3rem)]">+</span>
              <AnimatedNumber number={number.slice(1)} delay={delay} duration={duration} updateSpeed={updateSpeed} />
            </>
          ) : (
            <AnimatedNumber number={number} delay={delay} duration={duration} updateSpeed={updateSpeed} />
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
        delay={500}
        duration={250000}
        updateSpeed={50}
      />
      <StatCard
        title="SUPERFICIE TOTAL DESARROLLADA"
        number="+50000"
        backgroundImage="https://baekyco.com/img/estadisticas_superficie_total.webp"
        delay={500}
        duration={2500}
        updateSpeed={30}
      />
      <StatCard
        title="DESARROLLOS EN PROCESO"
        number="8"
        backgroundImage="https://baekyco.com/img/estadisticas_desarrollos_en_proceso.webp"
        delay={1000}
        duration={250000}
        updateSpeed={50}
      />
    </div>
  );
}
