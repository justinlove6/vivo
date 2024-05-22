import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'
import createComponents from './components'
import createCompression from './compression'
import createUnoCSS from './unocss'

export default function createVitePlugins(viteEnv: ImportMetaEnv, isBuild: boolean = false) {
  const vitePlugins = [vue()]
  vitePlugins.push(createUnoCSS())
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createCompression(viteEnv))
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
