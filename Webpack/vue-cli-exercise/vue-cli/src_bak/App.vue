<template>
  <div ref="abc">
    <button>123</button>
    <counter :num="count" v-on:add="increment" @sub="decrement" />
  </div>
</template>


<script>
// es6
import Counter from "./Counter"

export default {
  name: 'App',
  data(){
    return {
      count:10
    }
  },
  methods:{
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    }
  },
  components:{
    Counter
  },
  /*
    生命周期 -》 组件的生命周期 -》 n个钩子函数 -》 hook function -》 callback function
  */
  created(){
    /*
        你肯定能拿到 data ，methods ，computed 中的内容
        但是，不能保证你能拿到页面（v-dom）中 节点以及页面中一切
    */ 
    console.log(this.count)
    this.increment()
    console.log(this.count)
    // this.$refs.abc  !!!!!
    console.log(2000,"created")
  },
  mounted(){
    /*
      1.你能拿到created方法的中所能拿到的一切
        你肯定能拿到 data ，methods ，computed 中的内容
      2.同时，你也能拿到页面中的一切
    */
    console.log(this.$refs.abc)
    console.log(4000,"mounted")
  }
}
</script>
