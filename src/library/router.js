import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    linkActiveClass: "active-tab",
    mode:"history",
    roures:[]
})
export default router