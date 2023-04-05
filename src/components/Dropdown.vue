<template >
    <div class="drop-container" v-outside-click="closeDrop">
        <div class="selected-option flex-row-start pointer p-8" @click="showDrop = !showDrop">
            {{ selectedValue || ' یک مورد را انتخاب کنید ' }}
        </div>
        <div class="dropdown flex-col" v-if="showDrop" >
            <p class="pointer" v-for="(item , index) in item.options" :key="index" @click="select(item)" >
                {{ item.title }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'Dropdown',
    props:['item'],
    data() {
        return {
            selectedValue:'',
            showDrop:false
        }
    },
    methods: {
        select(e) {
            this.selectedValue = e.title
            let data = []
            data.push(e)
            this.$router.push({query :{...this.$route.query , ...{[this.item.name] : e.value}}})
            this.showDrop = false
        },
      closeDrop() {
        this.showDrop = false
      }
    }
}
</script>
<style scoped>
.drop-container {
    position: relative;
    max-width: 300px;
}
.selected-option {
    height: 40px;
    /* width: 200px; */
    border-radius: 4px;
    border: 1px solid var(--border-color);
}
.dropdown {
    position: absolute;
    background-color: var(--background-main);
    width: 100%;
    right: 0;
    border-radius: 4px;
    padding: 8px;
    border: 1px solid var(--border-color);
    z-index: 2;
}
</style>