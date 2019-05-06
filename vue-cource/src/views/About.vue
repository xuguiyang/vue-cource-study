<template>
  <div class="about">
    <h1>This is an about page </h1>
   <div> {{food}}</div>
   只能输入纯数字的输入框:<input type="text" name=""
   oninput = "value=value.replace(/[^\d]/g,'')"
   value="">
  </div>
</template>
<script>
export default {
  props:{
    food:{
      type:String,
      default:'apple',
    }
  },
  methods: {
   
  }
}
</script>
