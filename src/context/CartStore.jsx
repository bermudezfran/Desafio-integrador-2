/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const savedCarrito = localStorage.getItem("carrito");
    return savedCarrito ? JSON.parse(savedCarrito) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      if (prevCarrito.some((item) => item.id === producto.id)) {
        return prevCarrito;
      }
      return [...prevCarrito, producto];
    });
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((producto) => producto.id !== productoId)
    );
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
