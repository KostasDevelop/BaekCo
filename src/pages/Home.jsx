import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import HeroTwo from "@/components/secondaryComponent/HeroTwo";
import "@/styles/navbar.styles.css"
import ContactSection from "@/components/contact-section";
import ServicesSection from "@/components/services-section";
import HeroStats from "@/components/heroStats";
import ModelUnitShowcase from "@/components/model-unit-showcase";
import NewsSlider from "@/components/Novedades";




const imageSlides = [
  { id: 1, image: "https://baekyco.com/img/home_slide_1.webp" },
  { id: 2, image: "https://baekyco.com/img/home_slide_2.webp" },
  { id: 3, image: "https://baekyco.com/img/home_slide_3.webp" },
  { id: 4, image: "https://baekyco.com/img/home_slide_4.webp" },
  { id: 5, image: "https://baekyco.com/img/home_slide_5.webp" },
  { id: 6, image: "https://baekyco.com/img/home_slide_6.webp" },
];

// Definimos los datos de las descripciones
const descriptions = [
  "Con una visión realista y funcional, acompañamos a nuestros clientes e inversores en todo el proceso para garantizarles un hogar confortable y de atractiva rentabilidad.",
  "Creamos espacios que combinan funcionalidad y estética, adaptados a las necesidades del estilo de vida actual.",
  "Ofrecemos oportunidades de inversión con retornos atractivos en las zonas más prometedoras de Buenos Aires.",
];

export function HeroComponent() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = React.useState(0);

  // Temporizador para cambiar la imagen a un intervalo específico (e.g., 2500 ms)
  React.useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500); // Velocidad del cambio de imagen

    return () => clearInterval(imageTimer);
  }, []);

  // Temporizador para cambiar la descripción a un intervalo diferente (e.g., 5000 ms)
  React.useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentDescriptionIndex((prevIndex) =>
        prevIndex === descriptions.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Velocidad del cambio de descripción

    return () => clearInterval(textTimer);
  }, []);

  const currentImage = imageSlides[currentImageIndex];
  const currentDescription = descriptions[currentDescriptionIndex];

  return (
    <>
    <div className="relative h-[820px] w-full overflow-hidden">
      {/* Sección de las imágenes */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${currentImage.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Sección del texto */}
      <div className="relative flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-4xl space-y-6">
          <div className="space-y-2">
            {/* Título fijo */}
            <h1 className=" fontG text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl">
              DESARROLLOS INMOBILIARIOS EN BUENOS AIRES
            </h1>
          </div>
          {/* Descripción dinámica */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentDescriptionIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-[22px] text-gray-200 font-light"
            >
              {currentDescription}
            </motion.p>
          </AnimatePresence>
          <div className="flex pt-5 justify-center gap-14">
            <div>
              <Button className="bg-[#7F887F] text-[19px] font-light w-[170px] rounded-lg h-[60px] text-white hover:bg-[#19354A]">
                Contacto
              </Button>
            </div>
            <div>
              <Link to={"/desarrollos"}>
                <Button
                  variant=""
                  className="border-white text-[19px] w-[170px] font-light rounded-lg h-[60px] border bg-transparent hover:bg-white text-white  hover:text-black"
                  >
                  Ver más
                </Button>
              </Link>
              </div>
          </div>
        </div>
      </div>

      {/* Botones de navegación del slide */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {imageSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentImageIndex === index ? "bg-white w-4" : "bg-white/50"
            }`}
          >
            <span className="sr-only">Ir a diapositiva {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
    <HeroTwo/>
    <ServicesSection/>
    <HeroStats/>
    <ModelUnitShowcase/>
    <NewsSlider/>
    <ContactSection/>
    </>
  );
}
