<template>
 <div>
   <a-input v-model="inputValue"> </a-input>
   {{inputValue}}
 </div>
</template>

<script>
import AInput from '../components/AInput'
 export default {
   name:'store',
   data () {
     return {
       inputValue:''
     }
   },
   components: {
     AInput
   }
 }
</script>

<style scoped>


</style>

