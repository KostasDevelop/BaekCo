import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../components/ui/button"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=800&width=1200",
    title: "DESARROLLOS INMOBILIARIOS",
    subtitle: "EN BUENOS AIRES",
    description:
      "Con una visión realista y funcional, acompañamos a nuestros clientes e inversores en todo el proceso para garantizarles un hogar confortable y de atractiva rentabilidad.",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=800&width=1200",
    title: "ESPACIOS MODERNOS",
    subtitle: "DISEÑO CONTEMPORÁNEO",
    description:
      "Creamos espacios que combinan funcionalidad y estética, adaptados a las necesidades del estilo de vida actual.",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=800&width=1200",
    title: "INVERSIONES SEGURAS",
    subtitle: "ALTO RENDIMIENTO",
    description:
      "Ofrecemos oportunidades de inversión con retornos atractivos en las zonas más prometedoras de Buenos Aires.",
  },
]

export function HeroComponent() {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 2500)
    return () => clearInterval(timer);
  }, [])

  return (
    (<div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}>
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </motion.div>
      </AnimatePresence>
      <div
        className="relative flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1
                className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                {slides[0].title}
              </h1>
              <p className="text-3xl font-light text-white sm:text-4xl md:text-5xl">{slides[0].subtitle}</p>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-3xl text-lg text-gray-200">
                {slides[current].description}
              </motion.p>
            </AnimatePresence>
            <div className="flex justify-center gap-4">
              <Button className="bg-white/90 text-black hover:bg-white" size="lg">
                Contacto
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
                size="lg">
                Ver más
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index ? "bg-white w-4" : "bg-white/50"
            }`}>
            <span className="sr-only">Ir a diapositiva {index + 1}</span>
          </button>
        ))}
      </div>
    </div>)
  );
}