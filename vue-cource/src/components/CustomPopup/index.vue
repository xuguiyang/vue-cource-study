
<template>
    <div>
        <!-- 弹出层 -->
        <div :class="{'mask':showCustomPopup}"></div>
        <div :class="{'CustomPopup':showCustomPopup}" @click="maskClick"></div>
        <div class="CustomPopupContent " :class="{'CustomPopupContentShow':showCustomPopup}">
          <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              showCustomPopup: false,
            };
        },
        methods: {
            showCustom() {
              this.showCustomPopup = true;
            },
            maskClick() {
              this.showCustomPopup = false;
            }
        }
    }
</script>

<style scoped>
    .CustomPopup {
        height: 100%;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: blue;
    }

    .CustomPopupContent {
        transition: all 1s ease;
        transform: scale(0) rotate(360deg);
        /* transform: translateY(100%); */
        z-index: 3000;
    }
    .CustomPopupContentShow {
        transform: scale(1) rotate(0deg);
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background:  url(b.jpg) center center;
        filter:alpha(opacity=50);
        -moz-opacity:0.5;
        -khtml-opacity: 0.5;
        opacity: 0.5;
    }
</style>
