<template>
<div>
    <h1>计步器:{{$store.state.count}}</h1>
    <a-button @click="increment">+</a-button>
    <a-button @click="decrement">-</a-button>
<a-button @click="back">返回</a-button>
</div>
    
</template>
<script>
export default {
    name:"Counter",
    methods:{
        back(){
            this.$router.go(-1);
        },
        increment(){
            this.$store.commit("add")
        },
        decrement(){
            this.$store.commit("sub")
        }
    }
}
</script>