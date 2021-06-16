import React, {Component} from "react";
import './login.less'
import {mongo} from "mongoose";
import logo from '../../assets/images/logo.jpg'
import {Form,Input,Button,Checkbox,message} from "antd";
import Icon from '@ant-design/icons';
import {reqLogin} from '../../api'
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import {Redirect} from "react-router-dom";
// import Form from "antd/es/form/Form";
// import '../../routes/managerModel'
// 连接数据库
const Item=Form.Item
export default class Login extends Component{

    handleSubmit=(event)=>{
        event.preventDefault();
        // mongo.connect('mongodb://localhost/react');
        // mongo.connection
        //     .on('open',function () {
        //         process.env.connect_database = 1;
        //         console.log('数据库连接成功');
        //
        //     })
        //     .on('error',function () {
        //         process.env.connect_database = 0;
        //         console.log('数据库连接失败');
        //
        //     });

        this.props.form.validateFields(async (err,values)=>{
            if(!err){
                const {username,password}=values;
                const response=await reqLogin(username,password);
                // console.log('成功了',response.data)
                const result=response.data;
                if(result.status===0){
                message.success('登录成功');
                const user=result.data;
                memoryUtils.user=user;
                storageUtils.saveUser(user)//保存到本地

                //跳转后台管理界面
                    this.props.history.replace('/');
                }else {
                    message.error(result.msg);
                }
            }else {
                console.log('检验失败了')
            }
        })

    }
//对密码自定义验证
    validatePwd=(rule,value,callback)=>{
        if(!value){
            callback('密码必须输入!');
        }else if(value.length<4){
            callback('密码不能小于4位');
        }else if(value.length>12){
            callback('密码不能大于12位');
        }else if(/^[a-zA-Z0-9_]+$/.test(value)){
            callback('密码必须是英文、数字、或下划线组成');
        }else
        {
            callback();//success
        }
    };

    render() {

        const user=memoryUtils.user;
        if(user&&user._id){
            return <Redirect to='/'></Redirect>
        }
        const form=this.props.form;
        const {getFieldDecorator} =form;
        return (

            <div className="login">
                <header className="login-header">
                <img src={logo} alt="logo"/>
                    <h1>React项目:后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit}
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}

                    >
                        <Item>
                            {
                                getFieldDecorator('username',{
                                    rules:[{ required: true,whitespace:true, message: '请输入你的用户名!' },
                                        {min:4,message:'用户名至少是4位'},
                                        {max:12,message:'用户名最多是12位'},
                                        {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是英文、数字、或下划线组成'},

                                    ],
                                         initialValue:'admin'
                                })(
                                    <Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />}
                                    placeholder="请输入你的用户名"/>
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password',{
                                    rules:[
                                        {validator: this.validatePwd}
                                    ]
                                })(
                                <Input prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}} />}
                                type="password"
                                placeholder="请输入你的用户名"/>
                                )
                            }
                        </Item>
                        <Item>
                            <Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Item>

                            <a className="login-form-forgot" href="">
                                忘记密码？
                            </a>
                        </Item>

                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            或者 <a href="">注册</a>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }

}
// const WrapLogin =Form.create()(Login);
//  WrapLogin;
// 前台表单验证
