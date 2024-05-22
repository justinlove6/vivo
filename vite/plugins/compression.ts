import compression from 'vite-plugin-compression'

// 打包压缩
export default (env: ImportMetaEnv): any => {
  const { VITE_BUILD_COMPRESS } = env
  const plugin = []
  if (VITE_BUILD_COMPRESS) {
    const compressList = VITE_BUILD_COMPRESS.split(',')
    if (compressList.includes('gzip')) {
      plugin.push(
        compression({
          ext: '.gz',
          deleteOriginFile: false,
          verbose: true,
          disable: false,
          threshold: 1024 * 10,
          algorithm: 'gzip'
        })
      )
    }
  }
  return plugin
}
