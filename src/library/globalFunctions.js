import Vue from "vue"
import router from '@/library/router'
Vue.prototype.$addFilter = (item , value , values , method , join , query) => {
    const result = {
        value: value,
        name: item.name,
        child: ''
    }
    if(method === 'DELETE') {
        values.splice(values.indexOf(value) , 1)
        result.value = values.join(join)
        result.child = item.children.find(a => query[a.name])?.name
    }
    else if(method === 'PUSH') {
        values.push(value)
        result.value = values.join(join)
    }
    let newQuery = {...query}
    if(!result.value) {
        delete newQuery[result.name]
        delete newQuery[result.child]
    }
    else {
        newQuery[result.name] = result.value
    }
    router.push({query: newQuery})
}