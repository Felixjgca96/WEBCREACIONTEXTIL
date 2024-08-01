import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";

import Inicio from "../paginas/Inicio";
import Contacto from "../paginas/Contacto";
import MediosDePago from "../paginas/MediosDePago";
import QuienesSomos from "../paginas/QuienesSomos";
import Productos from "../paginas/Productos";
import PaginaError from "../paginas/PaginaError";


function Routes() {
  return (
    <ReactDomRoutes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/mediosdepago" element={<MediosDePago />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<PaginaError />} />
    </ReactDomRoutes>
  );
}

export default Routes