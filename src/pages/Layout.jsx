import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Layout() {
  const location = useLocation();

  // Generar breadcrumbs solo si no estamos en la página Home
  const breadcrumbs = location.pathname !== "/" 
    ? location.pathname
        .split("/")
        .filter((crumb) => crumb) // Ignorar partes vacías de la ruta
        .map((crumb, index) => {
          const path = `/${location.pathname
            .split("/")
            .slice(1, index + 2)
            .join("/")}`;
          return {
            label: crumb.charAt(0).toUpperCase() + crumb.slice(1), // Capitalizar
            path,
          };
        })
    : [];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Breadcrumbs: Solo se muestran si no estamos en Home */}
      {breadcrumbs.length > 0 && (
        <nav className="bg-transparent flex w-full max-w-[500px]  justify-end items-center px-40 py-2">
          <Link to="/" className="text-gray-500 hover:underline">Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.path}>
              {" > "}
              <Link to={crumb.path} className="text-gray-700 hover:underline">
                {crumb.label}
              </Link>
            </span>
          ))}
        </nav>
      )}
      {/* Contenido dinámico */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
