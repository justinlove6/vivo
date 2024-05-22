import { defineConfig, loadEnv } from 'vite'

import createBuild from './vite/build'
import createCss from './vite/css'
import createVitePlugins from './vite/plugins'
import createResolve from './vite/resolve'
import wrapperEnv from './vite/utils'

export default defineConfig(({ mode, command }) => {
  const root = process.cwd() // 项目根目录
  const env = loadEnv(mode, root) // 加载.env文件
  const viteEnv = wrapperEnv(env) // 包装环境变量
  return {
    plugins: createVitePlugins(viteEnv, command === 'build'),
    resolve: createResolve(),
    css: createCss(),
    build: createBuild()
  }
})
