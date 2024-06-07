import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router'

// 创建vue实列
const app = createApp(App)

// 挂载pinia
app.use(store)
app.use(router)

// 挂载示例
app.mount('#app')
