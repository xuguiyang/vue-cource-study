<template>
  <div class="floatcar"
    @touchstart="handleTouchStart"
    @touchmove.prevent="handleTouchMove"
    @touchend="handleTouchEnd"
    :style="{'width':itemWidth+'px','height':itemHeight+'px','left':left+'px','top':top+'px'}"
    ref="div">
      <div class="iconfont icon-gouwuchekong shopcar" @click="gocar"></div>
  </div>
</template>

<script>
  export default {
    name: "car",
    props:{
      itemWidth:{
        type:Number,
        default:60
      },
      itemHeight:{
        type:Number,
        default:60
      },
      gapWidth:{ // car距离边界宽度
        type:Number,
        default:0
      },
      coefficientHeight:{
        type:Number,
        default:0.6
      }
    },
     data(){
      return{
        left:0,
        top:0,
        startToMove: false,
        clientW: document.documentElement.clientWidth,
        clientH: document.documentElement.clientHeight
      }
    },
    created(){
      this.clientX = document.documentElement.clientWidth;
      this.clientY = document.documentElement.clientHeight;
      this.left = this.clientX - this.itemWidth - this.gapWidth;
      this.top = (this.clientH/2 - this.itemHeight/2)
    },
    methods:{
      gocar() {
        this.$router.push({
          path: "car"
        })
      },
      //开始
      handleTouchStart() {
        this.startToMove = true
        this.$refs.div.style.transition = "none"
      },
      //拖动
      handleTouchMove(e) {
        const clientX = e.targetTouches[0].clientX
        const clientY = e.targetTouches[0].clientY
        const isInScreen = clientX <= this.clientW && clientX >= 0 && clientY <= this.clientH && clientY >=0
        if(this.startToMove && e.targetTouches.length === 1) {
            if(isInScreen) {
                this.left = clientX - this.itemWidth/2
                this.top = clientY - this.itemHeight/2
            }
        }
      },
      //结束
      handleTouchEnd() {
        if(this.left < (this.clientW / 2)) {
            this.left = 0
            this.handleIconY()
        } else {
            this.left = this.clientW - this.itemWidth
            this.handleIconY()
        }
        this.$refs.div.style.transition = "all .3s"
      },
       //上下边界点判断
      handleIconY() {
        if (this.top < 0) {
            this.top = this.itemHeight
        } else if(this.top + this.itemHeight > this.clientH) {
            this.top = this.clientH - this.itemHeight*2
        }
      },
    },
  }
</script>

<style lang="less" scoped>
  .floatcar{
    background:rgb(255,255,255);
    box-shadow:0 2px 10px 0 rgba(0,0,0,0.1);
    border-radius:50%;
    color: #666666;
    z-index: 999;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 2rem;
    .shopcar{
      width: 100%;
      text-align: center;
      font-size:35px;
      color: red;
    }
  }
</style>
