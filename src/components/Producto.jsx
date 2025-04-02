import React from "react";
import productos from "../db/productos";

export const Producto = () => {
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
