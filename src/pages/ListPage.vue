<template>
  <section class="mx-auto max-w-7xl px-6 lg:px-8 mt-5">
    <h2 class="text-4xl font-medium tracking-tight text-gray-900">Usuários cadastrados</h2>

    <div v-if="store.loading">
      Carregando...
    </div>

    <p v-else-if="store.error" class="error">
      {{ store.error }}
    </p>

    <ul v-else class="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
      <li
        v-for="user in store.bancousuarios"
        :key="user.id"
        class="rounded-2xl border border-gray-200 p-8 flex flex-col items-left"
      >
        <strong class="text-2xl font-semibold text-gray-900">{{ user.name }}</strong>
        <span class="text-md mt-1 text-gray-600">{{ user.email }}</span>
        <div class="flex gap-1">
          <BaseButton class="mt-1 mt-6" @click="store.deleteUser(user.id)">
            Excluir
          </BaseButton>
          <BaseButton class="mt-1 mt-6" @click="store.editar(user.id)">
            Editar
          </BaseButton>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.flex {
  display: flex;
}
.gap-1{
  gap: 1rem;
}
</style>

<script setup>
import BaseButton from '../components/ui/BaseButton.vue';
/**
 'onMounted' é usado para executar só quando a tela estiver pronta.
*/
import { onMounted } from 'vue'

import { gerenciadorDeUsuarios } from '../stores/userStore'

const store = gerenciadorDeUsuarios()

onMounted(() => {
  store.fetchUsers()
})
</script>