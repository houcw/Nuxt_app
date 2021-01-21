<template>
  <div>
    <div>
      <Nuxt />
    </div>
    <!-- 底部导航 -->
    <div class="bottomTab">
      <div
        class="tabItem"
        v-for="(item, index) in tabList"
        :key="index"
        @click="selectTab(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: [
        { path: "/", name: "首页" },
        { path: "/home/home", name: "商品列表" },
        { path: "/car/car", name: "购物车" },
        { path: "/account/account", name: "我的" },
      ],
    };
  },
  mounted() {},
  methods: {
    selectTab(path) {
      this.$router.push(path);
    },
    handleClose() {},
  },
};
</script>
<style  scoped>
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
.bottomTab {
  position: absolute;
  height: 50px;
  width: 100%;
  background: gray;
  bottom: 0;
  left: 0;
  line-height: 50px;
}
.tabItem {
  height: 50px;
  float: left;
  text-align: center;
  width: 25%;
}
</style>
