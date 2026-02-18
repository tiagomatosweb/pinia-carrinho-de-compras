<template>
  <div class="col-lg-8">
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h5 class="mb-0"><i class="bi bi-box-seam"></i> Produtos Disponíveis</h5>
      </div>
      <div class="card-body">
        <div class="row g-3">
          <ProductCard
            v-for="product in props.products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
})
</script>
