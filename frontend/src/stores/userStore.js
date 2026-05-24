import { defineStore } from 'pinia'
import { api } from '../services/api'

/**
 * Store centralizada.
 * Mantém estado compartilhado e escalável.
 */
export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
    loading: false,
  }),

  actions: {
    async fetchUsers() {
      this.loading = true

      try {
        const response = await api.get('/users')
        this.users = response.data
      } finally {
        this.loading = false
      }
    },

    async createUser(payload) {
      await api.post('/users', payload)
      await this.fetchUsers()
    },
  },
})