<template>
    <div class="section">
        <label :for="item.title" v-for="(item , index) in item.options" :key="index">
        <input class="f-18-med pointer" type="checkbox"  :value="item.value" :name="item.title" >
        {{ item.title }}
        </label>
        <ul v-if="item.children && item.children.length">
        <FilterInput v-for="(child , index) in item.children" :key="index" :node="child"></FilterInput>
      </ul>
    </div>
</template>
<script>
import FilterInput from './FilterInput.vue';

export default {
    name: "CheckBox",
    props: ["item"],
    data() {
        return {};
    },
    methods: {
    // checkInput(e) {
    //     e.value = 
    // }
    },
    components: { FilterInput }
}
</script>
<style scoped>

</style>