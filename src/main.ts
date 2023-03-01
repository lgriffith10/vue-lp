import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import '@/styles/main.scss'
import App from '@/App.vue'
import { routes } from '@/router';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
