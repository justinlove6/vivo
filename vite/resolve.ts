import { fileURLToPath, URL } from 'node:url'

export default function createResolve() {
  return {
    alias: {
      '@': fileURLToPath(new URL('../src', import.meta.url))
    }
  }
}
