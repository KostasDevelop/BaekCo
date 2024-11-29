import React from "react";
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/styles/slidercustoms.css";

export default function PropertySlider({ properties = [] }) {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef(null);

  // Función para actualizar el número de slides visibles
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      const totalItems = properties.length;

      if (width < 640) {
        setSlidesToShow(Math.min(1, totalItems));
      } else if (width < 1024) {
        setSlidesToShow(Math.min(2, totalItems));
      } else {
        setSlidesToShow(Math.min(3, totalItems));
      }
    };

    // Comprobar antes si `properties` tiene contenido
    if (properties.length > 0) {
      updateSlidesToShow();
      window.addEventListener("resize", updateSlidesToShow);
      return () => window.removeEventListener("resize", updateSlidesToShow);
    }
  }, [properties]);

  // Configuración del slider
  const settings = {
    dots: false,
    infinite: properties.length > slidesToShow, // Solo infinito si hay más elementos que slides visibles
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: Math.max(1, slidesToShow),
    arrows: false,
  };

  // Manejadores para los botones de navegación
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Verificar que haya propiedades antes de renderizar
  if (!properties || properties.length === 0) {
    return (
      <div className="text-center p-6">
        <p className="text-gray-500">No properties available to display.</p>
      </div>
    );
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Property Listings Slider"
    >
      {/* Botones de navegación */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider */}
      <Slider
        ref={sliderRef}
        {...settings}
        className="property-slider"
        role="region"
        aria-roledescription="carousel"
      >
        {properties.map((property) => (
          <article
            key={property.id}
            className="px-2"
            aria-label={`Property: ${property.title}`}
          >
            <div className="relative h-[500px] group overflow-hidden rounded-lg">
              {/* Contenedor de la imagen */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${property.image})` }}
                role="img"
                aria-label={property.title}
              />

              {/* Superposición */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Contenido */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <header className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    #{property.tag}
                  </span>
                  <time
                    dateTime={property.date}
                    className="text-sm"
                  >
                    {new Date(property.date).toLocaleDateString()}
                  </time>
                </header>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold leading-tight">
                    {property.title}
                  </h2>
                  <p className="text-sm text-white/80">
                    {property.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
}
