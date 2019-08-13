<template>
  <div>
    <!-- <transition> -->
      <div ref="dragIcon" class="dragIcon" @touchstart="handleTouchStart" @touchmove.prevent="handleTouchMove" @touchend="handleTouchEnd" :style="{left: left + 'px',top: top + 'px',width: itemWidth + 'px',height: itemHeight + 'px'}" v-text="text" v-if="isShow">
      </div>
    <!-- </transition> -->
  </div>
</template>

<script>
  export default {
    name: 'dragIcon',
    props: {
      text: {
        type: String,
        default: '首页'
      },
      itemWidth: {
        type: Number,
        default: 40
      },
      itemHeight: {
        type: Number,
        default: 40
      }
    },
    data() {
      return {
        left: 0,
        top: 0,
        startToMove: false,
        isShow: true,
        timer: null,
        currentTop: null,
        clientW: document.documentElement.clientWidth,
        clientH: document.documentElement.clientHeight
      }
    },
    created() {
      this.left = (this.clientW - this.itemWidth)
      this.top = (this.clientH / 2 - this.itemHeight / 2)
    },
    mounted() {
      this.bindScrollEvent()
    },
    beforeDestroy() {
      // 记得销毁一些全局的的事件
      this.removeScrollEvent()
    },
    methods: {
      handleTouchStart() {
        this.startToMove = true
        this.$refs.dragIcon.style.transition = "none"
      },
      handleTouchMove(e) {
        const clientX = e.targetTouches[0].clientX
        const clientY = e.targetTouches[0].clientY
        const isInScreen = clientX <= this.clientW && clientX >= 0 && clientY <= this.clientH && clientY >= 0
        if (this.startToMove && e.targetTouches.length === 1) {
          if (isInScreen) {
            this.left = clientX - this.itemWidth / 2
            this.top = clientY - this.itemHeight / 2
          }
        }
      },
      handleTouchEnd() {
        if (this.left < (this.clientW / 2)) {
          this.left = 0
          this.handleIconY()
        } else {
          this.left = this.clientW - this.itemWidth
          this.handleIconY()
        }
        this.$refs.dragIcon.style.transition = "all .3s"
      },
      handleIconY() {
        if (this.top < 0) {
          this.top = 0
        } else if (this.top + this.itemHeight > this.clientH) {
          this.top = this.clientH - this.itemHeight
        }
      },
      bindScrollEvent() {
        window.addEventListener('scroll', this.handleScrollStart)
      },
      removeScrollEvent() {
        window.removeEventListener('scroll', this.handleScrollStart)
      },
      handleScrollStart() {
        this.isShow = false
        this.timer && clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.handleScrollEnd()
        }, 300)
        this.currentTop = document.documentElement.scrollTop || document.body.scrollTop
      },
      handleScrollEnd() {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 判断是否停止滚动的条件
        if (this.scrollTop == this.currentTop) {
          this.isShow = true
        }
      }
    }
  }
</script>

<style scoped lang="less">

</style>
