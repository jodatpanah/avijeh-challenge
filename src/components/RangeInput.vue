<template>
    <div class="slider-container flex-col">
      <span class="slider-back" :style="{backgroundImage: 'linear-gradient(to right, var(--range-input) '+ (value*100) + '% ,'+' transparent '+(value*100) +'%)'}"/>
      <input @change="putcash(value);" type="range" class="slider" id="one" min="0" max="1" step="0.01" v-model="value">
      <label class="rangenumber"  for="one">
        <a class="reg_12 f_gray">{{(value*100).toFixed(0)}}%</a>
      </label>
    </div>
  </template>
  <script>
  export default {
    name: "TheSlider",
    props: ['id', 'percent'],
    emits: ['change'],
    data() {
      return {
        decimal: 8,
        value: this.percent || 0
      }
    },
    watch: {
      percent(val) {
        this.value = val
      }
    },
    mounted() {
    },
    methods: {
      putcash() {
        this.$emit('change', this.value)
      },
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
    background-color: #696969;
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
    background: #EDEFF2 !important;
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
    width: 10px;
    height: 10px;
    background: var(--range-input);
    cursor: pointer;
    z-index: 2;
    border: 3px solid #DBDCDE;
    border-radius: 2px !important;
    transform: rotate(45deg);
  }
  .slider::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: var(--range-input);
    cursor: pointer;
    z-index: 2;
    border: 3px solid #DBDCDE;
    border-radius: 2px !important;
    transform: rotate(45deg);
  }
  </style>