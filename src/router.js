/**
 * auth:fylong
 * date:20210818
 * notes:主要是用于配置页面的跳转，这个在构建vue项目的时候已经是创建的了
 *       所以，主要在routes中的配置
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Homepage from "./views/page/Homepage.vue";
import Login from "./views/page/Login.vue";
import Register from "./views/page/Register.vue";
import flipper from "./views/page/fun/flipper.vue";

//引入了关于商城的组件
import shopCart from "./views/page/shopping/shopCart.vue";
import shopHome from "./views/page/shopping/shopHome.vue";
import shopMe from "./views/page/shopping/shopMe.vue";
import shopMsg from "./views/page/shopping/shopMsg.vue";
import shopSort from "./views/page/shopping/shopSort.vue";

Vue.use(Router);

export default new Router({
  //mode: 'history',  //如果不要井号，使用history模式
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/Register",
      name: "Register",
      component: Register
    },
    {
      path: "/homepage",
      name: "homepage",
      component: Homepage
    },
    {
      path: "/fun/flipper",
      name: "flipper",
      component: flipper
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/About.vue")
    },
    //商店的脚本
    {
      path: "/shopHome",
      name: "shopHome",
      component: shopHome
    },
    {
      path: "/shopCart",
      name: "shopCart",
      component: shopCart
    },
    {
      path: "/shopMe",
      name: "shopMe",
      component: shopMe
    },
    {
      path: "/shopMsg",
      name: "shopMsg",
      component: shopMsg
    },
    {
      path: "/shopSort",
      name: "shopSort",
      component: shopSort
    }
  ]
});
