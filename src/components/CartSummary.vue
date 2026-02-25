<template>
<div class="cart-summary">
  <h5 class="mb-4">
    <i class="bi bi-cart3"></i> Seu Carrinho
    <span class="badge bg-primary rounded-pill ms-2">{{ cartStore.totalItems }}</span>
  </h5>

  <!-- Itens do Carrinho -->
  <div id="cart-items">
    <CartItem 
      v-for="item in cartStore.items"
      :key="item.id"
      :item="item"
    />
  </div>

  <!-- Resumo do Carrinho -->
  <div class="border-top pt-3 mt-3">
    <div class="d-flex justify-content-between mb-3">
      <span class="fw-bold">Total:</span>
      <span class="h5 mb-0 text-primary fw-bold">{{ formatPrice(cartStore.totalPrice) }}</span>
    </div>
    <button class="btn btn-success w-100 mb-2">
      <i class="bi bi-check-circle"></i> Finalizar Compra
    </button>
    <button 
      class="btn btn-outline-secondary w-100"
      @click="cartStore.clearItems"
    >
      <i class="bi bi-arrow-counterclockwise"></i> Limpar Carrinho
    </button>
  </div>
</div>
</template>

<script setup>
import CartItem from './CartItem.vue';
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore()

const formatPrice = value => value.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})


</script>