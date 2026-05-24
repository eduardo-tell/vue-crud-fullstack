<template>
  <div class="container">
    <header class="header">
      <h1>Vue Study Project</h1>

      <nav class="nav">
        <RouterLink to="/">Cadastro</RouterLink>
        <RouterLink to="/list">Lista</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
</script>