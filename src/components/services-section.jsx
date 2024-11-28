import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedTestimonialsDemo } from "./cardTestimonials"
import "@/styles/media.styles.css"

export default function ServicesSection() {
  return (
    <div className="relative flex mx-auto px-2 w-full flex-col">
      {/* Main Services Section */}
      <div className="relative overflow-hidden px-4 rounded-xl sm:px-6 md:px-20 h-[700px]">
        <div className="absolute inset-0">
          <img
            src="https://baekyco.com/img/banner_servicios.webp"
            alt="Building background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 p-6 text-white h-full flex flex-col justify-center max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Conocé nuestros servicios</h2>
          <p className="text-lg sm:text-xl mb-6">
            Proyectamos y llevamos adelante desarrollos inmobiliarios, con una visión realista y funcional, acompañando a nuestros inversores en todo el proceso.
          </p>
          <Button variant="secondary" className="w-fit bg-[#808A80] text-gray-200 hover:text-gray-700">
            Ver más
          </Button>
        </div>
      </div>

      {/* Post-Venta Service Section */}
      <div className="flex flex-col lg:flex-row lg:absolute lg:top-1/2 lg:right-6 lg:transform lg:-translate-y-1/2 lg:gap-6 lg:w-fit lg:max-w-[680px] lg:mb-0 mb-6 hidden-at-1450">
  <Card className="w-full border-none hidden lg:flex md:hidden bg-[#023451] lg:w-[680px] max-w-[full]">
    <AnimatedTestimonialsDemo />
  </Card>
</div>
    </div>
  )
}
