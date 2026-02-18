<template>
  <div class="col-lg-4">
    <div class="cart-summary">
      <h5 class="mb-4">
        <i class="bi bi-cart3"></i> Seu Carrinho
        <span class="badge bg-primary rounded-pill ms-2">{{ cartStore.totalItems }}</span>
      </h5>

      <div id="cart-items">
        <div v-for="item in cartStore.items" :key="item.product.id" class="cart-item">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <div class="flex-grow-1">
              <h6 class="mb-1">{{ item.product.name }}</h6>
              <p class="text-muted small mb-0">{{ formatPrice(item.product.price) }}</p>
            </div>
            <button class="btn btn-sm btn-outline-danger" @click="cartStore.removeItem(item.product.id)">
              <i class="bi bi-trash"></i>
            </button>
          </div>
          <div class="quantity-control">
            <button class="btn btn-sm btn-outline-secondary btn-quantity" @click="cartStore.decrementQuantity(item.product.id)">
              <i class="bi bi-dash"></i>
            </button>
            <span class="fw-bold">{{ item.qty }}</span>
            <button class="btn btn-sm btn-outline-secondary btn-quantity" @click="cartStore.incrementQuantity(item.product.id)">
              <i class="bi bi-plus"></i>
            </button>
            <span class="ms-auto text-muted">{{ formatPrice(item.product.price * item.qty) }}</span>
          </div>
        </div>
      </div>

      <div class="border-top pt-3 mt-3">
        <div class="d-flex justify-content-between mb-3">
          <span class="fw-bold">Total:</span>
          <span class="h5 mb-0 text-primary fw-bold">{{ formatPrice(cartStore.total) }}</span>
        </div>
        <button class="btn btn-success w-100 mb-2">
          <i class="bi bi-check-circle"></i> Finalizar Compra
        </button>
        <button class="btn btn-outline-secondary w-100" @click="cartStore.clearItems()">
          <i class="bi bi-arrow-counterclockwise"></i> Limpar Carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const formatPrice = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
</script>
