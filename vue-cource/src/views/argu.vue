<template>
  <div>
    <!-- {{$route.params.name}} -->
    {{name}}
  </div>
</template>
<script>
export default {
  //
  props: {
    name: {
      //可以是string 或number
      type: String,
      default: "daxia"
    }
  },
  //在当前路由改变，但是该组件被复用时调用
  // 可以访问组件实例 `this`
  beforeRouteUpdate(to, from, next) {
    // console.log('beforeRouteUpdate')
    // console.log(this);
    // console.log(to);

    console.log(to.name, from.name);
    // next();
  }
};
</script>
