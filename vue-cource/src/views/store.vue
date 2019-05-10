<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <AInput></AInput>
    <!-- <a-input v-model="inputValue"></a-input> -->
    <!-- {{inputValue}} -->
    AShow:
    <a-show :content="inputValue"></a-show>
    <p>appName：{{appName}}</p>
    <p>userName： {{userName}}</p>
  </div>
</template>

<script>
import AInput from "../components/AInput";
import AShow from "../components/AShow";
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
    AShow
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
    }
  }
};
</script>

<style scoped>
</style>

