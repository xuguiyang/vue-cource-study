<template>
  <div class="rotateBg" :style="{transform:rotate_angle,transition:rotate_transition}">
    <img v-bind:src="imgUrl" />
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      imgUrl: require("../components/CustomPopup/b.jpg"),
      cat: 45, //总共8个扇形区域，每个区域约45度
      isAllowClick: true, //是否能够点击
      start_rotating_deg: 0, //初始旋转角度
      rotate_deg: 0, //将要旋转的角度
      rotate: 0, //实际偏移角度
      rotate_transition: "transform 3s ease-in-out" //初始化选中的过度属性控制
    };
  },
  computed: {},
  methods: {
    startLottery() {
      this.rotating();
    },
    rotating() {
      if (!this.isAllowClick) return;
      this.isAllowClick = false;
      var rand_circle = 5; //默认多旋转5圈
      var randomDeg = Math.floor(Math.random() * 360); //获取0到359之间的随机度数
      var deg =
        this.start_rotating_deg +
        rand_circle * 360 +
        randomDeg -
        (this.start_rotating_deg % 360); //将要旋转的度数
      this.start_rotating_deg = deg; //下一次旋转的开始度数
      this.rotate_deg = "rotate(" + deg + "deg)";
      this.rotate = deg % 360; //实际偏移的度数
      var that = this;
      setTimeout(function() {
        that.isAllowClick = true;
        if (that.rotate <= that.cat * 1) {
          alert("恭喜您，获得100SZFM");
        } else if (that.rotate <= that.cat * 2) {
          alert("恭喜您，获得20SZFM");
        } else if (that.rotate <= that.cat * 3) {
          alert("恭喜您，获得200SZFM");
        } else if (that.rotate <= that.cat * 4) {
          alert("恭喜您，获得10SZFM");
        } else if (that.rotate <= that.cat * 5) {
          alert("恭喜您，获得30SZFM");
        } else if (that.rotate <= that.cat * 6) {
          alert("恭喜您，获得5SZFM");
        } else if (that.rotate <= that.cat * 7) {
          alert("恭喜您，获得300SZFM");
        } else if (that.rotate <= that.cat * 8) {
          alert("恭喜您，获得50SZFM");
        }
      }, 3500);
    }
  },
  mounted() {},
  created() {},
  watch: {}
};
</script>

<style scoped lang="less">
</style>
