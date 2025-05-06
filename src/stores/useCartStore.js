import { create } from 'zustand'

export const useCartStore = create((set) => ({
  items: [],
  addItem: (product, qty = 1) =>
    set((state) => {
      const exists = state.items.find(i => i.product.id === product.id)
      if (exists) {
        return {
          items: state.items.map(i =>
            i.product.id === product.id
              ? { ...i, qty: i.qty + qty }
              : i
          )
        }
      }
      return { items: [...state.items, { product, qty }] }
    }),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter(i => i.product.id !== id) })),
  clearCart: () => set({ items: [] })
}))
