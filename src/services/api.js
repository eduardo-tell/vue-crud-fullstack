import axios from 'axios'

/**
 * Centralização da comunicação HTTP.
 * Em projetos grandes isso facilita:
 * - troca de baseURL
 * - interceptors
 * - autenticação
 * - logs
 */
export const api = axios.create({
  baseURL: 'http://localhost:3001',
})