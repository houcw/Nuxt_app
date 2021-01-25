<template>
  <div>
    <div class="goods" v-for="(item,index) in infor" :key="index">
      <p>{{item.name}}</p>
      <h1>{{item.price}}</h1>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import $api from '../axios/apiConfig'

export default {
  data(){
    return{
      infor:[]
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      axios.get($api.baseUrl+'/goods/goodslist').then(res=>{
        this.infor = res.data
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.goods{
  width:125px ;
  height: 100px;
  border: 1px solid gray;
  float: left;
}
</style>