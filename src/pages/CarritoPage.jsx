import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";

export const CarritoPage = () => {
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
        carrito de compras
      </div>  
    </>
  );
};
