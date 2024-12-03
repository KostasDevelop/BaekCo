import * as React from "react";
import HeroTwo from "@/components/secondaryComponent/HeroTwo";
import "@/styles/navbar.styles.css"
import ContactSection from "@/components/contact-section";
import ServicesSection from "@/components/services-section";
import HeroStats from "@/components/heroStats";
import ModelUnitShowcase from "@/components/model-unit-showcase";
import PropertySlider from "@/components/Novedades";
import HomePrincipal from "@/components/homePrincipal";

const properties = [
  {
      id: 1,
      tag: "Aurian",
      date: "26.06.24",
      title: "Próximamente AURIAN® Hollywood en Palermo",
      description:
          "BAEK & Co adquirió en primera etapa los lotes de Juan B. Justo y Honduras (Actualmente: Movistar y Casa Rock).",
      image: "https://baekyco.com/img/novedad_2024_03_26.webp",
  },
  {
      id: 2,
      tag: "LeLis",
      date: "08.06.24",
      title: "LeLis BLANC sigue avanzando en Villa Devoto",
      description:
          "La obra ubicada en Navarro 4262 se encuentra en la etapa Estructura de Hormigón (Niveles: Subsuelo y Suelo). Se estima que la obra finalice a partir del segundo semestre del 2027.",
      image: "https://baekyco.com/img/novedad_2024_04_26.webp",
  },
  {
      id: 3,
      tag: "LeLis",
      date: "26.05.24",
      title:
          "Elegí el equilibrio perfecto entre estilo y amplitud en el barrio de Flores",
      description:
          "Conocé los 4 ambientes disponibles con cochera exclusiva, diseñados para ofrecerte el máximo confort y funcionalidad en LeLis CHAMEAU.",
      image: "https://baekyco.com/img/novedad_2024_07_18.webp",
  },
  {
      id: 4,
      tag: "LeLis",
      date: "26.05.24",
      title:
          "Elegí el equilibrio perfecto entre estilo y amplitud en el barrio de Flores",
      description:
          "Conocé los 4 ambientes disponibles con cochera exclusiva, diseñados para ofrecerte el máximo confort y funcionalidad en LeLis CHAMEAU.",
      image: "https://baekyco.com/img/novedad_2024_07_18.webp",
  },
  {
      id: 5,
      tag: "LeLis",
      date: "26.05.24",
      title:
          "Elegí el equilibrio perfecto entre estilo y amplitud en el barrio de Flores",
      description:
          "Conocé los 4 ambientes disponibles con cochera exclusiva, diseñados para ofrecerte el máximo confort y funcionalidad en LeLis CHAMEAU.",
      image: "https://baekyco.com/img/novedad_2024_07_18.webp",
  },
  {
      id: 6,
      tag: "LeLis",
      date: "26.05.24",
      title:
          "Elegí el equilibrio perfecto entre estilo y amplitud en el barrio de Flores",
      description:
          "Conocé los 4 ambientes disponibles con cochera exclusiva, diseñados para ofrecerte el máximo confort y funcionalidad en LeLis CHAMEAU.",
      image: "https://baekyco.com/img/novedad_2024_07_18.webp",
  },
  {
      id: 7,
      tag: "LeLis",
      date: "26.05.24",
      title:
          "Elegí el equilibrio perfecto entre estilo y amplitud en el barrio de Flores",
      description:
          "Conocé los 4 ambientes disponibles con cochera exclusiva, diseñados para ofrecerte el máximo confort y funcionalidad en LeLis CHAMEAU.",
      image: "https://baekyco.com/img/novedad_2024_07_18.webp",
  },
];
const imageSlides = [
  { id: 1, image: "https://baekyco.com/img/home_slide_1.webp" },
  { id: 2, image: "https://baekyco.com/img/home_slide_2.webp" },
  { id: 3, image: "https://baekyco.com/img/home_slide_3.webp" },
  { id: 4, image: "https://baekyco.com/img/home_slide_4.webp" },
  { id: 5, image: "https://baekyco.com/img/home_slide_5.webp" },
  { id: 6, image: "https://baekyco.com/img/home_slide_6.webp" },
];
const descriptions = [
  "Con una visión realista y funcional, acompañamos a nuestros clientes e inversores en todo el proceso para garantizarles un hogar confortable y de atractiva rentabilidad."
];
const itemSection = [
  {
      id: 1,
      title: "INVERSIONES INMOBILIARIAS",
      description:
          "Con más de diez años en el mercado y con el apoyo de clientes que apuestan a los proyectos invirtiendo en la construcción y el desarrollo inmobiliario, logramos generar una red de inversores que participan en diferentes etapas de los proyectos Baek & Co.",
      button: false,
  }
]



export function HeroComponent() {
  return (
    <>
    <HomePrincipal descriptions={descriptions} imageSlides={imageSlides}/>
    <HeroTwo/>
    <ServicesSection/>
    <HeroStats/>
    <ModelUnitShowcase/>
    <PropertySlider properties={properties}/>
    <ContactSection/>
    </>
  );
}
