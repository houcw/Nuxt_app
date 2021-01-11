<template>
  <div>
    <h1>这是首页的{{ infor.title }}</h1>
    <ul>
      <li  v-for="(item,index) in listData" :key="index">日期--{{item.businessDay}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      infor:{
        title:'测试列表'
      },
      listData:[]
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      axios.get('https://innjoy-test-pms.innjoysmart.com/api/pms-finance/bill/cashBasis/?pageSize=15&pageCurrent=1&hotelId=BB1566204880897&channel=50').then(res=>{
        this.listData = res.data.data.records
      })
    }
  }
};
</script>

<style>
</style>