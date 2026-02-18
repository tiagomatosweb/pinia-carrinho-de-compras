<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <h1 class="display-5 fw-bold">🛒 Carrinho de Compras</h1>
        <p class="text-muted">Aprenda Pinia construindo um carrinho completo</p>
      </div>
    </div>

    <div class="row g-4">
      <ProductList :products="products" />
      
      <Cart />
    </div>
  </div>
</template>

<script setup>
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'

const products = [
  {
    id: 1,
    name: "Notebook Gamer",
    description: "Notebook com placa de vídeo dedicada, ideal para jogos e trabalho pesado.",
    price: 3999,
    image: "/images/laptop.webp",
  },
  {
    id: 2,
    name: "Mouse Gamer RGB",
    description: "Mouse com iluminação RGB, 7 botões programáveis e DPI ajustável.",
    price: 299,
    image: "/images/mouse.webp",
  },
  {
    id: 3,
    name: "Teclado Mecânico",
    description: "Teclado mecânico com switches Cherry MX, iluminação RGB e cabo removível.",
    price: 599,
    image: "/images/keyboard.webp",
  },
  {
    id: 4,
    name: "Monitor 27\" 4K",
    description: "Monitor Ultra HD com tecnologia IPS, 144Hz e suporte para HDR.",
    price: 2499,
    image: "/images/monitor.webp",
  },
]
</script>
