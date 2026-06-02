<template>
  <div class="container">
    <header class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
      <h1 class="text-2xl font-bold tracking-tight text-gray-900">Cadastro de Usuários</h1>

      <nav class="flex items-center gap-6 max-lg:hidden">
        <RouterLink class="inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80" to="/">Cadastro</RouterLink>
        <RouterLink class="inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80" to="/list">Lista</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
</script>