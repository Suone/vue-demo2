// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import api from '@/api';
import constant from '@/constant';
import store from '@/store';
import router from '@/router';
import ElementUI from 'element-ui';
import scripts from '@/scripts';
import '@/assets/styles';
import App from '@/App';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$const = constant;
Vue.prototype.$scripts = scripts;
Vue.config.silent = true;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
