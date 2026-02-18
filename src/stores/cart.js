import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    totalItems() {
      return this.items.reduce((sum, item) => sum + item.qty, 0)
    },
    total() {
      return this.items.reduce((sum, item) => sum + item.product.price * item.qty, 0)
    },
  },
  actions: {
    addItem(product) {
      const existing = this.items.find((item) => item.product.id === product.id)
      if (existing) {
        existing.qty++
      } else {
        this.items.push({ product, qty: 1 })
      }
    },
    incrementQuantity(productId) {
      const item = this.items.find((i) => i.product.id === productId)
      if (item) item.qty++
    },
    decrementQuantity(productId) {
      const item = this.items.find((i) => i.product.id === productId)
      if (item) {
        if (item.qty > 1) {
          item.qty--
        } else {
          this.items = this.items.filter((i) => i.product.id !== productId)
        }
      }
    },
    removeItem(productId) {
      this.items = this.items.filter((item) => item.product.id !== productId)
    },
    clearItems() {
      this.items = []
    },
  },
})