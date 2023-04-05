<template>
    <div class="w-100">
      <input @input="searchtext(item.name , $event.target.value , '')" :value="calckText[item.name]" :placeholder="item.title" name="input" class="f-18-med" type="text">
    </div>
</template>
<script>
import { calckText } from "@/library/functions"
export default {
    name:'TextInput',
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
          values:[]
        }
    },
    computed:{
        calckText,
    },
    methods: {
        // searchtext(name , value) {
        //   let newQuery = {...this.$route.query}
        //   newQuery[name] = value
        //   this.$router.push({query: newQuery})
        //   if(!this.$route.query[name]) {
        //     delete newQuery[name]
        //     this.$router.push({query: newQuery})
        //   }
        // },


    //     searchtext(name , value) {
    //   let newQuery = {...this.$route.query}
    //   // this.values.push(value)
    //   // newQuery[name] = this.values.join(",")
    //   newQuery[name] = value
    //   this.$router.push({query: newQuery})
    //   if(!this.$route.query[name]) {
    //     delete newQuery[name]
    //     this.$router.push({query: newQuery})
    //   }
    // }

    searchtext(name , value , active , join) {
        let newQuery = {...this.$route.query}
        console.log('test' , newQuery[name] , value);
        if(active === 'DELETE') {
        delete newQuery[name]
        this.values.splice(this.values.indexOf(value) , 1)
        newQuery[name] = this.values.join(join)
      } 
      if(!value) {
        delete newQuery[name]
      }
      else {
        this.values.push(value)
        newQuery[name] = value
      }
      this.$router.push({query: newQuery})
    }
    },
}
</script>