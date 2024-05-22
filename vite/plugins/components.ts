import components from 'unplugin-vue-components/vite'

// 自动导入组件
export default () => {
  return components({
    dts: '../../types/components.d.ts'
  })
}
