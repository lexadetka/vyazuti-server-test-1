<template>
<div class="w-25">
  <input type="email" class="form-control" placeholder="email" v-model="email">
  <input type="password" class="form-control" placeholder="password" v-model="password">
  <button @click.prevent="login" class="btn btn-primary">Login</button>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data(){
    return{
      email: null,
      password: null
    }
  },
  methods: {
    login(){
      axios.get('http://localhost:8000/sanctum/csrf-cookie')
          .then(r => {
            console.log(r)
            axios.post('http://localhost:8000/login', {email: this.email, password: this.password})
                .then(res => {
                  console.log(res)
                })
          })
    }
  },
  components: {}

}
</script>

<style scoped>

</style>