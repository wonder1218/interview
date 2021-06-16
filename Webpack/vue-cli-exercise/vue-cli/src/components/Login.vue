<template>
<div><h1>登录</h1>
<div>计步器:{{$store.state.count}}</div>
<a-button @click="back">返回</a-button>
</div>
    
</template>
<script>
export default {
    name:"Login",
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>