import { defineStore } from 'pinia'

import { supabase } from '../lib/supabase'

/**
 * Store centralizada.
 * Mantém estado compartilhado e escalável.
 */
export const gerenciadorDeUsuarios = defineStore('gerenciadorDeUsuarios', {
  state: () => ({
    users: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null

      try {
        const { data, error } = await supabase
          .from('primeiroteste')
          .select('id, name, email')
          .order('id', { ascending: false })

        if (error) throw error

        this.primeiroteste = data ?? []
      } catch (error) {
        this.error = error.message ?? 'Erro ao carregar usuários'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async createUser(payload) {
      this.error = null

      const { error } = await supabase.from('primeiroteste').insert(payload)

      if (error) {
        this.error = error.message ?? 'Erro ao salvar usuário'
        throw error
      }

      await this.fetchUsers()
    },

    async deleteUser(id) {
      this.error = null

      const { error } = await supabase.from('primeiroteste').delete().eq('id', id)

      if (error) {
        this.error = error.message ?? 'Erro ao deletar usuário'
        throw error
      }

      await this.fetchUsers()
    },
  },
})
