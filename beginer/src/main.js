import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import About from "./components/About.vue"
import NotFound from "./components/Notfound.vue"
import HelloWorld from "./components/HelloWorld.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/nothing',
        component: {template:'Nothing'} // it't nothing
      },
      {
        path: '/About',
        component: About
      },
      {
        path: '/Notfound',
        component: NotFound
      },
      {
        path:"/",
        component:HelloWorld
      }
    ]
});

const app = createApp(App)
app.use(router)
app.mount("#app")

