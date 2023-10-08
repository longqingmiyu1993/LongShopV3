import axios from "../../utils/axios";

export default {
  data() {
    return {
      test: {
        data: "232"
      },

      //定义图片轮播
      imgList: [
        require("../../assets/homePage/icon1.jpg"),
        require("../../assets/homePage/icon2.jpg")
      ],

      //当前图片标志
      curIndex: 0,
      timer: null
    };
  },

  mounted() {},

  created() {},

  methods: {
    submitTest() {
      let v = this;
      axios({
        method: "post",
        url: "/user/test",
        data: {
          data: v.test.data
        },
        dataType: "json"
      })
        .then(function(res) {
          console.log("请求成功");
          console.log(res.data);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
