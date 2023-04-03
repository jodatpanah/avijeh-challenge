<template>
  <div id="app">
    <FilterInput/>
  </div>
</template>

<script>
import FilterInput from './components/FilterInput.vue';
export default {
  name: 'App',
  components: {
    FilterInput,
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
}
</style>
