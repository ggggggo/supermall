<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index"
      ><img :src="item.image" alt=""
    /></swiper-item>
  </swiper>
</template>
<script>
import Swiper from "@/components/common/swiper/Swiper.vue";
import SwiperItem from "@/components/common/swiper/SwiperItem.vue";
export default {
  components: { Swiper, SwiperItem },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {},
};
</script>