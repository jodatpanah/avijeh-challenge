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
            <div class="filter p-8 pointer" v-for="(filter , index) in $route.query" :key="index" @click="removeIndex(index)">
<!--              {{index}}-->
               <p class="f-light">{{ sourceObject.find(a => a.name === index)?.label }} : {{ filter }}
<!--                <span v-for="(item , index2) in filter" :key="index2">-->
<!--                  <span v-if="filter.length >= 2"> , </span>-->
<!--                  {{ item }} -->
<!--                </span>-->
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
                "type": "multi-checkbox",
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
                    "type": "multi-checkbox",
                    "name": "sellers",
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
                "name": "price",
                "label": "قیمت",
                "children": [
                  {
                    "type": "number",
                    "name": "price-range",
                    "label": "رنج قیمت",
                    "children": [],
                    "parent": "filter-price",
                    "options": [
                      { value: 'price-range', title: 'checkbox1' },
                    ],
                  },
                ],
                "parent": "",
                "options": [
                  { value: 'filter-price', title: 'فیلتر بر اساس قیمت' },
                ],
              },

            {
                "type": "dropdown",
                "name": "sellers2",
                "label": "دسته  بندی",
                "children": [
                {
                    "type": "checkbox",
                    "name": "sellers2-option",
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
                    "type": "multi-checkbox",
                    "name": "sellers3",
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
          sourceObject:[
            {
              "type": "text",
              "name": "name1",
              "label": "نام کالا",
              "children": [],
              "parent": "",
            },
            {
              "type": "multi-checkbox",
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
              ],
              "parent": "",
              "options": [
                { value: 'checkbox1', title: 'فقط کالاهای موجود' },
              ],
            },
            {
              "type": "multi-checkbox",
              "name": "sellers",
              "label": "انواع فروشنده",
              "children": [],
              "parent": "checkbox1",
              "options": [
                { value: 'checkbox1', title: 'فروشنده رسمی' },
                { value: 'checkbox2', title: 'فروشنده برگزیده' },
                { value: 'checkbox3', title: 'دیجی کالا' },
                { value: 'checkbox4', title: 'کسب و کارهای بومی' }
              ],
            },
            {
              "type": "checkbox",
              "name": "price",
              "label": "قیمت",
              "children": [
              ],
              "parent": "",
              "options": [
                { value: 'filter-price', title: 'فیلتر بر اساس قیمت' },
              ],
            },
            {
              "type": "number",
              "name": "price-range",
              "label": "رنج قیمت",
              "children": [],
              "parent": "filter-price",
              "options": [
                { value: 'price-range', title: 'checkbox1' },
              ],
            },
            {
              "type": "dropdown",
              "name": "sellers2",
              "label": "دسته  بندی",
              "children": [
              ],
              "parent": "",
              "options": [
                { value: 'checkbox1', title: 'فروشنده رسمی' },
                { value: 'checkbox2', title: 'فروشنده برگزیده' },
                { value: 'checkbox3', title: 'دیجی کالا' },
                { value: 'checkbox4', title: 'کسب و کارهای بومی' }
              ],
            },
            {
              "type": "checkbox",
              "name": "sellers2-option",
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
              "name": "sellers3",
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
        // alert(e)
        let newQuery = {...this.$route.query}
        delete newQuery[e]
        const children = this.items.find(a => a.name === e).children
        if(children.length) {
          for(let i = 0 ; i <children.length ; i++) {
            delete newQuery[children[i].name]
          }
        }
        this.$router.push({query: newQuery})
        // delete this.$route.query[e]
        // console.log('alert',this.$route.query[e]);
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