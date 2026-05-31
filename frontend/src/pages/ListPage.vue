<template>
  <section class="page">
    <h2>Usuários cadastrados</h2>

    <div v-if="store.loading">
      Carregando...
    </div>

    <p v-else-if="store.error" class="error">
      {{ store.error }}
    </p>

    <ul v-else class="list">
      <li
        v-for="user in store.primeiroteste"
        :key="user.id"
        class="card"
      >
        <strong>{{ user.name }}</strong>
        <span>{{ user.email }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
/**
 'onMounted' é usado para executar só quando a tela estiver pronta.
*/
import { onMounted } from 'vue'

import { useUserStore } from '../stores/userStore'

const store = useUserStore()

onMounted(() => {
  store.fetchUsers()
})
</script>