<template>
    <div class="slider-container flex-col w-100">
      <span class="slider-back" :style="{backgroundImage: 'linear-gradient(to right, rgb(238, 129, 27) '+ ((calckText[item.name] / item.max || 0)) + '% ,'+' transparent '+((calckText[item.name] / item.max || 0)) +'%)'}"/>
      <input @input="putcash()" type="range" class="slider" v-model="value">
      <label class="rangenumber flex-row-between"  for="one">
        <a class="reg_12 f_gray">{{calckText[item.name]}}</a>
        <a class="reg_12 f_gray">0 </a>
      </label>
    </div>
  </template>
  <script>
  import { calckText } from "@/library/functions"
  export default {
    name: "TheSlider",
    props: ['item'],
    data() {
      return {
        value: 0
      }
    },
    computed: {
      calckText
    },
    watch:{
      'calckText'() {
        this.value = this.calckText[this.item.name] / this.item.max || 0
      }
    },
    methods: {
      putcash() {
        let newQuery = {...this.$route.query}
        newQuery[this.item.name] = this.value * this.item.max
        this.$router.push({query: newQuery})
      },
    },
    mounted() {
      this.value = this.calckText[this.item.name] / this.item.max || 0
    }
  }
  </script>
  <style scoped>
  .slider-container {
    margin: 20px auto;
    display: flex;
    max-width: 93%;
    position: relative;
    width: 100%;
    direction: ltr;
  }
  .slider-back {
    height: 8px;
    width: 99%;
    background-color: var(--border-color);
    border-radius: 5px;
    display: inline-block;
    position: absolute;
    cursor: pointer;
    left: 50%;
    transform: translateX(-50%);
    top: -4px;
  }
 
  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 0;
    background: rgb(238, 129, 27) !important;
    outline: none;
    border: none !important;
    -webkit-transition: .2s;
    transition: 0.2s;
    padding: 0 !important;
    margin: 0 !important;
    z-index: 1;
    cursor: pointer;
    direction: ltr;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: rgb(238, 129, 27);
    cursor: pointer;
    z-index: 2;
    border: 3px solid rgb(248, 183, 123);
    border-radius: 2px !important;
    transform: rotate(45deg);
  }
  .slider::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: rgb(238, 129, 27);
    cursor: pointer;
    z-index: 2;
    border: 3px solid rgb(248, 183, 123);
    border-radius: 2px !important;
    transform: rotate(45deg);
  }
  </style>