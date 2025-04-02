import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useCarrito } from "../context/CartStore";

export const CarritoPage = () => {
  const { carrito } = useCarrito();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div className="cart">
        {carrito.length > 0 ? (
          carrito.map((producto) => (
            <div key={producto.id} className="cart-item">
              <h2>{producto.nombre}</h2>
              <img src={producto.foto} alt={producto.nombre} />
              <p>{producto.descripcion}</p>
              <p>
                <b>Precio:</b> {producto.precio}
              </p>
            </div>
          ))
        ) : (
          <p>Tu carrito está vacío</p>
        )}
      </div>
    </>
  );
};
