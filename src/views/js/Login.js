/**
 * auth:fylong
 * date:20210819
 * notes:设置一个登陆界面，用于对用户登录后跳转的操作，其中还要设置一个主要的
 */

import { Toast } from "vant";
import { mapMutations } from "vuex";
import { phoneVerify, passwordVerifyTwo } from "../../utils/verify";
import axios from "../../utils/axios";

export default {
  data() {
    return {
      //登录输入的相关信息
      loginInfo: {
        username: "13536368633",
        password: "Long1993"
      }
    };
  },

  created() {},

  mounted() {},

  methods: {
    init() {},
    ...mapMutations(["changeLogin"]),

    login: function() {
      const { username, password } = this.loginInfo;
      console.log("登录验证");
      let v = this; //不用的话this这个会受到自身域限制

      if (!phoneVerify(username)) {
        Toast({
          type: "fail",
          message: "请输入正确格式的手机号",
          duration: 2500
        });
        return false;
      } else if (!passwordVerifyTwo(password)) {
        Toast({
          type: "fail",
          message: "请输入正确格式的密码",
          duration: 2500
        });
      } else {
        axios({
          method: "post",
          url: "/user/login",
          //这里要加stringify变为Json格式的字符串否则更深层的键值传到后台的容器后会掩盖调，变为Object:Object,也可在main中做处理
          data: {
            username: username,
            password: password
          }
        })
          .then(res => {
            console.log(res);
            console.log(res.data.status);
            if (res.data.status) {
              v.userToken = res.data.token;
              v.changeLogin({ Authorization: v.userToken }); //放入mapMutations中
              Toast.success("登录成功");
              v.$router.push("/homepage");
            } else {
              Toast({
                type: "fail",
                message: "该用户尚未注册，请注册后登陆",
                duration: 2500
              });
            }
          })
          .catch(err => {
            Toast.fail(err);
          });
      }
    },

    register: function() {
      let v = this;
      v.$router.push("/Register");
    }
  }
};
