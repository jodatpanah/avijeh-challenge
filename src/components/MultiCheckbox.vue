<template>
  <div class=" flex-row-start gap-16 w-100">
    <label class="flex-row-start gap-8 pointer"  v-for="(option , index) in item.options" :key="index">
      <div class="checkbox-container pointer" :class="{'checkbox-container-active' : calckText[item.name]?.includes(option.value)}" @change="toggleCheckbox(item.name , option.value)">
        <input class="f-18-med pointer" type="checkbox" :value="option.value" :name="option.title" :checked="calckText[item.name]?.includes(option.value)" />
      </div>
      {{option.title}}
    </label>
  </div>
</template>
<script>
import { calckText } from "@/library/functions"
export default {
  name: "MultiCheckbox",
  props: ["item"],
  data() {
    return {
      values:[]
    };
  },
  computed:{
    calckText
  },
  methods: {
    toggleCheckbox(name , value) {
      let newQuery = {...this.$route.query}
      if(Object.prototype.hasOwnProperty.call(newQuery , name)) {
        if(this.values.includes(value)) {
          this.values.splice(this.values.indexOf(value) , 1)
        }
        else {
          this.values.push(value)
        }
        newQuery[name] = this.values.join(",")
      }
      else {
        this.values.push(value)
        newQuery[name] = value
      }
      this.$router.push({query: newQuery})
    }
  },
}
</script>
<style scoped>

</style>