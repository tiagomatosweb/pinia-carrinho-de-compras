<template>
<div class="card product-card h-100">
  <img :src="props.product.image" class="card-img-top" alt="Notebook Gamer">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">{{ props.product.name }}</h5>
    <p class="card-text text-muted small">{{ props.product.description }}</p>
    <div class="mt-auto">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="h4 mb-0 text-primary">{{ formatPrice(props.product.price) }}</span>
      </div>
      <button 
        class="btn btn-primary w-100"
        @click="cartStore.addItem(props.product)"
      >
        <i class="bi bi-cart-plus"></i> Adicionar ao Carrinho
      </button>
    </div>
  </div>
</div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';

const props = defineProps({
  product: {
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