<template>
    <div class="flex-col">
        <!-- <template  > -->
            <div class="flex-col-start p-16 section " v-for="(item , index) in items" :key="index">
                <label for="input" class="f-22-bold">{{ item.label }}</label>
                <RecursiveComponent :items="item"/>
            </div>
        <!-- </template> -->
    </div>
    
</template>
<script>
import RecursiveComponent from "./RecursiveComponent"
export default {
    name:'FilterInput',
    components:{
        RecursiveComponent
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
                "label": "فقط کالاهای موجود",
                "children": [
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
            }
                ],
                "parent": "",
                "options": [
                { value: 'checkbox1', title: 'checkbox1' },
                ],
            },
            {
                "type": "number",
                "name": "name3",
                "label": "رنج قیمت",
                "children": [],
                "parent": "",
                "options": [
                { value: 'checkbox1', title: 'checkbox1' },
                ],
            },
            {
                "type": "dropdown",
                "name": "name4",
                "label": "دسته  بندی",
                "children": [],
                "parent": "",
                "options": [
                { value: 'checkbox1', title: 'فروشنده رسمی' },
                { value: 'checkbox2', title: 'فروشنده برگزیده' },
                { value: 'checkbox3', title: 'دیجی کالا' },
                { value: 'checkbox4', title: 'کسب و کارهای بومی' }
                ],
            },
            ],
            
            
        }
    },
    mounted() {

    },
    methods:{
        // test(e) {
        //     return {
        //         this.items[]
        //     }
        // }
    }
}
</script>
<style scoped>

</style>