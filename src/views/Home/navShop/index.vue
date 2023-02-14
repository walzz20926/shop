<template>
  <div class="type-nav" @mouseleave="stopChange()" @mouseenter="enterShow">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" @click="goSearch" v-show="showSort">
        <div class="all-sort-list2">
          <div class="item" v-for="list1 in $store.state.shopData" :key="list1.categoryId" @mouseenter="changBg(list1.categoryId)"
          :class="{Bgcolor:list1.categoryId == listBgIndex}"
          >
            <h3>
              <a :data-categoryName='list1.categoryName' :data-category1ID='list1.categoryId'>{{list1.categoryName}}</a>
            </h3>
            <div class="item-list clearfix" >
              <div class="subitem" >
                <dl class="fore" v-for="list2 in list1.categoryChild" :key="list2.categoryId"
                  
                >
                  <dt >
                    <a :data-categoryName='list2.categoryName' :data-category2ID='list2.categoryId'>{{list2.categoryName}}</a>
                  </dt>
                  <dd >
                    <em v-for="list3 in list2.categoryChild" :key="list3.categoryID">
                      <a :data-categoryName='list3.categoryName' :data-category3ID='list3.categoryId'>{{list3.categoryName}}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
console.log(_)
export default {
  name: "navShop",
  mounted() {
    this.$store.dispatch('getShopData')
    if(this.$route.name == 'search'){
      this.showSort = false
    }
  },
  data() {
    return {
      listBgIndex:-1,
      showSort:true
    };
  },
  methods:{
    changBg(a){
      this.listBgIndex = a
    },
    stopChange(){
      this.listBgIndex = -1
      
      if(this.$route.path == '/search'){
        this.showSort = false
      }
      
    },
    goSearch(event){
      let element = event.target.dataset
      if(element.categoryname){
        // categoryName,category1ID,category2ID,category3Id
        let location = {name:'search'}
        let query = {categoryname:element.categoryname}
        
        if(element.category1id){
          query.category1ID = element.category1id
        }else if(element.category2id){
          query.category2ID = element.category2id
        }else if(element.category3id){
          query.category3ID = element.category3id
        }
        console.log(location,query)
        location.query = query
        if(this.$route.params){
          location.params = this.$route.params
          this.$router.push(location)
        }
      }
    },
    //鼠标移入显示列表
    enterShow(){
      this.showSort = true
    }
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .Bgcolor{

          background-color: pink;
        }
        .item {
          h3 {
            line-height: 26.7px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>