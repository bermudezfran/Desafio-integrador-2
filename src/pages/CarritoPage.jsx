import React from "react";
import { Header } from "../components/Header";
import { useCartStore } from "../stores/useCartStore";

export const CarritoPage = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  const total = items.reduce(
    (acc, { product, qty }) => acc + product.price * qty,
    0
  );

  return (
    <>
      <Header />
      <div className="cart">
        {items.length > 0 ? (
          items.map(({ product, qty }) => (
            <div key={product.id} className="cartItem">
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
                  onClick={() => removeItem(product.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Tu carrito está vacío</p>
        )}
        <div className="total">
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      </div>
    </>
  );
};
