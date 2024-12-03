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
        <nav aria-label="Breadcrumb" className="px-10 bg-transparent w-fit ">
          <ol className="items-start justify-start md:justify-center flex text-xl py-3">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                {index < breadcrumbs.length - 1 ? (
                  <Link to={crumb.path} className="text-gray-700 hover:text-blue-600 hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-500">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
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
