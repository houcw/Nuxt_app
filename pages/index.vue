<template>
  <div class="home">
    <div class="banner">banner区域</div>
    首页
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import $api from './axios/apiConfig'
export default {
  data(){
    return{

    }
  },
  mounted(){


  },
  methods:{
    handleOpen(){

    },
    handleClose(){

    }
  }
};
</script>

<style lang="scss">
.home{
  .banner{
    height: 100px;
    background: red;
  }
}

</style>
