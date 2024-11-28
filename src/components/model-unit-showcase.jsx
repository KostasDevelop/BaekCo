import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const images = [
  "https://baekyco.com/img/estadisticas_desarrollos_finalizados.webp",
  "https://baekyco.com/img/estadisticas_superficie_total.webp",
  "https://baekyco.com/img/estadisticas_desarrollos_en_proceso.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cJH2nF6LCnB74cHgEOZjIVxMmKojsb.png"
];

export default function ModelUnitShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative px-20 md:px-0 flex items-center justify-center mt-28 min-h-[800px] bg-transparent">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center md:text-start p-8 lg:p-12 bg-transparent">
          <h2 className="text-4xl font-bold mb-4">
            Visitá nuestra unidad modelo
          </h2>
          <p className="text-muted-foreground mb-8">
            Se ubica en Av. Nazca 1530, Villa Santa Rita en el desarrollo Le Lis MAIS 
            y está disponible para visitas con cita previa.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Button className="w-fit bg-[#1B3641] hover:bg-[#2C4A56]" size="lg">
              Agendá Ahora
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className={`relative mx-auto bg-transparent rounded-sm overflow-hidden ${isFullscreen ? 'w-[700px] h-[700px]' :'w-full md:w-[459px] h-[490px]'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt={`Model unit view ${currentIndex + 1}`}
              className="object-cover " />
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={previousImage}
              className="rounded-full bg-white/80 hover:bg-white">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={nextImage}
              className="rounded-full bg-white/80 hover:bg-white">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Fullscreen Button */}
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setIsFullscreen(true)}
            className="absolute top-6 right-6 rounded-full bg-white/80 hover:bg-white">
            <Maximize2 className="h-4 w-4" />
          </Button>

          {/* Image Counter */}
          <div
            className="absolute bottom-6 left-6 bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-[900px] bg-transparent border-none flex items-center justify-center h-[80vh] p-0">
          <div className="relative w-full h-full">
            <img
              src={images[currentIndex]}
              alt={`Model unit view ${currentIndex + 1}`}
              className="w-full h-full object-contain" />
            
            {/* Fullscreen Navigation Arrows */}
            <button
              onClick={previousImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
              aria-label="Previous image">
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
              aria-label="Next image">
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Fullscreen Image Counter */}
            <div
              className="absolute top-6 left-6 bg-white/80 px-4 py-2 rounded-full text-lg font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
