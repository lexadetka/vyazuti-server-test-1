import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import components from '@/components/UI'

const app = createApp(App)
components.forEach(component => {
    app.component((component.name, component))
})
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
