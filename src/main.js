import { createApp } from 'vue';
import App from "./App";
import components from '@/components/UI';
import router from "@/router/router";
import store from '@/store';
import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .use(BootstrapVue3)
    .mount('#app')
