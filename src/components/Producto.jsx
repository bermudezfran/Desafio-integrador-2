import React, { useEffect } from "react";
import productos from "../db/productos";
import '../sass/main.scss';

export const Producto = () => {
  useEffect(() => {
      const themeToggle = document.querySelector('.theme-toggle');
      if (themeToggle) {
        
        if (localStorage.getItem('theme') === 'dark') {
          document.body.classList.add('dark-theme'); // Corregido: classList en lugar de classNameList
          themeToggle.textContent = '⚪';
        }
  
        themeToggle.addEventListener('click', () => {
          document.body.classList.toggle('dark-theme'); // Corregido: classList en lugar de classNameList
  
          if (document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = '⚪';
            localStorage.setItem('theme', 'dark');
          } else {
            themeToggle.textContent = '⚫';
            localStorage.setItem('theme', 'light');
          }
        });
      }
  
      
      return () => {
        if (themeToggle) {
          themeToggle.removeEventListener('click', () => {}); // Elimina el listener
        }
      };
    }, []);

  return productos.map((prod, idx) => (
    <section className="card-container" id="cards-container" key={idx}>
      <div className="card">
        <article className="card__article">
          <div className="card__image-container">
            <img
              className="card__image"
              src={prod.foto}
              alt={prod.nombre}
            />
          </div>
          <div className="card__content">
            <h2 className="card__heading">{prod.nombre}</h2>
            <div className="card__description">
              <p>
                <b>{prod.precio}</b>
              </p>
              <p>{prod.descripcion}</p>
            </div>
            <a className="card__boton" href="#">
              COMPRAR
            </a>
          </div>
        </article>
      </div>
    </section>
  ));
};
