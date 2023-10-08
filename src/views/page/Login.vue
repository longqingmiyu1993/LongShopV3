<template>
  <div class="login">
    <h1 class="loginTitle">用户登录</h1>
    <br />
    <van-cell-group class="loginInfo">
      <van-field
        left-icon="manager"
        right-icon="question-o"
        v-model="loginInfo.username"
        required
        placeholder="请输入用户名（手机号码）"
        @click-right-icon="$toast('用户名必须是手机号')"
        clearable
      />
      <van-field
        type="password"
        left-icon="lock"
        right-icon="question-o"
        v-model="loginInfo.password"
        required
        placeholder="请输入密码（8-16位）"
        @click-right-icon="$toast('密码必须是大小写英文字母，阿拉伯数字且不低于8位，不超过16位')"
        clearable
      />
    </van-cell-group>
    <div class="buttonStyles">
      <van-button
        class="registerButton"
        size="small"
        @click="register"
        color="linear-gradient(to right, #4f5ff3, #0e0aee)"
      >
        注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册
      </van-button>
      <van-button
        class="loginButton"
        size="small"
        @click="login"
        color="linear-gradient(to right,  rgb(255 189 52), rgb(238 92 10))"
      >
        登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
      </van-button>
    </div>
  </div>
</template>

<script src="../js/Login.js"></script>
<style rel="stylesheet/scss" lang="less" scoped>
@import "../styles/Login.less";
</style>
