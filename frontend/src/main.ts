import '@/library/assets/scss/main.scss';

import App from './App.vue';
import router from './library/modules/router';
import { createGeorgeApp } from '@/library/modules/createGeorgeApp';

const app = createGeorgeApp(App);

app.use(router);

app.mount('#app');
