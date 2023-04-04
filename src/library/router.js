import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// const FilterInput = () => import('../components/FilterInput.vue')
import FilterInput from "../components/FilterInput.vue"

const router = new VueRouter({
    linkActiveClass: "active-tab",
    mode:"history",
    // base:"/",
    roures:[
        {
            path:'/',
            component:FilterInput,
            name:'FilterInput'
        }
    ]
})
export default router