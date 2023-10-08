/**
 * auth:fylong
 * date:20211206
 * notes:设置一个注册界面，当登录的时候校验不通过可以经过这里去处理
 */
import { Toast } from "vant";
import { phoneVerify, passwordVerifyTwo } from "../../utils/verify";
import axios from "../../utils/axios";

export default {
  data() {
    return {
      //注册的信息
      register: {
        name: "",
        phone: "",
        idCard: "",
        password0: "",
        password1: ""
      }
    };
  },

  created() {},

  mounted() {},

  methods: {
    init() {},

    registerInfo() {
      console.log(this.register);
    }
  }
};
