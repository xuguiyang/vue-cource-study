<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <!-- <a-input v-model="inputValue"></a-input> -->
    <!-- {{inputValue}} -->
    AShow:
    <a-show :content="inputValue"></a-show>
  </div>
</template>

<script>
import AInput from "../components/AInput";
import AShow from "../components/AShow";
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

