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
    },
  }
};
</script>
