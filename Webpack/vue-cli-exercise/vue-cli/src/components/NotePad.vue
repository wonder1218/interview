<template>
  <a-layout>
            <a-layout-header class="header">
                <div>{{title}}</div>
                <div class="header-nav">
                    <router-link to="/counter">计步器</router-link>
                     <router-link to="/login">登录</router-link>
                </div>
            </a-layout-header>
            <a-layout-content class="content">
                <transition name="slide">
                    <router-view></router-view>
                </transition>
                

            </a-layout-content>
  </a-layout>
</template>


<script>
// es6

export default {
name: 'NotePad',
  data(){
  return{
    title: "单页面记事本",

  }
  },
  methods:{
     check() {
            this.form.validateFields(err => {
                if (!err) {
                    console.info('success');
                }
            });
        },
        handleChange(e) {
            this.checkNick = e.target.checked;
            this.$nextTick(() => {
                this.form.validateFields(['nickname'], { force: true });
            });
        },
       
       
        
        
       
        
  },
  
}
</script>
<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    color: #fff;
}
.header-nav{
    width: 100px;
    display: flex;
    justify-content: space-between;
}
.content{
 height: calc(100vh - 64px - 24px);
}
/* //页面进入前的样式 */
.slide-enter{
position: absolute;
right: -100%;

}
/* 页面进入后的样式 */
.slide-enter-to{
position: absolute;
right: 0;
}
.slide-enter-active,.slide-leave-active{
    transition: all 0.75s ease-out;
}
/* 离开之前的样式 */
.slide-leave{
    position: absolute;
    opacity: 1;
}
/* 离开后的样式 */
.slide-leave-to{
    position: absolute;
    opacity: 0;
}

</style>