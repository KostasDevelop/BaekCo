import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HeroComponent } from "./pages/Home";
import Desarrollo from "./pages/Desarrollo";
import Inversion from "./pages/Inversion";
import Nosotros from "./pages/Nosotros";
import Clientes from "./pages/Clientes";


function App() {
  return (
    <Router>
      <Routes>
        {/* Envolvemos las rutas en el Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroComponent />} />
          <Route path="desarrollos" element={<Desarrollo />} />
          <Route path="inversion" element={<Inversion />} />
          <Route path="nosotros" element={< Nosotros/>} />
          <Route path="clientes" element={<Clientes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 