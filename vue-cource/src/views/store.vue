<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <!-- <a-input v-model="inputValue"></a-input> -->
    <!-- {{inputValue}} -->
    AShow:
    <a-show :content="inputValue"></a-show>
    <p>appName：{{appName}}</p>
    <p>userName： {{userName}}</p>
    <!-- <div class="dialog">
      <VDialog class="dialog-content"></VDialog>
    </div> -->
    <!-- <v-dialog>弹出框</v-dialog> -->
    <div class="DetailsTags" @click="showCustomPopupClick">
        <button class="Detailscenter">优惠券</button>
    </div >
    <Maskp ref="CustomPopupRef">
        <div slot="content" class="contentView">
            <div class="ServiceNoteTitle">优惠券详情</div>
            <button @click="closerButton" class="closeButton">X</button>
        </div>
    </Maskp>
  </div>
</template>

<script>
import AInput from "../components/AInput";
import AShow from "../components/AShow";
// import VDialog from "../components/VDialog";
import Maskp from "../components/Maskp";
import { mapState } from "vuex";
export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    AInput,
    AShow,
    // VDialog,
    Maskp
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      userName: state => state.userName
    })
    // //获取根状态下的state.js定义的
    // appName(){
    //   return this.$store.state.appName
    // },
    // //获取模块状态下的user.js定义的
    // userName(){
    //   return this.$store.state.user.userName
    // }
  },
  methods: {
    handleInput(val) {
      // console.log(val);
      // console.log(event);
      this.inputValue = val;
    },
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
body{
  position: relative;
}
.dialog{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* .coupon{
  width: 100px;
  height: 200px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
} */
</style>

