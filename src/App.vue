<template>
  <div id="app">
    <FilterInput/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import { RouterView } from 'vue-router';



import FilterInput from './components/FilterInput.vue';
export default {
  name: 'App',
  components: {
    // RouterView,
    FilterInput
},
  data() {
    return {
    
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 16px;
  background-color: var(--background-main);
  min-height: 100vh;
}
.section {
  background: var(--background-section);
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  position: relative;
  animation-name: button;
  animation-duration: 0.75s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
/* .section:before,
.section:after,
.section div:before,
.section div:after{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
} */
/* .section .inner {
  position: relative;
  background: var(--background-section);
  display: block;
  border-radius: 25px;
  position: relative;
  animation-name: button-inner;
  animation-duration: 0.75s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
} */
/* @keyframes button-before {
  from {box-shadow: 0 0 0 #fff;}
  to {box-shadow: -10px -8px 20px #fff;}
}

@keyframes button-after {
  from {box-shadow: 0 0 0 #9496B0;}
  to {box-shadow: 10px 8px 20px #9496B0;}
}

@keyframes button-inner {
  from {background: #d2d5d8;}
  to {background: linear-gradient(165deg, rgba(255,255,255,1) 0%, rgba(210,213,216,1) 50%, rgba(210,213,216,1) 95%, rgba(148,150,176,1) 100%);}
}

@keyframes button {
  from {background: #d2d5d8;}
  to {background: linear-gradient(165deg, rgba(255,255,255,1) 10%, rgba(148,150,176,1) 100%);}
}

@keyframes button-text {
  from {opacity: 0;}
  to {opacity: 1;}
} */
</style>
