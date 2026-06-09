<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<script setup>
/**
 * Componente simples, porém reutilizável.
 * Em aplicações escaláveis isso evita duplicação.
 */
</script>

<style scoped>
  .base-button {
    padding: 12px 20px;
    border: none;
    background: #111827;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s
  }
  .base-button:hover {
    background: #383838;
  }
</style>