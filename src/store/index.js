import Vue from 'vue'
import Vuex from 'vuex'
import { getData, getBannerData } from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
 state:{
  shopData:[],
    bannerData:[]
 },
 actions:{
  getShopData(){
    getData().then((res)=>{
      this.commit('shopList',res.data.data)
    })
  },
  getBanner(){
    getBannerData().then( res =>{
      console.log(res.data.data)
      this.commit('bannerImg', res.data.data)
    })
  }
 },
 mutations:{
  shopList(state,shopData){
    state.shopData = shopData
  },
  bannerImg(state,bannerData){
    state.bannerData = bannerData
  }
 },
 getters:{

 },
  modules: {
  }
})
