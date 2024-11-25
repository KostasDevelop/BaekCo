'use client'
import { AnimatedNumber } from "./ui/animated-numbers"
import "../styles/navbar.styles.css"
function StatCard({ title, number, backgroundImage, delay, duration, updateSpeed }) {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden group">

      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Desarrollos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
      </div>

      <div className="relative gap-12 h-full flex flex-col justify-center text-white">
        {/* Título rotado */}
        <div className="flex justify-center items-center">
          <h3 className="text-2xl font-medium uppercase tracking-wider -rotate-90 origin-center animate-fade-in">
            {title}
          </h3>
        </div>

        {/* Números con "M²" encima */}
        <div className="flex justify-center items-center gap-2 text-8xl font-bold relative">
          {number.startsWith('+') ? (
            <>
              <span className="text-7xl">+</span>
              <AnimatedNumber number={number.slice(1)} delay={delay} duration={duration} updateSpeed={updateSpeed} />
            </>
          ) : (
            <AnimatedNumber number={number} delay={delay} duration={duration} updateSpeed={updateSpeed} />
          )}
          {number.endsWith('M²') && (
            <span className="absolute top-[-40px] text-4xl">M²</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HeroStats() {
  return (
    <div className="grid px-10 md:px-4 mt-10 grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="DESARROLLOS FINALIZADOS"
        number="11"
        backgroundImage="https://baekyco.com/img/estadisticas_desarrollos_finalizados.webp"
        delay={500}
        duration={250000} // Lento
        updateSpeed={50} // Incremento más lento
      />
      <StatCard
        title="SUPERFICIE TOTAL DESARROLLADA"
        number="+50000"
        backgroundImage="https://baekyco.com/img/estadisticas_superficie_total.webp"
        delay={500} // Pequeño retraso
        duration={2500} // Más rápida
        updateSpeed={30} // Velocidad normal
      />
      <StatCard
        title="DESARROLLOS EN PROCESO"
        number="8"
        backgroundImage="https://baekyco.com/img/estadisticas_desarrollos_en_proceso.webp"
        delay={1000} // Inicia más tarde
        duration={250000} // Lento
        updateSpeed={50} // Incremento más lento
      />
    </div>
  );
}
