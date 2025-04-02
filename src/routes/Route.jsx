import React from "react";
import { Route, Router } from "react-router-dom";
import { ContactoPage } from "../pages/ContactoPage";
import { NosotrosPage } from "../pages/NosotrosPage";

export default function IndexRoute() {


    return (
        <Router>
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
        </Router>
    )
}