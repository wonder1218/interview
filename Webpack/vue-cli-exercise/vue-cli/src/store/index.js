import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    //状态
    state: {
        count: 0, //全局状态的变量count 计数器
        dataList: [{
                id: "1",
                title: "事项1",
                content: "内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
            },
            {
                id: "2",
                title: "事项2",
                content: "内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
            },
            {
                id: "3",
                title: "事项3",
                content: "内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
            },
        ],

    },
    //转变，改变
    mutations: {
        add(state) {
            state.count++
        },
        sub(state) {
            state.count--
        },
        del(state, index) {
            state.dataList.splice(index, 1)
        },
        delById(state, id) {
            state.dataList = state.dataList.filter(item => item.id === id ? false : true)
        },
        onSearch(state, searchContent) {
            // console.log(this.searchContent)
            state.dataList = state.dataList.filter((item) => {
                if (item.title.indexOf(searchContent) < 0 && item.content.indexOf(searchContent) < 0) {
                    return false
                } else {
                    return true
                }
            })
        },
        updateFormdata(state, obj) {
            state.dataList.map(item => {
                if (item.id === obj.id) {
                    return item = obj
                }
                return
            })
        },
        subFormdata(state, obj) {
            state.dataList.push(obj);
            console.log(obj);
        }

    },
    getters: {
        newName() {

        },
        formdata(state) {
            return function(id) {
                return state.dataList.filter(item => item.id === id ? true : false)[0]
            }
        }
    },
});
export default store;