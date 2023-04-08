<template >
    <div class="drop-container" v-outside-click="closeDrop">
        <div class="selected-option flex-row-start pointer p-8" @click="showDrop = !showDrop">
            {{ selectedValue || ' یک مورد را انتخاب کنید ' }}
        </div>
        <div class="dropdown flex-col" v-if="showDrop" >
            <p class="pointer" v-for="(option , index) in item.options" :key="index + option.title"
               @click="$addFilter(item , option.value , '' , '' , '' , $route.query);selectedValue = option.title;closeDrop()" >
                {{ option.title }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'Dropdown',
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
            selectedValue:'',
            showDrop:false
        }
    },
    methods: {
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