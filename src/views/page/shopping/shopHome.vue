<template>
  <div class="shopHome">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-swipe :autoplay="6800" :duration="2000" lazy-render class="container">
      <van-swipe-item v-for="image in imgList" :key="image" class="img">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid square :column-num="4">
      <van-grid-item v-for="value in gridItem" :key="value.id" :icon="value.icon" :text="value.text" />
    </van-grid>
    <shopTarbar v-bind:active="0" ></shopTarbar>
  </div>
</template>

<script>
import shopTarbar from "./shopTarbar.vue";
export default {
  components:{
    shopTarbar
  },
  data(){
    return {
      active:4,

      //定义图片轮播
      imgList:[
        require("../../../assets/shopping/icon1.jpg"),
        require("../../../assets/shopping/icon2.jpg")
      ],
      gridItem:[
        {id:'fruit',icon:'photo-o',text:'水果'}, //水果
        {id:'food',icon:'photo-o',text:'食物'}, 
        {id:'furniture',icon:'photo-o',text:'家具'}, //家具
        {id:'jewelry',icon:'photo-o',text:'饰品'}, //饰品
        {id:'tech',icon:'photo-o',text:'电子产品'}, //电子产品
        {id:'book',icon:'photo-o',text:'书籍'}, //书籍
        {id:'clothes',icon:'photo-o',text:'衣服'},
        {id:'others',icon:'photo-o',text:'其他'} 
      ],

      value:''
    };
  },

  created(){

  },

  methods:{
  },


}


</script>
<style rel="stylesheet/scss" lang="less" scoped>
.shopHome {
  .container{
    position: relative;
    height: 200px;
    .img {
      height: 200px;
      border: 1px solid gray;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>