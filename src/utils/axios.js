/**
 * auth:fylong
 * date:20211203
 * notes:构造一个axios的方法，这个方法做请求时及反回时的相关处理,注意，如果
 * 这里主要是对请求的报文进行拦截并且加密操作，此外，对于响应的相关信息，可以进行识别性的
 * 拦截，用于用户查看
 * 1、修改了一下返回的结构，应该拿res.data
 * 2、注释调一个重要的包的内容，sockjs-client,这里就要sockjs.js里面的self.xhr.send(payload)注释掉,后，页面不会自动刷新
 */

import axios from "axios";
import router from "../router";
import { Toast } from "vant";
import { sleep } from "./timeTool";
import { jsonObjDecode, jsonObjEncode } from "./jsonUtil";

const service = axios.create({
  baseURL: "http://127.0.0.1:8307",
  timeout: 5000
});

/**
 * 添加请求拦截器，在请求头中加token
 */
service.interceptors.request.use(
  config => {
    //将token存入headers里面的Authorization中，后台可以进行获取
    if (localStorage.getItem("Authorization")) {
      config.headers.Authorization = localStorage.getItem("Authorization");
    }

    //判断请求的类型，将POST类的请求进行参数的加密处理
    if (config.method == "post") {
      console.log(config.method);
      let jsonEncodeData = jsonObjEncode(config.data, "AES");
      //将加密好的数转为字符串传进j后端
      config.data = JSON.stringify(jsonEncodeData);

      config.headers["Content-Type"] = "application/json;charset=UTF-8";
    }

    if (config.method == "get") {
      console.log(config.method);
      console.log(config);
      //config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 添加响应的拦截器，验证返回的数据是否
 */
service.interceptors.response.use(response => {
  const res = response;
  const v = this;
  //console.log(res);
  //如果状态不为200，则使用的
  if (res.status != 200) {
    Toast.fail("后台未响应，请查看原因");
    router.push("/login");
    return Promise.reject(res);
  } else {
    //如果该code为50000，则其返回的是token已失效
    if (res.data.code == 50014) {
      //清空Authorization
      Toast.fail("token已过期，请重新登录！！！");
      localStorage.removeItem("Authorization");
      //加时间并跳回login这个界面
      sleep(1500);
      router.push("/login");
      return Promise.reject(res);
    }

    //没有问题，则直接响应
    return res.data; //这里才是应用存在的信息，其他信息先过滤掉
  }
});

export default service;
