import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import '@/assets/styles/index.scss'
// eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css' // uno.css

const app = createApp(App)

app.use(router)

app.mount('#app')
