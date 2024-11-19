import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Análisis de lotes, producto y proyecto. Brindamos diferentes alternativas y múltiples posibilidades de desarrollo inmobiliario. Ofrecemos una solución para quienes quieran aprovechar la solidez y los beneficios del Real Estate.",
      name: "Propuestas Inversores",
      designation: "Equipo de Inversión Inmobiliaria",
      src: "https://cdn3d.iconscout.com/3d/premium/thumb/business-deal-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--cooperation-contract-agreement-association-pack-illustrations-3010227.png?f=webp", // Fondo azul con texto 'Imagen'
    },
    {
      quote: "Proyecto, dirección, construcción de obra y comercialización de unidades funcionales. Nos especializamos en trabajar con la modalidad de 'llave en mano'.",
      name: "Venta de Viviendas",
      designation: "Equipo de Construcción y Venta",
      src: "https://cdn3d.iconscout.com/3d/premium/thumb/home-3d-icon-download-in-png-blend-fbx-gltf-file-formats--property-house-estate-user-interface-pack-icons-4652885.png", // Fondo azul con texto 'Imagen'
    },
    {
      quote: "Ofrecemos asesorías sobre refacciones de interiores, así como en el seguimiento de la colocación de mobiliarios y artefactos de interior. Nuestro objetivo es garantizar la satisfacción total de nuestros clientes, ofreciéndoles un servicio personalizable.",
      name: "Servicio de Post-Venta",
      designation: "Equipo de Asesoría y Post-Venta",
      src: "https://cdn3d.iconscout.com/3d/premium/thumb/service-3d-icon-download-in-png-blend-fbx-gltf-file-formats--support-cog-setting-business-and-finance-pack-icons-5752009.png?f=webp", // Fondo azul con texto 'Imagen'
    },
    {
      quote: "Desarrollamos proyectos inmobiliarios que sirven como vehículo de inversión para diversos clientes, ofreciendo un producto de excelencia y una oportunidad de generar negocios sólidos con rentabilidades extraordinarias.",
      name: "Planificación de Negocios",
      designation: "Equipo de Desarrollo Inmobiliario",
      src: "https://cdn3d.iconscout.com/3d/premium/thumb/cohete-8084689-6437619.png?f=webp", // Fondo azul con texto 'Imagen'
    },
    {
      quote: "Acompañamos a nuestro cliente en todo el proceso asegurándole la mejor estrategia de negocio, minimizando la exposición y el riesgo de capital.",
      name: "Asesoramiento Personalizado",
      designation: "Equipo de Asesoría Estratégica",
      src: "https://cdn3d.iconscout.com/3d/premium/thumb/help-3d-icon-download-in-png-blend-fbx-gltf-file-formats--question-questions-faq-pack-user-interface-icons-5010113.png?f=webp", // Fondo azul con texto 'Imagen'
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
