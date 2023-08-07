import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MasterComponent from './views/backend/layouts/master/MasterComponent.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('MasterComponent', MasterComponent)
app.mount('#app')
