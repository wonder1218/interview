<template>
    <div class="right-part">
            <a-form-model :form="form" layout="horizontal" :model="formdata" ref="formdata" :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol" >
                <a-form-model-item label="ID" >
                    <a-input disabled v-model="formdata.id" />
                </a-form-model-item>
                <a-form-model-item label="标题" prop="title" :model="formdata" ref="formdata" :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
                    <a-input v-model="formdata.title" placeholder="请输入标题" v-decorator="['username', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
                </a-form-model-item>
                <a-form-model-item label="内容" prop="content" :model="formdata" ref="formdata" :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
                    <a-textarea v-model="formdata.content" allow-clear placeholder="请输入内容" v-decorator="['nickname', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
                    <a-button v-if="flag==='create'" type="primary" v-on:click="sub" block class="flex" style="margin-top:10px;">新增</a-button>
                    <a-button v-else v-on:click="update" type="danger" block class="flex">修改</a-button>
                    <a-button @click="chong" type="danger" block class="flex">清除</a-button>
                    <a-button @click="back" type="dashed" block class="flex">返回</a-button>
                </a-form-model-item>
            </a-form-model>
        </div>
</template>
<script>
 const formItemLayout = {
     labelCol: { span: 4 },
     wrapperCol: { span: 8 },
 };
 const formTailLayout = {
     labelCol: { span: 4 },
     wrapperCol: { span: 8, offset: 4 },
 };
export default {
    name:"Detail",
    data() {
        return {
            checkNick: false,
             formItemLayout,
             formTailLayout,
             form: this.$form.createForm(this, { name: 'dynamic_rule' }),
             formdata:{},
            flag:"",
            }
            
     },
    
     //生命周期
    created(){
        if(this.$route.query.id){
            //修改
            this.flag="update",
            this.formdata=this.$store.getters.formdata(this.$route.query.id);
        }else{
            //新增
            this.flag="create"
        }
    },
    mounted(){

    },
      methods: {
         sub() {
             if (!this.formdata.title || !this.formdata.content) {
                alert("输入框不能为空！");
                return;
            }
            
            
             
            this.formdata.id =  (this.$store.state.dataList.length + 1).toString();
            // console.log(this.formdata.id);
            // this.formdata.id = Date.now().toString().substr(-3)
            // this.list.push(this.formData)
            this.$store.commit("subFormdata",this.formdata);
             this.formdata= {
                id: "",
                title: "",
                content: ""
            },
             this.$notification.open({
                message:"恭喜",
                description:"新增成功",
                icon: h => h("a-icon",{
                    props:{
                        type:"check-circle",
                        theme:"twoTone",
                        "two-tone-color":"#52c41a"
                    }
                }),
            })
            this.$router.go(-1)
         },
         update() {
             this.$store.commit("updateFormdata",this.formdata);
              this.$notification.open({
                message:"恭喜",
                description:"修改成功",
                icon: h => h("a-icon",{
                    props:{
                        type:"check-circle",
                        theme:"twoTone",
                        "two-tone-color":"#52c41a"
                    }
                }),
            })
             this.$router.go(-1)
         },
         chong() {
            this.formdata.title = "";
            this.formdata.content = "";
            
         },
         back(){
            this.$router.go(-1)
         }
         
     }
}
</script>
<style scoped>
.right-part {
    width: 100%;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 1px 8px rgb(10 10 10 / 0.1);
    padding: 16px;
    box-sizing: border-box;
}
/* .control{
bottom: 0;
} */
/* .flex{
    width: auto;
} */
</style>