import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Menu, X, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import "@/styles/navbar.styles.css"


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
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <div className="relative w-full">
      {/* Top Address Bar */}
      <div className="hidden w-full bg-[#19354A] py-2 text-center text-sm text-white md:block">
        <p>Av. Gaona 3707 - Piso 7 - Ciudad Autónoma de Buenos Aires</p>
      </div>
      {/* Main Navigation */}
      <nav className="flex h-20 items-center justify-between bg-[#DCD9D2] px-3 md:px-32">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img width={120} src="https://www.baekyco.com/img/logo.svg" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold transition-colors hover:text-gray-900 relative ${location.pathname === item.href ? "active-link" : "text-gray-700"
                }`}
              // Condicional para aplicar target="_blank" solo en "BUSCAR PROPIEDADES"
              target={item.name === "BUSCAR PROPIEDADES" ? "_blank" : "_self"}
              rel={item.name === "BUSCAR PROPIEDADES" ? "noopener noreferrer" : ""}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden space-x-4 md:flex">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-gray-700 transition-colors hover:text-gray-900"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-[#9BA5A1]/95 p-0">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-4">
                <img width={90} src="https://www.baekyco.com/img/logo.svg" alt="Logo" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-1 flex-col justify-between p-4"
                >
                  <div className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.href}
                          className={`block text-lg font-normal transition-colors hover:text-gray-200 relative ${location.pathname === item.href ? "active-link" : "text-white"
                            }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center space-x-6"
                  >
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="text-white transition-colors hover:text-gray-200"
                        aria-label={social.label}
                      >
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
