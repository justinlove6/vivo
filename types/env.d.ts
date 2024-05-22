/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: string
  readonly VITE_BUILD_COMPRESS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
