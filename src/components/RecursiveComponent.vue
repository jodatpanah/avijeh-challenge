<template>
    <div>
      <component :is="targetComponent[items.type].component" :item="items" />
        <div class="test-style" v-for="(child , index) in items.children" :key="index" >
          <Recursive :items="child"></Recursive>
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
.test-style {
  margin-right: 50px;
}
</style>