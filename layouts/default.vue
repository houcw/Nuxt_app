<template>
  <div>
    <el-container>
      <el-aside class="leftNav" style="width:200px">
        <div style="height:60px"></div>
        <div>
          <nuxt-link to="/">数据中心</nuxt-link>
          <nuxt-link to="/home/home">首页1</nuxt-link>
        </div>
      </el-aside>
      <el-container>
        <el-header style="text-align:right;background:red">
      <span>王小虎</span>
        </el-header>
        <el-main>
          <Nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.topHeader {
  width: 100%;
  height: 50px;
  background: red;
}
.leftNav {
background-color: rgb(238, 241, 246)
}
.centBox {
}
</style>
