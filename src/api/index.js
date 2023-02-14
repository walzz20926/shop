//api接口的同一管理
import requests from './request'
import mockRequests from './mockRequest'


// 三级联动接口/api/product/getBaseCategoryList
export const getData = ()=>{
    return requests.get(
        '/api/product/getBaseCategoryList'
    )
}

//使用mock模拟的轮播图数据
export const getBannerData = ()=>{
    return mockRequests.get('/mock/banner')
}

//使用mock模拟floor数据
export const getFloorData = () => {
    return mockRequests.get('/mock/floor')
}