import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [1,2,3,4]
  }),

  actions: {},

  getters: {},
})