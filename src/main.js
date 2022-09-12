import Vue from 'vue';

import { createApp } from 'vue';
import App from "./App";
import components from '@/components/UI';
import { Axios } from 'axios';

const app = createApp(App)



components.forEach(component => {
    app.component(component.name, component)
})

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

app.mount('#app')
