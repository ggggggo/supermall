<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
  > img {
    width: 100%;
  }
}
</style>