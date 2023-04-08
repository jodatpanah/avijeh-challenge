<template>
    <div class="w-100">
      <input @input="$addFilter(item , value , '' ,'' , '' ,$route.query)" v-model="value" :placeholder="item.title" name="input" class="f-18-med" type="text">
    </div>
</template>
<script>
import { calckText } from "@/library/functions"
export default {
    name:'TextInput',
    props:{
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
          value:''
        }
    },
    computed:{
        calckText,
    },
    mounted() {
      this.value = this.calckText[this.item.name] || ''
    }
}
</script>