<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.footerShow"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
      Header,
      Footer
    }
}
</script>
<style>

</style>
