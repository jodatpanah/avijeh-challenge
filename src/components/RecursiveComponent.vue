<template>
    <div class="flex-col gap-16 w-100">
      <label for="input" class="f-22-bold">{{ items.label }}</label>
      <component :is="targetComponent[items.type].component" :item="items" v-model="selectedOptions"/>
      <template >
        <div class="test-style" v-for="(child , index) in items.children" :key="index" >
          <Recursive v-if="$route.query[items.name] === child.parent" :items="child" ></Recursive>
          
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
            },
        selectedOptions:[]
    }
},
watch: {
  'selectedOptions'() {
    this.$emit('addFilters' , this.selectedOptions)
  }
}
}
</script>
<style scoped>
.test-style {
  margin-right: 50px;
}
</style>