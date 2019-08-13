<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div>{{food}}</div>
    <button @click="handclick('go')">下一页</button>
    <button @click="handclick('push')">上一页</button>
    <button @click="handclick('replace')">替换</button>
    <button>弹框</button>
    <car></car>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import car from "../components/car.vue"

export default {
  name: "home",
  components: {
    HelloWorld,
    car
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
  },
  //渲染该组件对应路由被确认前调用
  beforeRouteEnter(to, from, next) {
    // console.log(to.name);  //====》home
    //next() 相当于出发路由
    //因为当钩子执行前，组件实例还没被创建
    // vm 就是当前组件的实例相当于 this，所以在 next 方法里你就可以把 vm 当 this 来用了
    next(vm => {
      // console.log(vm);
    });
  },



  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例 `this`
  // 常用于用户在页面编辑但是没有保存就要离开是 可以提醒用户保存在离开
  // beforeRouteLeave(to, from, next) {
    // console.log(this);

    // const leave = confirm("您确定要离开吗");
    //如果离开 跳转  如果不离开不采取操作
    // if (leave) next();
    // else next(false);
  // }
  // //路由发生变化组件别复用时调用
  // berforeRouteupdated(to, from, next) {
  //   console.log(to.name,from.name);

  // }
};
</script>
