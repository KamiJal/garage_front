<template>
  <div id="app" class="container">
    <h6 class="text-muted text-uppercase">welcome to</h6>
    <h1>Frank's Garage Store</h1>
    <hr class="mb-5">
    <GarageMain/>
  </div>
</template>

<script>
import GarageMain from './components/garage-main.vue'

export default {
  name: 'App',
  components: {
    GarageMain
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
