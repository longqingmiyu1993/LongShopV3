/**
 * auth:fylong
 * date:20210818
 * notes:main.js的配置是直接影响到全局的设计，当中包括路由、拦截器等一些东西需要我们注意的
 */

import Vue from "vue";
import App from "./App.vue";
import "vue-flipper/dist/vue-flipper.css";
import Flipper from "vue-flipper";
import {
  Button,
  Icon,
  Form,
  DatetimePicker,
  Field,
  Uploader,
  Overlay,
  Popup,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Picker,
  Dialog,
  Cascader,
  Rate,
  Tabbar,
  TabbarItem,
  Search,
  Cell,
  CellGroup,
  Card,
  Toast,
  NavBar,
  Swipe,
  SwipeItem,
  Grid,
  GridItem
} from "vant";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import VueSession from "vue-session";
import axios from "axios";

import "vant/lib/index.css";
import "lib-flexible/flexible";
const fs = require("fs");

/**
 * vant相关的,引入的时候可能会有问题，3.0版本的vant需要通过以下方式降版本重新安装，不要引入太高版本的vant,
 * npm i vant@beta -S，否则会引入不成功
 */
Vue.use(Button);
Vue.use(Form);
Vue.use(DatetimePicker);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(Overlay);
Vue.use(Popup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Picker);
Vue.use(Dialog);
Vue.use(Cascader);
Vue.use(Rate);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Card);
Vue.use(Icon);
Vue.use(VueSession);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.component("flipper", Flipper);
/**
 * 配置传后台设置的IP
 */
Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios);

/**
 * 路由的使用
 */
Vue.use(VueRouter);
Vue.use(router);

Vue.use(fs);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
