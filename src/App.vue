<template>
  <div id="app" class="container">
    <h6 class="text-muted text-uppercase">welcome to</h6>
    <h1>Frank's Garage Store</h1>
    <hr class="mb-5">
    <Warehouses/>
  </div>
</template>

<script>
import Warehouses from './components/warehouses.vue'

export default {
  name: 'App',
  components: {
    Warehouses
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
