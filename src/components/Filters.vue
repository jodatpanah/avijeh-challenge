<template>
    <div class="flex-col w-100">
        <div class="flex-col-start p-16 section w-100" v-for="(item , index) in items" :key="index">
            <RecursiveComponent  :items="item"/>
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
               <p class="f-light">{{ sourceObject.find(a => a.name === index)?.label }} : {{ filter }}</p> 
            </div>
          </div>
      </div>
    </div>
    
</template>
<script>
import RecursiveComponent from "./RecursiveComponent"
export default {
    name:'Filters',
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
                    "min":0,
                    "max":5000,
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
                    "type": "multi-checkbox",
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
              "id":"1",
              "parentId":""
            },
            {
              "type": "multi-checkbox",
              "name": "name2",
              "label": "انواع فروشنده",
              "children": [],
              "parent": "name3",
              "id":"2",
              "parentId":"3",
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
              "children": [],
              "parent": "",
              "id":"3",
              "parentId":"",
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
              "id":"4",
              "parentId":"",
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
              "id":"5",
              "parentId":"",
              "options": [
                { value: 'filter-price', title: 'فیلتر بر اساس قیمت' },
              ],
            },
            {
              "type": "number",
              "name": "price-range",
              "label": "رنج قیمت",
              "min":0,
              "max":5000,
              "children": [],
              "parent": "filter-price",
              "id":"6",
              "parentId":"5",
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
              "id":"7",
              "parentId":"",
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
              "id":"8",
              "parentId":"7",
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
              "id":"9",
              "parentId":"7",
              "options": [
                { value: 'checkbox1', title: '1فروشنده برگزیده' },
                { value: 'checkbox2', title: '2فروشنده برگزیده' },
                { value: 'checkbox3', title: '3فروشنده برگزیده' },
                { value: 'checkbox4', title: '4فروشنده برگزیده' }
              ]
            },
          ],
            filters:[]
        }
    },
    
    methods:{
      removeAll() {
        this.$router.replace(delete 'query');
      },

      removeIndex(e) {
        let newQuery = {...this.$route.query}
        delete newQuery[e]
        const children = this.items.find(a => a.name === e)?.children
        if(children?.length) {
          for(let i = 0 ; i <children.length ; i++) {
            delete newQuery[children[i].name]
          }
        }
        this.$router.push({query: newQuery})
      },

      processSourceObject(data) {
        data.forEach(child => {
          if (child.parentId !== "") {
            const parent = data.find(obj => obj.id === child.parentId);
            if (!parent) {
              console.error(`Parent with id ${child.parentId} not found.`);
              return;
            }
            if (!parent.children) {
              parent.children = [];
            }
            parent.children.push(child);
          }
        });
        for(let i =0 ; i < data.length ; i++) {
          if (data[i].parentId !== "") {
            delete data[i]
          }
          // else {
          //   this.items.push(data[i])
          // }
        }
        // this.items = data
        console.log('sdkj' , this.items);
      },
    },

    mounted() {
      // this.processSourceObject(this.sourceObject)
    },
}
</script>
<style scoped>
.filter {
  background-color: green;
  border-radius: 8px;
}
</style>