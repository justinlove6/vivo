import autoImport from 'unplugin-auto-import/vite'

// 自动导入
export default () => {
  return autoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    dts: '../../types/auto-imports.d.ts'
  })
}
