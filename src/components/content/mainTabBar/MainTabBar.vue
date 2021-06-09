<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <span class="icon iconfont icon-home" slot="icon"></span>
      <span class="icon iconfont icon-home" slot="icon-active"></span>
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <span class="icon iconfont icon-category" slot="icon"></span>
      <span class="icon iconfont icon-category" slot="icon-active"></span>
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <span class="icon iconfont icon-cart" slot="icon"></span>
      <span class="icon iconfont icon-cart" slot="icon-active"></span>
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <span class="icon iconfont icon-me" slot="icon"></span>
      <span class="icon iconfont icon-me" slot="icon-active"></span>
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>