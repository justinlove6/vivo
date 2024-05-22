import presetRemToPx from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerVariantGroup,
  presetIcons
} from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetRemToPx({ baseFontSize: 4 }),
    presetIcons({ scale: 1.2, warn: true })
  ],
  transformers: [transformerVariantGroup()],
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
