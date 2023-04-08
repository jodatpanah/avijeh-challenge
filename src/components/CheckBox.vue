<template>
    <div class="flex-row-start gap-16 w-100">
        <label class="flex-row-start gap-8 pointer" v-for="(option , index) in item.options" :key="index + option.title">
          <div class="checkbox-container pointer" :class="{'checkbox-container-active'
              : calckText[item.name]?.includes(option.value)}"
               @change="$addFilter(item , option.value , values, calckText[item.name]?.includes(option.value) ? 'DELETE' : 'PUSH' , ',' , $route.query)">
            <input class="f-18-med pointer" type="checkbox" :value="option.value" :name="option.title" :checked="calckText[item.name]?.includes(option.value)" />
          </div>
          {{option.title}}
        </label>
    </div>
</template>
<script>
import { calckText } from "@/library/functions"
export default {
    name: "CheckBox",
    props: {
      item:{
        type:[],
        required: true,
        default:{
          "type": "",
          "name": "",
          "label": "",
          "children": [],
          "parent": "",
        }
      }
    },
    data() {
        return {
          values:[]
        };
    },
  computed:{
    calckText
  },
    methods: {

    },
}
</script>