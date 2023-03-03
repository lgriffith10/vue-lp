/* App */
import { createApp } from 'vue'
import App from '@/App.vue'

/* Data management */
import { VueQueryPlugin } from "vue-query";

/* Router */
import { createRouter, createWebHistory } from "vue-router";
import { routes } from '@/router';

/* Components */
import ElementPlus from 'element-plus';

/* Styles */
import 'element-plus/dist/index.css'
import '@/styles/main.scss'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .use(VueQueryPlugin)
    .use(ElementPlus)
    .mount('#app')
