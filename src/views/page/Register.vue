<template>
  <div class="register">
    <h1 class="registerTitle">用户注册</h1>
    <br />
    <van-cell-group class="registerInfo">
      <van-field
        left-icon="manager"
        right-icon="question-o"
        v-model="register.name"
        required
        placeholder="请输入姓名"
        @click-right-icon="$toast('请输入中文名字')"
        clearable
      />
      <van-field
        left-icon="phone"
        right-icon="question-o"
        v-model="register.phone"
        required
        placeholder="请输入手机号"
        @click-right-icon="$toast('请输入11位手机号')"
        clearable
      />
      <van-field
        left-icon="card"
        right-icon="question-o"
        v-model="register.idCard"
        required
        placeholder="请输入18位身份证"
        @click-right-icon="$toast('请输入18位身份证')"
        clearable
      />
      <van-field
        type="password"
        left-icon="lock"
        right-icon="question-o"
        v-model="register.password0"
        required
        placeholder="请输入密码（8-16位）"
        @click-right-icon="$toast('密码必须是大小写英文字母，阿拉伯数字且不低于8位，不超过16位')"
        clearable
      />
      <van-field
        type="password"
        left-icon="lock"
        right-icon="question-o"
        v-model="register.password1"
        required
        placeholder="请再次确认密码（8-16位）"
        @click-right-icon="
          $toast('与上述相同，密码必须是大小写英文字母，阿拉伯数字且不低于8位，不超过16位')
        "
        clearable
      />
    </van-cell-group>
    <div class="buttonStyles">
      <van-button
        class="cancelButton"
        size="small"
        color="linear-gradient(to right, rgb(255 183 52), rgb(238 107 10))"
      >
        取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消
      </van-button>
      <van-button
        class="registerButton"
        size="small"
        @click="registerInfo"
        color="linear-gradient(to right, rgb(177 52 255), rgb(89 10 238))"
      >
        注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册
      </van-button>
    </div>
  </div>
</template>

<script src="../js/Register"></script>
<style rel="stylesheet/scss" lang="less">
@import "../styles/Register.less";
</style>
