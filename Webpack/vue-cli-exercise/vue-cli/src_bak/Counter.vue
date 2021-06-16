<template>
    <div>
        <div>计步器:{{num}}</div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
export default {
    name:"Counter",
    props:{
        num:Number
    },
    methods:{
        increment(){
            this.$emit("add")
        },
        decrement(){
            this.$emit("sub")
        }
    }
}
</script>

<style scoped>
/* scoped 作用域 / “局部” */
button {
    color: blue;
    border: none;
    margin: 2px;
    border-radius: 5px;
    width: 30px;
    height: 20px;
}
</style>