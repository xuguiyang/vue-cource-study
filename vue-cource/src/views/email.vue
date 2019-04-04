<template>
  <div class="email">
    email:
    <button @click="handleClick">点我啊</button>
  </div>
</template>

<script>
// 引用Bus共这个组件使用
// import Bus from "../bus/index.js";
export default {
  data() {
    return {};
  },
  methods: {
       handleClick(){
      this.$bus.$emit('on-click','hello')
    }
  },
  mounted() {
    // console.log(Bus);//局部的Bus
    // console.log(this.$bus);//全局的Bus
  }
};
</script>

<style scoped>
.email{
  border: 1px solid red
}
</style>
