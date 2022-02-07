<template>
  <div class="mx-auto w-75">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      <div class="container-fluid">
        <div class="d-flex">
          <a class="navbar-brand mx-5 fs-4">Frank's Garage Store</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                class="nav-link fs-5"
                v-bind:class="{
                  active: $store.getters.activeComponent === 'Warehouses',
                }"
                href="#"
                v-on:click.prevent="
                  $store.dispatch('setActiveComponent', 'Warehouses')
                "
                >Warehouse List</a
              >
              <a
                class="nav-link fs-5"
                v-bind:class="{
                  active: $store.getters.activeComponent === 'ShoppingCart',
                }"
                href="#"
                v-on:click.prevent="
                  $store.dispatch('setActiveComponent', 'ShoppingCart')
                "
                >Shopping Cart</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id="app" class="container">
      <keep-alive>
        <component v-bind:is="$store.getters.activeComponent" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Warehouses from "./components/warehouses.vue";
import ShoppingCart from "./components/shopping-cart.vue";

export default {
  name: "App",
  components: {
    Warehouses,
    ShoppingCart,
  },
};
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
