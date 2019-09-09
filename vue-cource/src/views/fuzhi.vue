<template>
    <div>
      <div id="foo">卡密: {{message}}</div>
      <button v-clipboard:copy="message" v-clipboard:success="copy">复制</button>
    </div>
</template>


<script>
// import Vue from "vue";
export default {
  props: {

  },
  components: {

  },
  data () {
    return {
      message: '1234567890111'
    }
  },
  computed: {

  },
  methods: {
    copy(){

        console.log('成功复制到粘贴板！')

    }
  },
  mounted () {

  },
  created () {

  },
  watch: {

  }
}
</script>

<style scoped lang="less">

</style>
