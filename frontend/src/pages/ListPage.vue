<template>
  <section class="page">
    <h2>Usuários cadastrados</h2>

    <div v-if="store.loading">
      Carregando...
    </div>

    <ul class="list">
      <li
        v-for="user in store.users"
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