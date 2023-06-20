<template>
<div class="navbar_custom d-flex justify-content-between">
  <div>
    <router-link class="btn btn-primary" to="/">Index</router-link>
    <router-link class="btn btn-primary" to="/news">News</router-link>
  </div>
  <router-link class="btn btn-primary" to="/admin">AdminIndexPage</router-link>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>