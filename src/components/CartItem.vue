<template>
  <div class="cart-item">
    <div class="d-flex justify-content-between align-items-start mb-2">
      <div class="flex-grow-1">
        <h6 class="mb-1">{{ props.item.name }}</h6>
        <p class="text-muted small mb-0">{{ formatPrice(props.item.price) }}</p>
      </div>
      <button 
        class="btn btn-sm btn-outline-danger"
        @click="cartStore.removeItem(props.item.id)"
      >
        <i class="bi bi-trash"></i>
      </button>
    </div>
    <div class="quantity-control">
      <button class="btn btn-sm btn-outline-secondary btn-quantity">
        <i class="bi bi-dash"></i>
      </button>
      <span class="fw-bold">1</span>
      <button class="btn btn-sm btn-outline-secondary btn-quantity">
        <i class="bi bi-plus"></i>
      </button>
      <span class="ms-auto text-muted">{{ formatPrice(props.item.price * props.item.qty) }}</span>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const formatPrice = value => value.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

const cartStore = useCartStore()
</script>