<template>
    <div class="section flex-row-start gap-16">
        <label :for="item.title" v-for="(item , index) in item.options" :key="index">
        <input class="f-18-med pointer" type="checkbox" :value="item.value" :name="item.title" :checked="isSelected(item.value)" @change="toggleCheckbox(item.value)">
        {{ item.title }}
        </label>
    </div>
</template>
<script>
export default {
    name: "CheckBox",
    props: ["item" , "value"],
    data() {
        return {};
    },
    methods: {
      isSelected(optionValue) {
        return this.value.includes(optionValue)
      },
      toggleCheckbox(optionValue) {
        const newValue = [...this.value]
        if(newValue.includes(optionValue)) {
          newValue.splice(newValue.indexOf(optionValue) , 1)
        }else {
          newValue.push(optionValue)
        }
        this.$emit('input' , newValue)
      }
    },
}
</script>
<style scoped>

</style>