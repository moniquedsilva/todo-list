import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from './store'

const todoApp = createApp(App)
todoApp.use(store)
todoApp.mount('#app')
