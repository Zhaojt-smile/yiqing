import axios from 'axios';
// 1. 创建axios对象
// 2. 请求拦截器
const service = axios.create({
        // baseURL: import.meta.env.VITE_BASE_API
        // baseURL: import.meta.env.VITE_BASE_API
    })
    // 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service