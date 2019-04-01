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
  //路由发生变化组件别复用时调用
  beforeRouteUpdate(to, from, next) {
    // console.log(this);

    console.log(to.name, from.name);
    // next();
  }
};
</script>
