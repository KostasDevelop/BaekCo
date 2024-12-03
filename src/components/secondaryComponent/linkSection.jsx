import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "@/styles/navbar.styles.css"; // Asegúrate de incluir tu archivo CSS actualizado
import InvestmentOptions from "../investment-options";
import CustomPlansHero from "../custom-plans-hero";

export default function LinkSection({ descriptions, itemSection }) {
  return (
    <>
    <div className="relative flex items-center justify-center px-4 text-center bg-section-background bg-cover bg-center bg-no-repeat">
      <div className="max-w-4xl space-y-6">
        <div className="flex w-full justify-center items-center ">
          {/* Título dinámico basado en el primer elemento de itemSection */}
          {itemSection.map((item) => (
            <h1
              key={item.id}
              className="fontG text-3xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {item.title}
            </h1>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className=" w-full md:max-w-[540px] max-w-[340px] mx-auto md:text-[19px] text-[18px] text-gray-200 font-light"
          >
            {/* Mostrar la descripción del primer elemento */}
            {descriptions[0] || ""}
          </motion.p>
        </AnimatePresence>
        <div className="flex pt-5 justify-center gap-14">
          {itemSection.map((item) => (
            <React.Fragment key={item.id}>
              {/* Botón "Contacto" si está habilitado */}
              {item.button !== false && (
                <div>
                  <Button className="bg-[#7F887F] text-[19px] font-light w-[170px] rounded-lg h-[60px] text-white hover:bg-[#19354A]">
                    Contacto
                  </Button>
                </div>
              )}
              {/* Botón "Ver más" */}
              <div>
                <Link
                  target="_blank"
                  to={
                    "https://api.whatsapp.com/send/?phone=5491145822972&text&type=phone_number&app_absent=0"
                  }
                >
                  <Button className="border-none text-[19px] w-[170px] font-light rounded-lg h-[60px] border bg-[#808A80] hover:bg-[#19354A] text-white hover:text-gray-100">
                    Contactanos
                  </Button>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
