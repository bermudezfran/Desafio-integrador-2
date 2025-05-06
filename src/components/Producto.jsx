import React, { useState } from "react";
import { productos } from "../../data/productos.json"
import "../sass/main.scss";
import { Modal } from "./modal/Modal";

export const Producto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product); 
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false); 
  };

  return (
    <section className="card-container" id="cards-container">
      {productos.map((prod) => (
        <div className="card" key={prod.id}>
          <article className="card__article">
            <div className="card__image-container">
              <img className="card__image" src={prod.foto} alt={prod.nombre} />
            </div>
            <div className="card__content">
              <h2 className="card__heading">{prod.nombre}</h2>
              <button
                className="card__boton"
                onClick={() => handleOpenModal(prod)}
              >
                Ver auto
              </button>
            </div>
          </article>
        </div>
      ))}

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <img className="card__image" src={selectedProduct?.foto} alt={selectedProduct?.nombre} />
          <h2 className="card__heading">{selectedProduct?.nombre}</h2>
          <div className="card__description">
                <p>
                  <b>${selectedProduct.precio}</b>
                </p>
                <p>{selectedProduct.descripcion}</p>
              </div>
          <button className="card__boton" style={{ margin: 'auto', marginTop: '10px' }}>Agregar al carrito</button>
        </Modal>
      )}
    </section>
  );
};
