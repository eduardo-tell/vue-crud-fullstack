<template>
  <section class="page">
    <h2>Cadastro</h2>

    <form class="form" @submit.prevent="handleSubmit">
      <p v-if="store.error" class="error">
        {{ store.error }}
      </p>

      <BaseInput
        v-model="name"
        label="Nome"
      />

      <BaseInput
        v-model="email"
        label="Email"
      />

      <BaseButton>
        Salvar
      </BaseButton>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import BaseButton from '../components/ui/BaseButton.vue'
import BaseInput from '../components/ui/BaseInput.vue'

import { useUserStore } from '../stores/userStore'

const router = useRouter()

const store = useUserStore()

const name = ref('')
const email = ref('')

/**
 * Fluxo simples de persistência.
 * Em sistemas maiores:
 * - validações
 * - tratamento de erro
 * - loading
 * podem ser extraídos para composables.
 */
const handleSubmit = async () => {
  try {
    await store.createUser({
      name: name.value,
      email: email.value,
    })

    name.value = ''
    email.value = ''

    router.push('/list')
  } catch {
    // erro exibido via store.error
  }
}
</script>