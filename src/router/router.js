
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HelloWorld from '../components/HelloWorld.vue'
import Test from '../components/test.vue'
 export default new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: HelloWorld },
    { path: '/user', component: Test }
  ]
})
