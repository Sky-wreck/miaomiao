<template>
    <mt-index-list>
        <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
            <mt-cell :title="city.name" v-for="city in data.list" :key="city.cityId"></mt-cell>
        </mt-index-section>
    </mt-index-list>
</template>

<script>
import axios from 'axios'

export default {

    data(){
        return {
            datalist : []
        }
    },
    name : 'City',
    mounted(){
        axios({
            url:"https://m.maizuo.com/gateway?k=9206772",
            headers : {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596848294105531641430017","bc":"310100"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res =>{
            //console.log(res.data)
            this.datalist = this.handleCity(res.data.data.cities)
        })
    },

    methods:{
        handleCity(datalist){
            console.log(datalist)
            var letterArr = []
            for(var i = 65; i < 91; i++){  //收集26个字母
                letterArr.push(String.fromCharCode(i));
            }
            console.log(letterArr)

            var newlist = []
            for(var j=0;j<letterArr.length;j++){  //通过拼音的首字母过滤
                var arr = datalist.filter(item=>item.pinyin.substring(0,1)===letterArr[j].toLowerCase())
                //console.log(arr)
                //将每个字母开头分成一组，加入到数组中
                if(arr.length>0){
                    newlist.push({
                        index: letterArr[j],
                        list: arr
                    })
                }
            }
            return newlist

        }
    }
}
</script>

<style scoped>
</style>