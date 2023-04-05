<template>
    <div class="flex-col gap-16 w-100">
      <label for="input" class="f-22-bold">{{ items.label }}</label>
      <component :is="targetComponent[items.type].component" :item="items"/>
      <template>
        <div class="child-style" v-for="(child , index) in items.children" :key="index" >
          <Recursive v-if="$route.query[items.name]?.includes(child.parent)" :items="child" ></Recursive>
        </div>
      </template>

    </div>
</template>
<script>
export default {
    name:'Recursive',
    components:{
    TextInput: () => import("./TextInput.vue"),
    Dropdown: () => import("./Dropdown.vue"),
    CheckBox: () => import("./CheckBox.vue"),
    RangeInput: () => import("./RangeInput.vue"),
      MultiCheckbox: () => import("./MultiCheckbox")
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
                },
                "multi-checkbox":{
                        component:'MultiCheckbox'
                }
            },
    }
},
}
</script>
<style scoped>
.child-style {
  margin-right: 50px;
}
</style>