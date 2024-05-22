export default function createCss() {
  return {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use "../src/assets/styles/variables.scss" as *;
            @use "../src/assets/styles/mixin.scss" as *;`,
        javascriptEnabled: true
      }
    }
  }
}
