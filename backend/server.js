import express from 'express'
import cors from 'cors'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const app = express()

app.use(cors())
app.use(express.json())

/**
 * Criação da conexão SQLite.
 * open() permite trabalhar com async/await.
 */
const database = await open({
  filename: './database.db',
  driver: sqlite3.Database,
})

/**
 * Inicialização do banco.
 * Em projetos maiores isso normalmente fica separado.
 */
await database.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
  )
`)

/**
 * POST /users
 * Cria novo usuário.
 */
app.post('/users', async (request, response) => {
  try {
    const { name, email } = request.body

    /**
     * Validação simples.
     * Em projetos reais:
     * - zod
     * - yup
     * - joi
     */
    if (!name || !email) {
      return response.status(400).json({
        error: 'Nome e email são obrigatórios',
      })
    }

    const result = await database.run(
      `
      INSERT INTO users (name, email)
      VALUES (?, ?)
      `,
      [name, email]
    )

    return response.status(201).json({
      id: result.lastID,
      name,
      email,
    })
  } catch (error) {
    console.error(error)

    return response.status(500).json({
      error: 'Erro interno no servidor',
    })
  }
})

/**
 * GET /users
 * Lista usuários cadastrados.
 */
app.get('/users', async (_, response) => {
  try {
    const users = await database.all(`
      SELECT *
      FROM users
      ORDER BY id DESC
    `)

    return response.json(users)
  } catch (error) {
    console.error(error)

    return response.status(500).json({
      error: 'Erro interno no servidor',
    })
  }
})

app.listen(3001, () => {
  console.log('Backend running on port 3001')
})