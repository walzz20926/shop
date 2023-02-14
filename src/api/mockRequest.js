// axios的二次封裝
import axios from "axios";
//利用axios的create方法创建一个实例

const mockRequests = axios.create({
    //配置对象
    // 基础路径 发送请求的时候 路径中会出现api
    baseURL:'/mock',
    // 超时
    timeout:5000,
}) 
// 通常在进行请求的时候会有进度条，引入nprogress插件进行实现
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 请求拦截器
mockRequests.interceptors.request.use((config)=>{
    nprogress.start()
    //进度条开始动
    return config
})

//响应拦截器
mockRequests.interceptors.response.use((res)=>{
    //进度条结束
    nprogress.done()
    // 成功的回调函数
    return res.data
},(error)=>{
    //请求失败的回调
    return error
})






export default axios