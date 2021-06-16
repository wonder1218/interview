import axios from "axios";
import {message} from "antd";

export default function ajax(url,data={},type='GET'){
    return new Promise((resolve ,reject)=>{
        let promise
        if(type==='GET'){
            promise= axios.get(url,{
                params: data
            })

        }else {
            promise= axios. post(url,data)
        }
        promise.then(response=>{
        resolve(response);
        }).catch(error=>{
        message.error('请求出错了:',+error.message)
        })
    })

}
//
// ajax('/login',{username:'Tom',password:'118650'},'POST').then();
// ajax('/manage/user/add',{username:'Tom',password:'118650',phone:'122222222222222'},'POST').then();