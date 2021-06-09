<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend_item">
      <a href="">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
  .recommend_item {
    text-align: center;
    flex: 1;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 5px;
    }
  }
}
</style>