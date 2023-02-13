import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())

declare global {
    interface Window {
        handleLogin(response: any): void;
    }
}
app.mount('#app')
