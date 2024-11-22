'use client'
import { AnimatedNumber } from "./ui/animated-numbers"

function StatCard({ title, number, backgroundImage, delay }) {
  return (
    <div className="relative h-[700px] rounded-xl overflow-hidden group">
      {/* Background Image */}
      <div className="absolute  inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 text-white">
        <h3 className="text-sm font-medium uppercase tracking-wider">
          {title}
        </h3>
        <div className="text-6xl font-bold">
          {number.startsWith('+') ? (
            <>
              <span>+</span>
              <AnimatedNumber 
                number={number.slice(1)} 
                delay={delay} 
              />
            </>
          ) : (
            <AnimatedNumber 
              number={number} 
              delay={delay}
            />
          )}
          {number.endsWith('M²') && <span className="text-3xl ml-2">M²</span>}
        </div>
      </div>
    </div>
  )
}

export default function HeroStats() {
  return (
    <div className="grid px-10 md:px-4 mt-10 grid-cols-1 md:grid-cols-3 gap-1">
      <StatCard
        title="DESARROLLOS FINALIZADOS"
        number="11"
        backgroundImage="https://baekyco.com/img/estadisticas_desarrollos_finalizados.webp"
        delay={0}
      />
      <StatCard
        title="SUPERFICIE TOTAL DESARROLLADA"
        number="+50000"
        backgroundImage="https://baekyco.com/img/estadisticas_superficie_total.webp"
        delay={1000}
      />
      <StatCard
        title="DESARROLLOS EN PROCESO"
        number="8"
        backgroundImage="https://baekyco.com/img/estadisticas_desarrollos_en_proceso.webp"
        delay={2000}
      />
    </div>
  )
}
