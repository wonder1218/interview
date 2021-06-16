<template>
     <div class="left-part">
          <a-input-search placeholder="需要过滤的内容" v-model="searchContent" enter-button="search" @search="onSearch" />
             <a-button type="primary" v-on:click="add" block class="flex" style="margin-top:10px;">新增</a-button>
            <a-list item-layout="horizontal" :data-source="$store.state.dataList">
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a slot="actions" @click="del(index)">删除</a>
                    <a slot="actions" @click="delById(item.id)">删除(id方式删除)</a>
                    <a slot="actions" @click="detail(item)">查看</a>
                    <a-list-item-meta :description="item.content.substr(0,10)+'......'">
                        <div slot="title">{{item.id + "-" + item.title}}</div>
                    </a-list-item-meta>
                </a-list-item>
            </a-list>
        </div>
</template>
   <script>
   export default {
      name:"List",
    data(){
        return{
            list:[],
         searchContent: "",
    }
    },
        methods:{
        del(index){
            this.$store.commit("del",index);
            this.$message.success("删除成功");
        },
        delById(id){
            this.$store.commit("delById",id);
            this.$message.success("删除成功by id");
            //this.list = this.list.filter(item => item.id === id ? false : true)
        },
        add(){
            this.$router.push({
                path:"detail",
            });
        },
        detail(item){
            this.$router.push({
                path:"detail",
                query:{
                    id:item.id,
                    
                }
            });
           
        },
        onSearch() {
            // console.log(this.searchContent)
            this.$store.commit("onSearch",this.searchContent);
        },
    }
   }
   </script>
<style scoped>
.left-part {
    width: 100%;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 1px 8px rgb(10 10 10 / 0.1);
    padding: 16px;
    box-sizing: border-box;
}
</style>