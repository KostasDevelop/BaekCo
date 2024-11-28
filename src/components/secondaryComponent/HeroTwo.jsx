import React from "react";
import "@/index.css"
export default function HeroTwo() {
  return (
    <section className="w-full gap-16 mt-20 flex flex-col items-center bg-white">
      {/* Sección Principal */}
      <div className="md:w-full  gap-20 flex flex-col items-center justify-center md:flex-row md:gap-40">
        {/* Imagen */}
          <div className="flex-shrink-0 pl-20 max-w-[470px] md:w-[500px] md:h-[420px]">
          <img
            src="https://baekyco.com/img/torre_baek.webp"
            alt="Edificio Baek"
            className="rounded-[30px] shadow-md w-full h-full object-cover"
          />
          </div>
        {/* Texto */}
        <div className="flex flex-col  md:items-start gap-8 w-full max-w-[600px] px-6 md:px-0">
            <h4 className="text-2xl md:text-3xl font-semibold text-gray-600 leading-tight fontG text-center md:text-left">
              Comprometidos con el habitar de las personas
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
              <span className="font-bold text-gray-700">
                Apuntamos a un alto nivel de calidad en todos nuestros proyectos
                inmobiliarios
              </span>{" "}
              haciendo hincapié en el proceso constructivo; desde la optimización
              de recursos humanos, materiales y económicos.
            </p>
            <button className="bg-gray-700  text-white rounded-md shadow hover:bg-[#808A80] transition px-10 py-2">
              Ver más
            </button>
        </div>
      </div>


      {/* Sección de Proyectos */}
      <div className="w-full hover:gap-10 flex mb-10 mt-10 max-w-[1200px] px-3 flex-col md:flex-row ">
        {/* Proyecto AURIAN */}
        <a
          href="#"
          className="group relative flex-1 flex flex-col items-center overflow-hidden rounded-l-xl shadow-md transition-all hover:mx-4 hover:scale-[1.12]"
        >
          <div className="absolute inset-0 bg-[#C4A484]/70 transition-all group-hover:bg-[#C4A484]/50" />
          <img
            src="https://baekyco.com/img/series_home_aurian.webp"
            alt="Aurian building exterior"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start gap-4 p-6 text-white mb-3">
            <div className="flex gap-6">
              <img
                src="https://baekyco.com/img/logo_aurian.svg"
                alt="Logo Aurian"
                className="w-40"
              />
              <img
                src="https://baekyco.com/img/circ_flecha_der.svg"
                alt="Flecha derecha"
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
        </a>

        {/* Proyecto LeLis */}
        <a
          href="#"
          className="group relative flex-1 flex flex-col items-center overflow-hidden rounded-r-xl shadow-md transition-all hover:mx-4 hover:scale-[1.12]"
        >
          <div className="absolute inset-0 bg-black/70 transition-all group-hover:bg-black/50" />
          <img
            src="https://baekyco.com/img/series_home_lelis.webp"
            alt="LeLis building exterior"
            className="w-full h-[300px] md:h-[450px] object-cover grayscale"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-end gap-4 p-6 text-white">
            <div className="flex gap-6">
              <img
                src="https://baekyco.com/img/circ_flecha_izq.svg"
                alt="Flecha izquierda"
                className="w-8"
              />
              <img
                src="https://baekyco.com/img/logo_lelis.svg"
                alt="Logo LeLis"
                className="w-40"
              />
            </div>
            <p className="text-end w-full max-w-[400px] text-sm md:text-base">
              <span className="font-bold">
                Reinterpreta la arquitectura clásica francesa para integrarla con la
                funcionalidad moderna
              </span>  y las nuevas formas de vivir, desarrollando
              espacios innovadores y estéticamente refinados.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
