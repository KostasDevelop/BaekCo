import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar siempre visible */}
      <Navbar />
      {/* Contenido dinámico */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Footer siempre visible */}
      <Footer />
    </div>
  );
}
