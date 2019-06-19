
<template>
  <div :class="{'showmask':showCustomPopup}">
    <!-- 弹出层 -->
    <div :class="{'mask':showCustomPopup}"></div>
    <div :class="{'CustomPopup':showCustomPopup}" @click="maskClick"></div>
    <div class="CustomPopupContent" :class="{'CustomPopupContentShow':showCustomPopup}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Maskp",
  data() {
    return {
      showCustomPopup: false
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
};
</script>

<style scoped>
.showmask {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.CustomPopup {
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.CustomPopupContent {
  transition: all 1s ease;
  transform: scale(0) rotate(360deg);
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
  background: url(./b.jpg) center center;
  opacity: 0.6;
}
.contentView {
  height: 300px;
  width: 260px;
  background: rgb(233, 65, 53);
  border-radius: 6px;
  margin-bottom: 20px;
  margin-top: 260px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.ServiceNoteTitle {
  text-align: center;
  font-size: 18px;
}
.closeButton {
  width: 40px;
  height: 40px;
  background-color: rgb(103, 109, 109);
  border-radius: 50%;
  position: fixed;
  top: -40px;
  right: -24px;
  opacity: 0.3;
}
</style>
