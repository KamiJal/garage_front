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
            {{ $store.getters.warehousesActiveName }}
          </button>
          <ul
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="warehouseDropdown"
          >
            <li
              v-for="warehouse in $store.getters.warehousesList"
              v-bind:key="warehouse._id"
              v-bind:id="warehouse._id"
            >
              <a
                class="dropdown-item"
                href="#"
                v-on:click="
                  $store.dispatch('warehousesSetActiveWarehouse', warehouse)
                "
                >{{ warehouse.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="mt-3" />
    <div class="row" v-if="$store.getters.warehousesActive">
      <VehicleList
        v-bind:vehicles="$store.getters.warehousesActive.cars.vehicles"
        v-bind:warehouse="activeWarehouseInfo"
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
  computed: {
    activeWarehouseInfo(){
      const warehouse = this.$store.getters.warehousesActive;
      return {
        id: warehouse._id,
        name: warehouse.name,
        location: {
          name: warehouse.cars.location,
          lat: warehouse.location.lat,
          long: warehouse.location.long
        }
      }
    }
  }
};
</script>
