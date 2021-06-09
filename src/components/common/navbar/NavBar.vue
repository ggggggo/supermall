<template>
  <div class="nav_bar">
    <div class="left" :style="{ backgroundColor: leftBgColor }">
      <slot name="left">111</slot>
    </div>
    <div class="center" :style="{ backgroundColor: centerBgColor }">
      <slot name="center">111</slot>
    </div>
    <div class="right" :style="{ backgroundColor: rightBgColor }">
      <slot name="rigth">111</slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    leftBgColor: {
      type: String,
      default: "",
    },
    centerBgColor: {
      type: String,
      default: "",
    },
    rightBgColor: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.nav_bar {
  height: 44px;
  line-height: 44px;
  text-align: center;
  display: flex;
  background-color: pink;
  color: black;
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
}
</style>