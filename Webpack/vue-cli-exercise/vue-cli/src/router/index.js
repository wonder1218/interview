import Vue from 'vue'
import Counter from "@/components/Counter"
import Login from "@/components/Login"
import VueRouter from "vue-router";
import NotePad from "@/components/NotePad";
import List from "@/components/List"
import Detail from "@/components/Detail"
Vue.use(VueRouter);
//配置规则(路由)
const routes = [{
            path: "/login",
            component: Login
        },
        {
            path: "/counter",
            component: Counter
        },
        {
            path: "/",
            redirect: {
                path: "/notepad/list"
            }
        },
        {
            path: "/notepad",
            // name:"",命名路由
            component: NotePad,
            children: [{
                    path: "list",
                    component: List
                },
                {
                    path: "detail",
                    component: Detail
                },
            ]
        },

    ]
    //创建（new）路由的事例
const router = new VueRouter({
    routes
});
export default router;