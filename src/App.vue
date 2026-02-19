
<template>
 <div class="container">
    <div class="row mb-4">
      <div class="col">
        <h1 class="display-5 fw-bold">🛒 Carrinho de Compras</h1>
        <p class="text-muted">Aprenda Pinia construindo um carrinho completo</p>
      </div>
    </div>

    <div class="row g-4">
      <!-- Coluna Esquerda: Lista de Produtos -->
      <div class="col-lg-8">
        <ProductList/>
      </div>

      <!-- Coluna Direita: Carrinho -->
      <div class="col-lg-4">
        <CartSummary />
      </div>
    </div>
  </div>
</template>

<script setup>
import CartSummary from './components/CartSummary.vue';
import ProductList from './components/ProductList.vue';
import {useCartStore} from './stores/cart'

const cartStore = useCartStore()
</script>