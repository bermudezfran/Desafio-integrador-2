import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./stores/useAuthStore";
import {Dashboard} from "./pages/Dashboard";
import {ContactoPage} from "./pages/ContactoPage";
import {NosotrosPage} from "./pages/NosotrosPage";
import {CarritoPage} from "./pages/CarritoPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProduct from "./pages/AddProduct";

export default function App() {
  const token = useAuthStore((state) => state.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route 
          path="/carrito" 
          element={
            <ProtectedRoute isAllowed={!!token}>
              <CarritoPage />
            </ProtectedRoute>
          } 
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin/add-product" element={<AddProduct />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
