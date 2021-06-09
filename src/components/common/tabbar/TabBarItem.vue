<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item_icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item-icon-active" v-show="isActive" :style="activeStyle">
      <slot name="icon-active"></slot>
    </div>
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    link: {
      type: String,
      required: true,
    },
    activeColor: {
      typeof: String,
      default: "red",
    },
  },
  computed: {
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : "";
    },
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeColor1() {
      return { color: this.activeColor };
    },
  },
  methods: {
    itemClick() {
      if (this.link != this.$route.path) {
        this.$router.replace(this.link);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#tab-bar-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .item_icon,
  .item-icon-active,
  .item-text {
    width: 44px;
    vertical-align: middle;
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 5px;
  }
  .item-icon-active {
    color: red;
  }
  .item-text {
    font-size: 13px;
    color: #333;
  }
}
</style>