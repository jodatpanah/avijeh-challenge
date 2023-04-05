<template>
    <div class=" flex-row-start gap-16 w-100">
        <label class="flex-row-start gap-8"  v-for="(option , index) in item.options" :key="index">
        <input class="f-18-med pointer" type="checkbox" :value="option.value" :name="option.title" :checked="calckText[item.name]" @change="toggleCheckbox(item.name , option.value)"/>
          {{option.title}}
        </label>
    </div>
</template>
<script>
import { calckText } from "@/library/functions"
export default {
    name: "CheckBox",
    props: ["item" , "value"],
    data() {
        return {
          values:[]
        };
    },
  computed:{
    calckText
  },
    methods: {
      isSelected(optionValue) {
        console.log('has' ,this.item.name, this.$route.query[this.item.name] , optionValue);
        return this.$route.query[this.item.name] === optionValue.value
      },
      toggleCheckbox(name , value) {
        let newQuery = {...this.$route.query}
        if(Object.prototype.hasOwnProperty.call(newQuery , name)) {
          delete newQuery[name]
        }
        else {
          newQuery[name] = value
        }
        this.$router.push({query: newQuery})
        // console.log('test' , optionValue);
        // let newValue = this.value
        // if(newValue.includes(optionValue.value)) {
        //   newValue.splice(newValue.indexOf(optionValue) , 1)
        // }else {
        //   newValue = []
        //   newValue.push(optionValue)
        // }
        // // this.values = this.values ? optionValue.value + '+' + this.values : optionValue.value
        // this.values.push(optionValue.value)
        // this.$router.replace({query :{...this.$route.query , ...{[this.item.name] : this.values}}})
        // // this.$router.replace({'query' : {[this.item.name] : this.values}})
        // console.log('hghghghghggh' , this.$route.query);
      }
    },
}
</script>
<style scoped>

</style>