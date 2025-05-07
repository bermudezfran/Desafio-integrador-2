import React, { useState, useEffect } from "react"
import api from "../services/api"
import { Modal } from "./modal/Modal"
import { useCartStore } from "../stores/useCartStore"

export const Producto = () => {
  const addItem = useCartStore(state => state.addItem)
  const [products, setProducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/products")
        setProducts(data)
      } catch (err) {
        console.error("Error al obtener productos:", err)
      }
    }
    fetchProducts()
  }, [])

  const handleOpenModal = product => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
    setIsModalOpen(false)
  }

  const handleAddToCart = () => {
    addItem(selectedProduct, 1)
    setIsModalOpen(false)
  }

  return (
    <section className="card-container" id="cards-container">

      {products.length > 0 ? products.map(prod => (
        <div className="card" key={prod._id}>
          <article className="card__article">
            <div className="card__image-container">
              <img
                className="card__image"
                src={prod.image}
                alt={prod.name}
              />
            </div>
            <div className="card__content">
              <h2 className="card__heading">{prod.name}</h2>
              <button
                className="card__boton"
                onClick={() => handleOpenModal(prod)}
              >
                Ver detalle
              </button>
            </div>
          </article>
        </div>
    ))
    : (
      <>
        <p>No hay autos para mostrar...</p>
      </>
    )}

      {isModalOpen && selectedProduct && (
        <Modal isOpen onClose={handleCloseModal}>
          <img
            className="card__image"
            src={selectedProduct.image}
            alt={selectedProduct.name}
          />
          <h2 className="card__heading">{selectedProduct.name}</h2>
          <div className="card__description">
            <p>
              <b>$ {selectedProduct.price}</b>
            </p>
            <p>{selectedProduct.description}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="card__boton"
            style={{ margin: "auto", marginTop: 10 }}
          >
            Agregar al carrito
          </button>
        </Modal>
      )}
    </section>
  )
}
