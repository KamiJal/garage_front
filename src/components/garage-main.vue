<template>
  <div class="container">
    <div class="row my-3 justify-content-start">
      <div class="col-12">
        <p class="fs-4">Please select the warehouse you like the most</p>
        <div class="dropdown">
          <button
            class="btn btn-info btn-lg dropdown-toggle"
            type="button"
            id="warehouseDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ getActiveWarehouseName }}
          </button>
          <ul
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="warehouseDropdown"
          >
            <li
              v-for="warehouse in getWarehouses"
              v-bind:key="warehouse._id"
              v-bind:id="warehouse._id"
            >
              <a
                class="dropdown-item"
                href="#"
                v-on:click="setActiveVehicleList(warehouse)"
                >{{ warehouse.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="mt-3" />
    <div class="row" v-if="renderList">
      <VehicleList v-bind:vehicles="getActiveVehicles" />
    </div>
  </div>
</template>

<script>
import WAREHOUSE_CONTROLLER from "../api/warehouse-controller.js";
import VehicleList from "./vehicle-list.vue";

export default {
  name: "GarageMain",
  components: {
    VehicleList,
  },
  data() {
    return {
      warehouseList: [],
      activeWarehouseName: "Choose warehouse",
      activeVehicleList: [],
    };
  },
  created() {
    this.warehouseList = WAREHOUSE_CONTROLLER.getAll();
    console.log(this.warehouseList);
  },
  computed: {
    getWarehouses() {
      return this.warehouseList;
    },
    getActiveWarehouseName() {
      return this.activeWarehouseName;
    },
    getActiveVehicles() {
      return this.activeVehicleList;
    },
    renderList() {
      return this.activeVehicleList.length > 0;
    },
  },
  methods: {
    setActiveVehicleList(warehouse) {
      console.log('setActiveVehicleList')
      console.log(warehouse);
      console.log('vehicles')
      console.log(warehouse.cars.vehicles);
      this.activeWarehouseName = warehouse.name;      
      this.activeVehicleList = warehouse.cars.vehicles.sort((a, b) => {
        return a.date_added > b.date_added
          ? 1
          : a.date_added < b.date_added
          ? -1
          : 0;
      });
      console.log('active_vehicles')
      console.log(this.activeVehicleList);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
