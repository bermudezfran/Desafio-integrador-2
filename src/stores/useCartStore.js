
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (product, qty = 1) =>
        set((state) => {
          const exists = state.items.find(i => i.product._id === product._id)
          if (exists) {
            return {
              items: state.items.map(i =>
                i.product._id === product._id
                  ? { ...i, qty: i.qty + qty }
                  : i
              )
            }
          }
          return { items: [...state.items, { product, qty }] }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(i => i.product._id !== id)
        })),
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage',
      getStorage: () => localStorage
    }
  )
)
