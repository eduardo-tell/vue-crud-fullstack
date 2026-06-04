import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

const indexPath = resolve('dist/index.html')
const notFoundPath = resolve('dist/404.html')

copyFileSync(indexPath, notFoundPath)
