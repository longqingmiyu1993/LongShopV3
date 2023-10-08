<template>
  <div class="Homepage">
    <van-swipe :autoplay="7500" :duration="2000" lazy-render class="container">
      <van-swipe-item v-for="image in imgList" :key="image" class="img">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>

    <van-grid clickable :column-num="3">
      <van-grid-item icon="home-o" text="路由跳转" to="/" />
      <van-grid-item icon="search" text="URL 跳转" url="https://github.com" />
      <van-grid-item icon="like-o" text="喜爱" url="https://github.com" />
      <van-grid-item icon="star-o" text="喜爱" url="https://github.com" />
    </van-grid>
    <van-button
      type="primary"
      size="small"
      @click="submitTest"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      >登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</van-button
    >
  </div>
</template>
<script src="../js/Homepage.js"></script>
<style rel="stylesheet/scss" lang="less" scoped>
@import "../styles/homepage/Homepage.less";
</style>
