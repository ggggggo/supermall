<template>
  <div id="home">
    <nav-bar leftBgColor="red">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import { getHomeMultidata } from "@/network/home.js";
export default {
  components: { NavBar, HomeSwiper, RecommendView },
  data() {
    return {
      banners: [],
      recommend: [],
    };
  },
  created() {
    getHomeMultidata().then((data) => {
      console.log(data);
      this.banners = data.data.banner.list;
      this.recommend = data.data.recommend.list;
      console.log(data.data.banner.list);
    });
  },
};
</script>