import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import MedicineUI from './components/MedicineUI'

const app = createApp(App)
app.use(MedicineUI)
app.mount('#app')
