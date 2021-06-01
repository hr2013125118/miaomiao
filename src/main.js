import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

const app = createApp(App)

//vue2写法
// app.filter('setWH', (url, arg) => {
//   return url.replace(/w\.h/, arg)
// })

// vue2写法
// app.prototype.axios = axios;
// vue3.0写法
// vue2.0中是通过Vue.prototype.$axios = axios 进行挂载的，vue3.0要通过app.config.globalProperties.$axios = axios进行挂载)
app.config.globalProperties.$axios = axios

app.use(store).use(router).mount('#app')

