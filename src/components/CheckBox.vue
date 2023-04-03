<template>
    <div class="section">
        <label :for="item.title" v-for="(item , index) in item.options" :key="index">
        <input class="f-18-med pointer" type="checkbox"  :value="item.value" :name="item.title" >
        {{ item.title }}
        </label>
    </div>
</template>
<script>
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
}
</script>
<style scoped>

</style>