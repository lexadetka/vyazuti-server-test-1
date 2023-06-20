<script setup>
import 'bootstrap/dist/css/bootstrap.css'

</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap'
import axios from "axios";
export default {
  name: 'App',
  // mounted() {
  //   this.testAPI()
  // },
  // methods:{
  //   testAPI(){
  //     axios.get('http://localhost:8080/api/testAPI')
  //         .then(res=>{
  //           console.log(res,res.config.method)
  //
  //         })
  //     axios.post('http://localhost:8080/api/testAPI')
  //         .then(res=>{
  //           console.log(res,res.config.method)
  //
  //         })
  //     axios.post('http://localhost:8080/api/testAPIpatch', {_method: 'PATCH', data: 'string for patch'})
  //         .then(res=>{
  //           console.log(res,res.config.method)
  //         })
  //   }
  // }
}

</script>
<style scoped>

</style>
