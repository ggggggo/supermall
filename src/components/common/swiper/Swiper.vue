<template>
  <div id="hy_swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div
          v-for="(item, index) in slideCount"
          :key="index"
          class="indi_item"
          :class="{ active: index === currentIndex - 1 }"
          @click="itemClick(index)"
        ></div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalWidth: 0,
      swiperStyle: {},
      slideCount: 0,
      currentIndex: 1,
      scrollTimer: null,
      lastTimer: null,
      scrolling: false,
      touchX: 0,
      moveX: 0,
    };
  },
  props: {
    showIndicator: {
      type: Boolean,
      default: true,
    },
    animDuration: {
      type: Number,
      default: 500,
    },
    interval: {
      type: Number,
      default: 2500,
    },
    touchMoveX: {
      type: Number,
      default: 0.25,
    },
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 2000);
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index + 1;
      this.scrollContent(-this.currentIndex * this.totalWidth);
    },
    touchStart(e) {
      if (this.scrolling) return;
      clearInterval(this.scrollTimer);
      this.touchX = e.touches[0].clientX;
    },
    touchMove(e) {
      this.moveX = e.touches[0].clientX - this.touchX;
      this.setTransform(-this.currentIndex * this.totalWidth + this.moveX);
    },
    touchEnd() {
      if (this.moveX === 0) return;
      let distans = Math.abs(this.moveX);
      if (this.moveX > 0 && this.moveX > this.totalWidth * this.touchMoveX) {
        this.currentIndex--;
      } else if (
        this.moveX < 0 &&
        distans > this.totalWidth * this.touchMoveX
      ) {
        this.currentIndex++;
      }
      // this.scrolling = true;
      // this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      // this.setTransform(-this.currentIndex * this.totalWidth);
      // this.swiperPositon();
      // this.scrolling = false;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      this.startTimer();
    },
    scrollContent(positon) {
      this.scrolling = true;
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      this.setTransform(positon);
      this.swiperPositon();
      this.scrolling = false;
    },
    startTimer() {
      this.scrollTimer = setInterval(() => {
        this.currentIndex++;
        // this.scrolling = true;
        // this.swiperStyle.transition = "transform " + this.animDuration + "ms";
        // this.setTransform(-this.currentIndex * this.totalWidth);
        // this.swiperPositon();
        // this.scrolling = false;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    swiperPositon() {
      clearTimeout(this.lastTimer);
      this.lastTimer = null;
      this.lastTimer = setTimeout(() => {
        if (this.currentIndex >= this.slideCount + 1) {
          this.swiperStyle.transition = "0ms";
          this.currentIndex = 1;
          this.setTransform(-this.totalWidth * this.currentIndex);
        } else if (this.currentIndex === 0) {
          this.swiperStyle.transition = "0ms";
          this.currentIndex = this.slideCount;
          this.setTransform(-this.totalWidth * this.currentIndex);
        }
      }, this.animDuration);
    },
    handleDom() {
      let swiperEl = document.querySelector(".swiper");
      let slidesELs = swiperEl.getElementsByClassName("slide");
      this.slideCount = slidesELs.length;
      if (this.slideCount > 1) {
        let cloneFirst = slidesELs[0].cloneNode(true);
        let cloneLast = slidesELs[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesELs[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
        this.setTransform(-this.totalWidth);
      }
    },
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
      this.swiperStyle["-webkit-transform"] = `translate3d(${position},0,0)`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position},0,0)`;
    },
  },
};
</script>
<style lang="scss" scoped>
#hy_swiper {
  overflow: hidden;
  position: relative;
  .swiper {
    display: flex;
  }
  .indicator {
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: center;
    bottom: 8px;
    .indi_item {
      box-sizing: border-box;
      cursor: pointer;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: white;
      line-height: 8px;
      text-align: center;
      font-size: 12px;
      margin: 0 5px;
      &.active {
        background-color: red;
      }
    }
  }
}
</style>