import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import "../sass/main.scss";

export const NosotrosPage = () => {
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
      <main className="about-main">
        <section className="about-section">
          <div className="about-section__container">
            <h2 className="about-section__title">¿Quiénes somos?</h2>
            <p className="about-section__text">
              Somos <strong>Muscle Car Store</strong>, una tienda dedicada a la
              venta de
              <em>muscle cars</em> clásicos y modernos. Nuestro objetivo es
              ofrecer a los amantes de los automóviles la oportunidad de
              experimentar la potencia, el estilo y la historia de estos
              legendarios vehículos.
            </p>
            <p className="about-section__text">
              Contamos con un equipo de apasionados y expertos en el mundo de
              los “muscle cars”, dispuestos a asesorarte en cada paso para que
              encuentres el auto de tus sueños.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
