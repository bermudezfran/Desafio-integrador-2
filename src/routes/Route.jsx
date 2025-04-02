import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactoPage } from "../pages/ContactoPage";
import { NosotrosPage } from "../pages/NosotrosPage";
import { Dashboard } from "../pages/Dashboard";
import { CarritoPage } from "../pages/CarritoPage";

export default function IndexRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/contacto" element={<ContactoPage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/carrito" element={<CarritoPage />} />
            </Routes>
        </BrowserRouter>
    );
}
