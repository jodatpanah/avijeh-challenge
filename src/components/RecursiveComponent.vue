<template>
    <div>
        <component :is="targetComponent[items.type].component" :item="items" />
        <div v-if="items.children && items.children.length">
            {{ items.children }}
        <Recursive v-for="(child , index) in items.children" :key="index" :items="child"></Recursive>
        </div>
    </div>
</template>
<script>
export default {
    name:'Recursive',
    components:{
    TextInput: () => import("./TextInput.vue"),
    Dropdown: () => import("./Dropdown.vue"),
    CheckBox: () => import("./CheckBox.vue"),
    RangeInput: () => import("./RangeInput.vue")
},
props:['items'],
data() {
    return {
        targetComponent:{
                "dropdown":{
                component:'Dropdown'
                },
                "text":{
                    component:'TextInput'
                },
                "checkbox":{
                    component:'CheckBox'
                },
                "number":{
                    component:'RangeInput'
                }
            }
    }
}
}
</script>
<style scoped>

</style>