<template>
  <div>
    <div>数据展示：{{infor}}</div>
  </div>
</template>

<script>
import axios from "axios";
import $api from '../axios/apiConfig'

export default {
  data(){
    return{

      
      infor:{
        
      }
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      axios.get($api.baseUrl+'/admin/login?userName=123').then(res=>{
        this.infor = res.data.data
      })
    }
  }
};
</script>

<style lang='scss' scoped>
</style>