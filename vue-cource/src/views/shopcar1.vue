<template>
  <div>
    <div id="box" ref="box">
      <!-- <div v-drag :style="{width:'100px', height:'100px', background:'blue', position:'absolute', right:0, top:0}"></div> -->
      <div v-drag :style="{width:'100px', height:'100px', background:'red', position:'absolute', left:0, top:0}"></div>
      <input focus>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>

  export default {
    props: {
    },
    components: {
    },
    data() {
      return {
      }
    },
    computed: {


    },
    methods: {
    },
    mounted() {

    },
    created() {

    },
    watch: {
    },
    directives: {
      drag: {
        function () {
          var oDiv=this.el;
            // console.log(this.$refs.drag)
            console.log('this.el',this.el)
            oDiv.onmousedown=function(ev){
                var disX=ev.clientX-oDiv.offsetLeft;
                var disY=ev.clientY-oDiv.offsetTop;

                document.onmousemove=function(ev){
                    var l=ev.clientX-disX;
                    var t=ev.clientY-disY;
                    oDiv.style.left=l+'px';
                    oDiv.style.top=t+'px';
                };
                document.onmouseup=function(){
                    document.onmousemove=null;
                    document.onmouseup=null;
                };
            };
        }

      }
    }

  }

</script>

<style scoped lang="less">

</style>
