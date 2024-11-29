import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const slides = [
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
        image: "https://www.grupoorve.com/media/mageplaza/blog/post/c/u/cuanto_mide_departamento_ideal.jpg",
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
        image: "https://images.adsttc.com/media/images/5f10/80ed/b357/65e1/f700/0086/newsletter/07112019-Jaime_Navarro_6319.jpg?1594917086",
    },
    {
        id: 7,
        tag: "LeLis",
        date: "26.05.24",
        title:
            "Elegí el equilibrio perfecto entre estilo y amplitud en el barrio de Flores",
        description:
            "Conocé los 4 ambientes disponibles con cochera exclusiva, diseñados para ofrecerte el máximo confort y funcionalidad en LeLis CHAMEAU.",
        image: "https://i0.wp.com/www.socovesa.cl/blog/web/wp-content/uploads/2023/09/departamentos-vanguardia.webp?resize=1400%2C700&ssl=1",
    },
    {
        id: 8,
        tag: "LeLis",
        date: "26.05.24",
        title:
            "Elegí el equilibrio perfecto entre estilo y amplitud en el barrio de Flores",
        description:
            "Conocé los 4 ambientes disponibles con cochera exclusiva, diseñados para ofrecerte el máximo confort y funcionalidad en LeLis CHAMEAU.",
        image: "https://media.admagazine.com/photos/6317bd95d75f2fd76bd148aa/master/w_1600%2Cc_limit/APR%2520-%2520Nooor%2520-%2520Appartement%252045m2%2520rue%2520de%2520Grenelle%2520-%2520cre%25CC%2581dit%2520Nicolas%2520MatheusG19_2044.jpg",
    }
];

export default function NewsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0); // Índice de la primera card visible
    const itemsPerPage = 3; // Número de cards visibles al mismo tiempo

    // Calcular los elementos visibles
    const visibleSlides = slides.slice(currentIndex, currentIndex + itemsPerPage);

    // Avanzar al siguiente conjunto de slides
    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + itemsPerPage >= slides.length ? 0 : prev + itemsPerPage
        );
    };

    // Retroceder al conjunto anterior de slides
    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev - itemsPerPage < 0
                ? slides.length - (slides.length % itemsPerPage || itemsPerPage)
                : prev - itemsPerPage
        );
    };

    return (
        <div className="w-full flex flex-col items-center justify-center mx-auto px-4 py-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
                Novedades
            </h2>
            <div className="relative items-end justify-center flex flex-col">
                {/* Flechas de Navegación */}
                <div className="absolute py-8 px-3 items-start justify-end inset-0 flex gap-2 z-40">
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-white/80 p-10 hover:bg-black/20 border-none backdrop-blur-sm"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-6 w-6" />
                        <span className="sr-only">Slide anterior</span>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="p-10 bg-white/80 hover:bg-black/20 border-none backdrop-blur-sm"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-6 w-6" />
                        <span className="sr-only">Siguiente slide</span>
                    </Button>
                </div>

                {/* Contenedor en Fila */}
                <div className="flex gap-2 overflow-hidden w-full">
                    
                    {visibleSlides.map((slide) => (
                        <Card
                            key={slide.id}
                            className="relative mx-auto w-full max-w-[600px] flex-shrink-0"
                        >
                            <div className="absolute z-10 justify-center items-center px-4 pt-10">
                                    <h3 className="text-5xl border p-3 text-white">#{slide.tag}</h3>
                                </div>
                            {/* Imagen que ocupa toda la tarjeta */}
                            <div className="relative w-full h-[600px] ">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full  h-full object-cover rounded-xl"
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                                
                            </div>
                            {/* Contenido */}
                            
                            <CardContent className="absolute inset-0 flex flex-col justify-end p-4 z-10 text-white">
                                <span className="text-lg bg-white/20 px-3 py-1 rounded-md backdrop-blur-sm mb-2">
                                    {slide.date}
                                </span>
                                <h3 className="text-xl font-bold">{slide.title}</h3>
                                <p className="text-sm mt-2">{slide.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
