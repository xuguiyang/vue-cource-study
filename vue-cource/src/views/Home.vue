<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div>{{food}}</div>
    <button @click="handclick('go')">下一页</button>
    <button @click="handclick('push')">上一页</button>
    <button @click="handclick('replace')">替换</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    handclick(type) {
      if (type === "go") this.$router.go(-1);
      else if (type === "push") this.$router.push("/parent");
      else if (type == "replace") this.$router.replace("/about");
    }
  },
  props: {
    food: {
      type: String,
      default: "apple"
    }
  }
};
</script>
