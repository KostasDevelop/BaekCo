import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "./routes"; // Importar las rutas

// Componente para los íconos de redes sociales
function SocialIcon({ label, path, iconPath }) {
  return (
    <Link to={path} className="hover:opacity-80">
      <span className="sr-only">{label}</span>
      <div className="p-2 border border-white/20 rounded-full">
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d={iconPath} />
        </svg>
      </div>
    </Link>
  );
}

// Componente para listas de enlaces
function LinkList({ title, links }) {
  return (
    <div>
      {/* Título actualizado */}
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="flex items-center space-x-2">
            {/* Agregar un ° al lado de cada enlace */}
            <span className="text-white">°</span>
            <Link
              to={link.path}
              className="text-gray-300 hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente principal Footer
export function Footer() {
  return (
    <>
      <footer className="bg-[#19354A] px-20 text-white">
        <div className="container px-4 mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-10 mt-10">
                <Link to="/" className="flex items-center space-x-2">
                  <img width={120} src="logo.svg" alt="Logo" />
                </Link>
              </div>
              <address className="not-italic space-y-1">
                <p>Av. Gaona 3707 - Piso 7</p>
                <p>Ciudad Autónoma de Buenos Aires</p>
                <p className="mt-4">info@baekyco.com</p>
                <p>+54 11 4582-2972</p>
                <p className="mt-4">Lunes a Viernes de 9:00 a 18:00</p>
                <p>Sab, Dom y Feriados cerrado</p>
              </address>
            </div>

            <div className="flex justify-center space-x-4">
              {footerLinks.socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>

            <div className=" flex gap-20 items-center justify-center ">
              <LinkList title="Desarrollos" links={footerLinks.desarrollo} />
              <LinkList title="Mapa de sitio" links={footerLinks.mapaSitio} />
            </div>

            <div className="text-center">
              <p className="text-xl font-bold">
                EDIFICAMOS CONCEPTOS,
                <br />
                CONSTRUIMOS LEGADO.
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-8">
            <div className="flex flex-col gap-5 mt-10">
              <div className="flex mb-4">
                <Link to="/" className="flex items-center space-x-2">
                  <img width={120} src="logo.svg" alt="Logo" />
                </Link>
              </div>
              <div className="not-italic gap-3 flex flex-col text-[14px] space-y-1">
                <a className="hover:underline" target="_blank" href="https://www.google.com/maps/place/BAEK+%26+Co/@-34.6218072,-58.4768428,17z/data=!4m6!3m5!1s0x95bccbab60c96de3:0x284694aa81f03c91!8m2!3d-34.6217923!4d-58.4770314!16s%2Fg%2F11rcl1kw60?coh=219816&entry=tts&g_ep=EgoyMDI0MDcwMS4wKgBIAVAD">Av. Gaona 3707 - Piso 7
                  <p>Ciudad Autónoma de Buenos Aires</p>
                </a>
                <p className="mt-4">
                  <a href="mailto:info@baekyco.com" className="text-white hover:underline">
                    info@baekyco.com
                  </a>
                </p>
                <Link target="_blank" className="hover:underline duration-150 ease-in-out" to={"https://wa.me/5491145822972"}>
                  <p>+54 11 4582-2972</p>
                </Link>
                <p className="mt-4">Lunes a Viernes de 9:00 a 18:00
                  <br />
                  Sab, Dom y Feriados cerrado
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 mt-10 gap-8 text-[14px] text-gray-400">
              <LinkList title="Desarrollos" links={footerLinks.desarrollo} />
              <LinkList title="Mapa de sitio" links={footerLinks.mapaSitio} />
            </div>

            <div className="flex items-center justify-end">
              <p className="text-2xl font-bold text-right">
                EDIFICAMOS CONCEPTOS,
                <br />
                CONSTRUIMOS LEGADO.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8">
          <div className="container px-4 py-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4">
              {footerLinks.socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>
            <p className="text-sm text-white/60">© 2024 BAEK & CO. Todos los derechos reservados.</p>
            <p className="text-sm text-white/60">Diseñada por Big Sur Branding</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <Link
        to="https://wa.me/5491145822972"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
          width={35}
          alt="" />
        <span className="sr-only">Contact on WhatsApp</span>
      </Link>
    </>
  );
}
