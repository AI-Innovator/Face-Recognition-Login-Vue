import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import Notifications from 'notiwind'
import './index.css'
import router from './router/index'

createApp(App)
    .use(router)
    .use(store)
    .use(Notifications)
    .mount('#app')
