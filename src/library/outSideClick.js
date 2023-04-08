import Vue from "vue"
Vue.directive('outside-click' , {
    bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            if(!(el === event.target || el.contains(event.target))) {
                if(typeof binding.value === 'function') {
                    vnode.context[binding.expression](event)
                }else if(typeof binding.value.handler === 'function') {
                    vnode.context[binding.value.handler](event)
                }
            }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
        document.body.removeEventListener('click' , el.clickOutsideEvent)
    }
})