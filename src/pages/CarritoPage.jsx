import React from "react"
import { Header } from "../components/Header"
import { useCartStore } from "../stores/useCartStore"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

export const CarritoPage = () => {
  const navigate = useNavigate()
  const items     = useCartStore(state => state.items)
  const removeItem= useCartStore(state => state.removeItem)
  const clearCart = useCartStore(state => state.clearCart)

  const total = items.reduce(
    (acc, { product, qty }) => acc + product.price * qty,
    0
  )

  const handlePurchase = async () => {
    if (items.length === 0) return
    try {
      const payload = {
        items: items.map(({ product, qty }) => ({
          productId: product._id,
          qty
        }))
      }

      await api.post("/orders", payload)

      clearCart()
      navigate("/")  
    } catch (err) {
      console.error("Error al crear compra:", err)
    }
  }

  return (
    <>
      <Header />
      <div className="cart">
        {items.length > 0 ? (
          items.map(({ product, qty }) => (
            <div key={product._id} className="cartItem">
              <div className="imgContainer">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <span className="price">
                  Precio: ${product.price} × {qty}
                </span>
                <button
                  className="deleteItem"
                  onClick={() => removeItem(product._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Tu carrito está vacío</p>
        )}

        {items.length > 0 && (
          <div className="actions" style={{ marginTop: "1rem" }}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button
              className="button-submit"
              onClick={handlePurchase}
            >
              Comprar
            </button>
          </div>
        )}
      </div>
    </>
  )
}
