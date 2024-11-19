import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Menu, X, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import "@/styles/navbar.styles.css";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "DESARROLLOS", href: "/desarrollos" },
    { name: "INVERSIÓN", href: "/inversion" },
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "CLIENTES", href: "/clientes" },
    { name: "BUSCAR PROPIEDADES", href: "https://baekyasociados.tuinmobiliaria.com.ar/" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://ar.linkedin.com/company/baekyco", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/baekyco", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/baekyco/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@baekyco", label: "YouTube" },
  ];

  return (
    <div className="relative w-full">
      {/* Barra superior */}
      <div className=" w-full bg-[#19354A] py-2 text-center text-sm text-white block">
        <a
          target="_blank"
          className="hover:underline text-[#dcd9d2] text-[16px] font-medium"
          href="https://www.google.com/maps/place/BAEK+%26+Co/"
        >
          Av. Gaona 3707 - Piso 7 - Ciudad Autónoma de Buenos Aires
        </a>
      </div>

      {/* Navbar principal */}
      <nav className="flex items-center md:justify-between justify-between bg-[#DCD9D2] px-4 py-3 md:px-16">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://www.baekyco.com/img/logo.svg"
            alt="Logo"
            className="h-8 md:h-12"
          />
        </Link>

        {/* Navegación en escritorio */}
        <div className="hidden xl:flex items-center justify-between flex-1 ml-8">
          <div className="hidden xl:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-[15px] font-medium hover:text-gray-900 transition ${location.pathname === item.href ? " text-gray-600 border-b-4 border-gray-600" : "text-gray-700"
                    }`}
                  target={item.name === "BUSCAR PROPIEDADES" ? "_blank" : "_self"}
                  rel={item.name === "BUSCAR PROPIEDADES" ? "noopener noreferrer" : ""}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-white hover:text-white hover:bg-gray-400 bg-[#19354A] py-2 rounded-full px-2
                 transition"
                aria-label={social.label}
                target="_blank"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Menú móvil */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 bg-[#9BA5A1]/95">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4">
                <img
                  src="https://www.baekyco.com/img/logo.svg"
                  alt="Logo"
                  className="h-8"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex flex-col items-start space-y-4 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-lg font-medium text-white hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex justify-center space-x-6 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-white hover:text-gray-300"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
