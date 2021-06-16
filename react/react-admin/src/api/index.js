import ajax from "./ajax";
const BASE=''
//登录
export const reqLogin=(username,password)=>ajax(BASE+'/login',{username,password},'post')
//添加用户
export const reqAddUser=(user)=>ajax(BASE+'/manage/user/add',{user},'post')