import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

import '@iconify/iconify'
import '@purge-icons/generated'

import './styles/main.css'
import 'notyf/notyf.min.css'
import router from './router'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
