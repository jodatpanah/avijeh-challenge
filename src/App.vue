<template>
  <div id="app">
    <Filters/>
  </div>
</template>
<script>
// import {customReplace} from './library/customeQuery'
import Filters from './components/Filters.vue';
export default {
  name: 'App',
  components: {
    Filters
},
  data() {
    return {
      customeQuery:''
    }
  },
  // watch:{
  //   '$route'() {
  //     this.queryEncode()
  //   }
  // },
  methods:{
    // queryEncode() {
    //   this.customeQuery = customReplace('this.$router.query.toString()')
    //   console.log('tetetetete' , this.$route);
    //   this.$router.push({fullPath : this.$route.path + 'p'})
    // }
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
</style>
