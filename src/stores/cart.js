import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  actions: {
    addItem(product) {
      const existing = this.items.find(o => o.id === product.id)

      if (existing) {
        existing.qty++
      } else {
        this.items.push({ ...product, qty: 1})
      }
    },

    removeItem(id) {
      this.items = this.items.filter(o => o.id !== id)
    },

    incrementQty(id) {
      const item = this.items.find(o => o.id === id)
      if (item) {
        item.qty++
      }
    },

    decrementQty(id) {
      const item = this.items.find(o => o.id === id)
      if (item) {
        if (item.qty > 1) {
          item.qty--
        } else {
          this.removeItem(id)
        }
      }
    },

    clearItems() {
      this.items = []
    }
  },

  getters: {
    totalItems() {
      return this.items.reduce((total, item) => {
        return total + item.qty
      }, 0)
    },

    totalPrice() {
      return this.items.reduce((total, item) => {
        return total + (item.price * item.qty)
      }, 0)
    }
  },
})