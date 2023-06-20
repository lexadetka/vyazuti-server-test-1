<template>
<div>
  <button class="btn btn-danger" @click.prevent="getUsers">
Get Users
  </button>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Get",
  mounted() {
    // this.get()
    this.login()
  },
  methods:{
    get(){
      axios.get('http://api.site.local/api/testAPI').then(res => {
        console.log( res)
      })
      // axios.post('http://localhost:8080/api/testAPI').then(res => {
      //   console.log( res)
      // })
      // axios.post('http://localhost:8080/api/testAPIpatch', {_method: 'PATCH', data: 'test data for patch'}).then(res => {
      //   console.log( res)
      // })
    },
    login(){
      axios.get('http://api.site.local/sanctum/csrf-cookie').then(r=>{
        axios.post('http://api.site.local/login', {email: 'user@mail.ru', password: '123'})
            .then(res => {
              console.log(res)
            })
      })
    },
    getUsers(){
      axios.get('http://api.site.local/api/user').then(re=>{
        console.log(re)
      })
    }
  }
}
</script>

<style scoped>

</style>