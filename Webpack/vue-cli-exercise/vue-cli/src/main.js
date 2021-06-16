import "@/antd";
import Vue from 'vue'
import App from '@/App.vue'
import router from "@/router"
import '@/assets/css/common.css'
import store from '@/store'
// import Antd from 'ant-design-vue'

Vue.config.productionTip = false;

//将路由的事例，传入Vue实例中
new Vue({
    router,
    store,
    render: function(h) { return h(App) },
}).$mount('#app')