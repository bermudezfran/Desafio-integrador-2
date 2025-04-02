import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useCarrito } from "../context/CartStore";

export const CarritoPage = () => {
  const { carrito, eliminarDelCarrito } = useCarrito();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleDeleteItem = (id) => {
    eliminarDelCarrito(id)
  }

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div className="cart">
        {carrito.length > 0 ? (
          carrito.map((producto) => (
            <div key={producto.id} className="cartItem">
              <img className="imgCart" src={producto.foto} alt={producto.nombre} />
              <div className="info">
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <span className="price">Precio:{producto.precio}</span>
              <button className="deleteItem" onClick={() => handleDeleteItem(producto.id)}>Eliminar</button>
              </div>
            </div>
          ))
        ) : (
          <p>Tu carrito está vacío</p>
        )}
        </div>
    </>
  );
};
