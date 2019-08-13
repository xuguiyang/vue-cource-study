
<template>
  <div>
    <div class="DetailsTags" @click="showCustomPopupClick">
      <button class="Detailscenter">优惠券</button>
    </div>
    <CustomPopup ref="CustomPopupRef">
      <div slot="content" class="contentView">
        <div class="ServiceNoteTitle">优惠券详情</div>
        <button @click="closerButton" class="closeButton">X</button>
      </div>
    </CustomPopup>
    <!-- <coupon>aa</coupon> -->
  </div>
</template>
<script>
import CustomPopup from "../components/CustomPopup/index.vue";
export default {
  components: {
    CustomPopup
  },
  data() {
    return {};
  },
  methods: {
    showCustomPopupClick() {
      this.$refs.CustomPopupRef.showCustom();
    },
    closerButton() {
      this.$refs.CustomPopupRef.maskClick();
    }
  }
};
</script>
<style scoped>
body {
  position: relative;
}
.contentView {
  height: 300px;
  width: 260px;
  background: rgb(233, 65, 53);
  border-radius: 6px;
  margin-bottom: 20px;
  margin-top: 260px;
  position: absolute;
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
