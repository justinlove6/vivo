import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerDirective from '@unocss/transformer-directives'
import { defineConfig, presetAttributify, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetRemToPx({ baseFontSize: 4 })],
  transformers: [transformerVariantGroup(), transformerDirective()],
  rules: [],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',
      'flex-end': 'flex items-center justify-end',
      'flex-middle': 'flex items-center',
      'flex-between': 'flex items-center justify-between',
      'flex-col-center': 'flex flex-col justify-center'
    }
  ]
})
