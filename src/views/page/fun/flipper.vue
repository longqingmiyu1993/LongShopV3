<template>
  <div class="view">
    <flipper class="flipper_style" :flipped="flipped" @click="onClick">
      <div class="flipper_front" slot="front">
        <div class="f_body">
          <div class="f_title">
            <div class="f_text">龙@秘宝</div>
            <div class="f_attr">属性</div>
          </div>
          <div class="f_star">★★★★★★★★</div>
          <div class="f_img"></div>
          <div class="f_describe">描述</div>
        </div>
      </div>
      <div class="flipper_back" slot="back">
        <div class="b_body"></div>
      </div>
    </flipper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flipped: false
    };
  },
  methods: {
    onClick() {
      this.flipped = !this.flipped;
    }
  }
};
</script>

<style lang="less">
@width: 8.26rem;
@height: 12.04rem;
@borderColor: #6d6464;
.view {
  height: 100vh;
  background-color: antiquewhite;
}

.flipper_style {
  width: @width !important; /*游戏王卡的比例是59mm * 86mm  用important 强制实现 */
  height: @height !important;
  margin: 0rem auto;
  top: 1rem;
}

.flipper_front {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom right, #920707, rgb(229, 155, 155));
  border: 0.08rem solid #5c5656;

  .f_body {
    //卡片的标题
    flex-direction: column;
    display: flex;
    align-items: center;
    padding: 0.15rem;
    .f_title {
      color: white;
      width: 96%;
      height: @height*0.05; /** 真实的高*0.05 */
      flex-direction: row;
      display: flex;
      padding: 0 0.1rem 0 0.1rem;
      border: 0.03rem solid #920505;
      font-size: 14px;
      box-shadow: 0.032rem 0.032rem 0.032rem #920505;
      /** 实际名字 */
      .f_text {
        text-align: left;
        flex: 9;
      }
      /** 属性 */
      .f_attr {
        text-align: right;
        flex: 1;
      }
    }
    //星星
    .f_star {
      width: 96%;
      text-align: right;
      margin-top: 0.1rem;
      font-size: 16px;
      color: rgb(237, 212, 100);
      height: @height*0.05; /** 真实的高*0.05 */
    }
    //卡片的画面
    .f_img {
      width: 82%;
      margin-top: 0.08rem;
      color: rgb(214, 85, 25);
      background-color: aliceblue;
      height: @height*0.51; /** 真实的高*0.54 */
      border: 0.08rem solid @borderColor;
    }
    //卡片的描述
    .f_describe {
      width: 86%;
      background-color: aliceblue;
      margin-top: 0.31rem;
      color: beige;
      height: @height*0.28; /** 真实的高*0.54 */
      border: 0.08rem solid @borderColor;
    }
  }
}

.flipper_back {
  width: 100%;
  height: 100%;
  padding: 1px;
  background-image: linear-gradient(to bottom right, rgb(39, 31, 31), rgb(184, 182, 182));
}
</style>
