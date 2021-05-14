import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlusPlugin from './plugins/element-plus'
import './serve/config'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(elementPlusPlugin)

app.mount('#app')
