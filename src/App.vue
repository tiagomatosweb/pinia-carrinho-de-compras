
<template>
  <pre>
    {{  cartStore }}
  </pre>
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
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0"><i class="bi bi-box-seam"></i> Produtos Disponíveis</h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- Produto 1 -->
              <div class="col-md-6">
                <div class="card product-card h-100">
                  <img src="/images/laptop.webp" class="card-img-top" alt="Notebook Gamer">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Notebook Gamer</h5>
                    <p class="card-text text-muted small">Notebook com placa de vídeo dedicada, ideal para jogos e
                      trabalho pesado.</p>
                    <div class="mt-auto">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="h4 mb-0 text-primary">R$ 3.999,00</span>
                      </div>
                      <button class="btn btn-primary w-100">
                        <i class="bi bi-cart-plus"></i> Adicionar ao Carrinho
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Produto 2 -->
              <div class="col-md-6">
                <div class="card product-card h-100">
                  <img src="/images/mouse.webp" class="card-img-top" alt="Mouse Gamer RGB">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Mouse Gamer RGB</h5>
                    <p class="card-text text-muted small">Mouse com iluminação RGB, 7 botões programáveis e DPI
                      ajustável.</p>
                    <div class="mt-auto">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="h4 mb-0 text-primary">R$ 299,00</span>
                      </div>
                      <button class="btn btn-primary w-100">
                        <i class="bi bi-cart-plus"></i> Adicionar ao Carrinho
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Produto 3 -->
              <div class="col-md-6">
                <div class="card product-card h-100">
                  <img src="/images/keyboard.webp" class="card-img-top" alt="Teclado Mecânico">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Teclado Mecânico</h5>
                    <p class="card-text text-muted small">Teclado mecânico com switches Cherry MX, iluminação RGB e cabo
                      removível.</p>
                    <div class="mt-auto">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="h4 mb-0 text-primary">R$ 599,00</span>
                      </div>
                      <button class="btn btn-primary w-100">
                        <i class="bi bi-cart-plus"></i> Adicionar ao Carrinho
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Produto 4 -->
              <div class="col-md-6">
                <div class="card product-card h-100">
                  <img src="/images/monitor.webp" class="card-img-top" alt='Monitor 27" 4K'>
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Monitor 27" 4K</h5>
                    <p class="card-text text-muted small">Monitor Ultra HD com tecnologia IPS, 144Hz e suporte para HDR.
                    </p>
                    <div class="mt-auto">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="h4 mb-0 text-primary">R$ 2.499,00</span>
                      </div>
                      <button class="btn btn-primary w-100">
                        <i class="bi bi-cart-plus"></i> Adicionar ao Carrinho
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coluna Direita: Carrinho -->
      <div class="col-lg-4">
        <div class="cart-summary">
          <h5 class="mb-4">
            <i class="bi bi-cart3"></i> Seu Carrinho
            <span class="badge bg-primary rounded-pill ms-2">3</span>
          </h5>

          <!-- Itens do Carrinho -->
          <div id="cart-items">
            <!-- Item 1 -->
            <div class="cart-item">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="flex-grow-1">
                  <h6 class="mb-1">Notebook Gamer</h6>
                  <p class="text-muted small mb-0">R$ 3.999,00</p>
                </div>
                <button class="btn btn-sm btn-outline-danger">
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
                <span class="ms-auto text-muted">R$ 3.999,00</span>
              </div>
            </div>

            <!-- Item 2 -->
            <div class="cart-item">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="flex-grow-1">
                  <h6 class="mb-1">Mouse Gamer RGB</h6>
                  <p class="text-muted small mb-0">R$ 299,00</p>
                </div>
                <button class="btn btn-sm btn-outline-danger">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
              <div class="quantity-control">
                <button class="btn btn-sm btn-outline-secondary btn-quantity">
                  <i class="bi bi-dash"></i>
                </button>
                <span class="fw-bold">2</span>
                <button class="btn btn-sm btn-outline-secondary btn-quantity">
                  <i class="bi bi-plus"></i>
                </button>
                <span class="ms-auto text-muted">R$ 598,00</span>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="cart-item">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="flex-grow-1">
                  <h6 class="mb-1">Teclado Mecânico</h6>
                  <p class="text-muted small mb-0">R$ 599,00</p>
                </div>
                <button class="btn btn-sm btn-outline-danger">
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
                <span class="ms-auto text-muted">R$ 599,00</span>
              </div>
            </div>
          </div>

          <!-- Resumo do Carrinho -->
          <div class="border-top pt-3 mt-3">
            <div class="d-flex justify-content-between mb-3">
              <span class="fw-bold">Total:</span>
              <span class="h5 mb-0 text-primary fw-bold">R$ 5.196,00</span>
            </div>
            <button class="btn btn-success w-100 mb-2">
              <i class="bi bi-check-circle"></i> Finalizar Compra
            </button>
            <button class="btn btn-outline-secondary w-100">
              <i class="bi bi-arrow-counterclockwise"></i> Limpar Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCartStore} from './stores/cart'

const cartStore = useCartStore()
</script>