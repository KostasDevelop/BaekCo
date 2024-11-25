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

export default function NewsSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-screen mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-8">Novedades</h2>
            <div className="relative">
                <div className="overflow-hidden rounded-lg">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <div key={slide.id} className="w-full flex-shrink-0">
                                <Card className="relative h-[600px] overflow-hidden">
                                    {/* Imagen */}
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                                    <CardContent className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white">
                                        <div className="space-y-4 flex items-start flex-col">
                                            <span className="text-3xl inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-xl">{slide.date}</span>
                                            <h3 className="text-4xl max-w-6xl font-bold leading-tight">{slide.title}</h3>
                                            <p className="text-1xl text-white/90 max-w-2xl">{slide.description}</p>
                                        </div>
                                    </CardContent>
                                    <CardContent className="absolute inset-0 flex flex-col justify-start p-6 z-10 text-white">
                                        <div className="space-y-4 flex items-center justify-center">
                                            <div className="flex justify-start items-center gap-4">
                                                <span className="inline-block text-3xl px-3 py-1 rounded-full bg-white/20 backdrop-blur-xl">
                                                    #{slide.tag}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute hover:text-gray-300 left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-black/20 border-none backdrop-blur-sm"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Imagen anterior</span>
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 hover:text-white -translate-y-1/2 bg-white/50 hover:bg-black/20 text-white border-none backdrop-blur-sm"
                    onClick={nextSlide}
                >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Siguiente imagen</span>
                </Button>
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {currentSlide + 1} / {slides.length}
                </div>
            </div>
        </div>
    );
}
