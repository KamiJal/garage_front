<template>
  <div class="container">
    <div class="row my-3">
      <div class="col">
        <div class="dropdown">
          <button
            class="btn btn-info btn-lg dropdown-toggle"
            type="button"
            id="warehouseDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ $store.getters.warehouseActiveName }}
          </button>
          <ul
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="warehouseDropdown"
          >
            <li
              v-for="warehouse in $store.getters.warehouseList"
              v-bind:key="warehouse._id"
              v-bind:id="warehouse._id"
            >
              <a
                class="dropdown-item"
                href="#"
                v-on:click="
                  $store.dispatch('warehouseSetActiveWarehouse', warehouse)
                "
                >{{ warehouse.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="mt-3" />
    <div class="row" v-if="$store.getters.warehouseActive">
      <VehicleList
        v-bind:vehicles="$store.getters.warehouseActive.cars.vehicles"
      />
    </div>
  </div>
</template>

<script>
import VehicleList from "./vehicle-list.vue";

export default {
  name: "Warehouses",
  components: {
    VehicleList,
  },
  async created() {
    await this.$store.dispatch("apiGetAllWarehouses");
  },
};
</script>
