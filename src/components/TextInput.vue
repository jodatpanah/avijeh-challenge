<template>
    <div class="w-100">
        <input @input="searchtext($event.target.value)" :value="calckText[item.name]" :placeholder="item.title" name="input" class="f-18-med" type="text">
    </div>
</template>
<script>
import { calckText } from "../library/functions"
export default {
    name:'TextInput',
    props:['item'],
    data() {
        return {
            
        }
    },
    computed:{
        calckText
    },
    methods: {
        searchtext(e) {
            this.$router.push({query :{...this.$route.query , [this.item.name] : e}})
        },
    },
}
</script>
<style scoped>

</style>