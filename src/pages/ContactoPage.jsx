import React, {useEffect, useState} from 'react';
import { Header } from '../components/Header';
import '../sass/main.scss';

export const ContactoPage = () => {
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
      <main className="contact-main">
        <section className="contact-section">
          <div className="contact-section__container">
            <h1 className="contact-section__title">Contáctanos</h1>
            <p className="contact-section__subtitle">
              ¡Estamos aquí para resolver todas tus dudas sobre nuestros muscle cars!
            </p>
            <form className="contact-form" action="#" method="post">
              <div className="contact-form__field">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tuemail@ejemplo.com"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Ej. 1145454545"
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Escríbenos tu consulta o comentario"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-form__button">Enviar</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
