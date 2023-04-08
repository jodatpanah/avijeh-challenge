<template>
    <div class="slider-container flex-col w-100">
      <span class="slider-back" :style="{backgroundImage: 'linear-gradient(to right, var(--active-input) '+ ((calcText[item.name] / item.max || 0)) + '% ,'+' transparent '+((calckText[item.name] / item.max || 0)) +'%)'}"/>
      <input @change="$addFilter(item , value * item.max , '' , '' , '' , $route.query)" type="range" class="slider" v-model="value">
      <label class="rangenumber flex-row-between">
        <a class="f-18-med">{{calcText[item.name]}}</a>
        <a class="f-18-med">0 </a>
      </label>
    </div>
  </template>
  <script>
  import { calcText } from "@/library/reuseableFunctions"
  export default {
    name: "TheSlider",
    props: {
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
        value: 0
      }
    },
    computed: {
      calcText
    },
    watch:{
      'calcText'() {
        this.value = this.calcText[this.item.name] / this.item.max || 0
      }
    },
    mounted() {
      this.value = this.calcText[this.item.name] / this.item.max || 0
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
    background: var(--active-input) !important;
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
    background: var(--active-input);
    cursor: pointer;
    z-index: 2;
    border: 3px solid var(--thumb-border);
    border-radius: 2px !important;
    transform: rotate(45deg);
  }
  .slider::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: var(--active-input);
    cursor: pointer;
    z-index: 2;
    border: 3px solid var(--thumb-border);
    border-radius: 2px !important;
    transform: rotate(45deg);
  }
  </style>