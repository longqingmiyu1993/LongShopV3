<!--视图层-->
<template>
  <van-tabbar v-model="active" active-color="#1ABC9C" inactive-color="#778899">
    <van-tabbar-item icon="wap-home-o">
      <router-link to="/shopHome">首页</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="apps-o">
      <router-link to="/shopSort">分类</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="orders-o">
      <router-link to="/shopMsg">消息</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o">
      <router-link to="/shopCart">购物车</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="user-o">
      <router-link to="/shopMe">我的</router-link>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
export default {
  name: "shopTarbar",
  props: {
    active: Number
  }
};
</script>

<style scoped></style>
