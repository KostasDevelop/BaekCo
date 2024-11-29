import React from "react";
import "@/index.css";

export default function HeroTwo() {
  return (
    <section
      className="w-full gap-12 mt-20 flex flex-col items-center bg-white"
      aria-labelledby="hero-section-title"
    >
      {/* Sección Principal */}
      <header className="md:w-full gap-10 flex flex-col items-center justify-center md:flex-row md:gap-14 px-4 md:px-10">
        {/* Imagen */}
        <div className="flex-shrink-0 px-5 max-w-[410px] md:w-[500px] md:h-[420px]">
          <img
            src="https://baekyco.com/img/torre_baek.webp"
            alt="Vista frontal del edificio Baek"
            className="rounded-[30px] shadow-md w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Texto */}
        <div className="flex flex-col md:items-start gap-8 w-full max-w-[600px]">
          <h1
            id="hero-section-title"
            className="text-2xl md:text-3xl font-semibold text-gray-600 leading-tight fontG text-center md:text-left"
          >
            Comprometidos con el habitar de las personas
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
            <span className="font-bold text-gray-700">
              Apuntamos a un alto nivel de calidad en todos nuestros proyectos
              inmobiliarios
            </span>{" "}
            haciendo hincapié en el proceso constructivo; desde la optimización
            de recursos humanos, materiales y económicos.
          </p>
          <div className="flex items-center mx-auto w-full md:justify-start justify-center">
          <button
            
            className="bg-gray-700 text-white rounded-md shadow hover:bg-[#808A80] transition px-10 py-2"
            aria-label="Ver más detalles sobre nuestros proyectos"
            >
            Ver más
          </button>
            </div>
        </div>
      </header>

      {/* Sección de Proyectos */}
      <section
        aria-labelledby="projects-section-title"
        className="w-full md:h-[460px] flex mb-10 mt-10 max-w-[1200px] px-3 flex-col md:flex-row gap-2"
      >
       

        {/* Proyecto AURIAN */}
        <article className="group relative flex-1 flex flex-col items-center overflow-hidden rounded-l-xl shadow-md transition-all hover:mx-4 hover:scale-[1.08]">
          <div className="absolute inset-0 bg-[#C4A484]/70 transition-all group-hover:bg-[#C4A484]/50" />
          <img
            src="https://baekyco.com/img/series_home_aurian.webp"
            alt="Fachada del edificio Aurian"
            className="w-full h-[300px] md:h-[450px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start gap-4 p-6 text-white mb-3">
            <div className="flex gap-6">
              <img
                src="https://baekyco.com/img/logo_aurian.svg"
                alt="Logo de Aurian"
                className="w-40"
                loading="lazy"
              />
              <img
                src="https://baekyco.com/img/circ_flecha_der.svg"
                alt="Flecha indicando más detalles del proyecto Aurian"
                className="w-8"
              />
            </div>
            <p className="text-start text-sm md:text-base max-w-[600px]">
              <span className="font-bold">
                Más allá de ser un lugar para vivir; es una experiencia de estilo
                de vida conectado y enriquecido.
              </span>
              Combina vanguardia tecnológica y diseño innovador para hogares
              preparados para el futuro.
            </p>
          </div>
        </article>

        {/* Proyecto LeLis */}
        <article className="group relative flex-1 flex flex-col items-center overflow-hidden rounded-r-xl shadow-md transition-all hover:mx-4 hover:scale-[1.08]">
          <div className="absolute inset-0 bg-black/70 transition-all group-hover:bg-black/50" />
          <img
            src="https://baekyco.com/img/series_home_lelis.webp"
            alt="Fachada del edificio LeLis"
            className="w-full h-[300px] md:h-[450px] object-cover grayscale"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-end gap-4 p-6 text-white">
            <div className="flex gap-6">
              <img
                src="https://baekyco.com/img/circ_flecha_izq.svg"
                alt="Flecha indicando más detalles del proyecto LeLis"
                className="w-8"
                loading="lazy"
              />
              <img
                src="https://baekyco.com/img/logo_lelis.svg"
                alt="Logo de LeLis"
                className="w-40"
                loading="lazy"
              />
            </div>
            <p className="text-end w-full max-w-[400px] text-sm md:text-base">
              <span className="font-bold">
                Reinterpreta la arquitectura clásica francesa para integrarla con la
                funcionalidad moderna
              </span>{" "}
              y las nuevas formas de vivir, desarrollando espacios innovadores y
              estéticamente refinados.
            </p>
          </div>
        </article>
      </section>
    </section>
  );
}
