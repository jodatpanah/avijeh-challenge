<template>
    <div class=" flex-row-start gap-16 w-100">
        <label class="flex-row-start gap-8" :for="item.title" v-for="(item , index) in item.options" :key="index">
        <input class="f-18-med pointer" type="checkbox" :value="item.value" :name="item.title" :checked="isSelected(item)" @change="toggleCheckbox(item)">
        {{ item.title }}
        </label>
    </div>
</template>
<script>
export default {
    name: "CheckBox",
    props: ["item" , "value"],
    data() {
        return {
          values:[]
        };
    },
    methods: {
      isSelected(optionValue) {
        console.log('has' ,this.item.name, this.$route.query[this.item.name] , optionValue);
        return this.$route.query[this.item.name] === optionValue.value
      },
      toggleCheckbox(optionValue) {
        console.log('test' , optionValue);
        let newValue = this.value
        if(newValue.includes(optionValue.value)) {
          newValue.splice(newValue.indexOf(optionValue) , 1)
        }else {
          newValue = []
          newValue.push(optionValue)
        }
        // this.values = this.values ? optionValue.value + '+' + this.values : optionValue.value
        this.values.push(optionValue.value)
        this.$router.replace({query :{...this.$route.query , ...{[this.item.name] : JSON.stringify(this.values)}}})
        // this.$router.replace({'query' : {[this.item.name] : this.values}})
        console.log('hghghghghggh' , this.$route.query);
      }
    },
}
</script>
<style scoped>

</style>