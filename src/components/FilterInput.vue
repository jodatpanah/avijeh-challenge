<template>
    <div class="flex-col w-100">
      <div class="flex-col-start p-16 section w-100" v-for="(item , index) in items" :key="index">
          <RecursiveComponent  :items="item" @addFilters="addFilters"/>
      </div>
      <div class="section flex-col gap-16">
          <p class="f-22-bold">
              فیلتر ها
          </p>
          <button class="btn red-btn pointer" @click="removeAll" v-if="Object.keys($route.query).length">
            <p class="f-light">حذف همه</p>
          </button>
          <div class="filters flex-row-start gap-16">
            <div class="filter p-8 pointer" v-for="(filter , index) in $route.query" :key="index" @click="removeIndex(index , filter)">
               <p class="f-light">{{index}} {{ filter }}
                <span v-for="(item , index2) in filter" :key="index2">
                  <span v-if="filter.length >= 2"> , </span>
                  {{ item }} 
                </span>
              </p> 
            </div>
          </div>
      </div>
    </div>
    
</template>
<script>
import RecursiveComponent from "./RecursiveComponent"
export default {
    name:'FilterInput',
    components:{
        RecursiveComponent,
},
    data() {
        return {
            items:[
            {
                "type": "text",
                "name": "name1",
                "label": "نام کالا",
                "children": [],
                "parent": "",
            },
            {
                "type": "checkbox",
                "name": "name2",
                "label": "انواع فروشنده",
                "children": [],
                "parent": "name3",
                "options": [
                { value: 'checkbox1', title: 'فروشنده رسمی' },
                { value: 'checkbox2', title: 'فروشنده برگزیده' },
                { value: 'checkbox3', title: 'دیجی کالا' },
                { value: 'checkbox4', title: 'کسب و کارهای بومی' }
                ],
            },
            {
                "type": "checkbox",
                "name": "name3",
                "label": " کالاهای موجود",
                "children": [
                    {
                    "type": "checkbox",
                    "name": "name2",
                    "label": "انواع فروشنده",
                    "children": [],
                    "parent": "checkbox1",
                    "options": [
                    { value: 'checkbox1', title: 'فروشنده رسمی' },
                    { value: 'checkbox2', title: 'فروشنده برگزیده' },
                    { value: 'checkbox3', title: 'دیجی کالا' },
                    { value: 'checkbox4', title: 'کسب و کارهای بومی' }
                    ],
                    }
                ],
                "parent": "",
                "options": [
                { value: 'checkbox1', title: 'فقط کالاهای موجود' },
                ],
            },
              {
                "type": "checkbox",
                "name": "name3",
                "label": "قیمت",
                "children": [
                  {
                    "type": "number",
                    "name": "name3",
                    "label": "رنج قیمت",
                    "children": [],
                    "parent": "checkbox1",
                    "options": [
                      { value: 'checkbox1', title: 'checkbox1' },
                    ],
                  },
                ],
                "parent": "",
                "options": [
                  { value: 'checkbox1', title: 'فیلتر بر اساس قیمت' },
                ],
              },

            {
                "type": "dropdown",
                "name": "sellers",
                "label": "دسته  بندی",
                "children": [
                {
                    "type": "checkbox",
                    "name": "name2",
                    "label": " انواع فروشنده رسمی",
                    "children": [],
                    "parent": "checkbox1",
                    "options": [
                    { value: 'checkbox1', title: '1فروشنده رسمی' },
                    { value: 'checkbox2', title: '2فروشنده رسمی' },
                    { value: 'checkbox3', title: ' 3فروشنده رسمی' },
                    { value: 'checkbox4', title: '4فروشنده رسمی' }
                    ],
                },
                {
                    "type": "checkbox",
                    "name": "sellers",
                    "label": "انواع فروشنده برگزیده",
                    "children": [],
                    "parent": "checkbox2",
                    "options": [
                    { value: 'checkbox1', title: '1فروشنده برگزیده' },
                    { value: 'checkbox2', title: '2فروشنده برگزیده' },
                    { value: 'checkbox3', title: '3فروشنده برگزیده' },
                    { value: 'checkbox4', title: '4فروشنده برگزیده' }
                    ]
                },
                ],
                "parent": "",
                "options": [
                { value: 'checkbox1', title: 'فروشنده رسمی' },
                { value: 'checkbox2', title: 'فروشنده برگزیده' },
                { value: 'checkbox3', title: 'دیجی کالا' },
                { value: 'checkbox4', title: 'کسب و کارهای بومی' }
                ],
            },
            ],
            filters:[
              // {
              //   value:'',
              //   title:''
              // }
            ]

        }
    },
    mounted() {

    },
    methods:{
      addFilters(e) {
        this.filters.push(e[0])
      },
      removeAll() {
        this.$router.replace(delete 'query');
      },
      removeIndex(e) {
        alert(e)
        // delete this.$route.query[e]
        console.log('alert',this.$route.query[e]);
        // delete this.$route.query[e]
        // this.$router.replace({'query': {...this.$route.query , delete }})
        // this.$router.replace({[e] : null})
      }
    }
}
</script>
<style scoped>
.filter {
  background-color: green;
  border-radius: 8px;
}
</style>