<template>
  <div>
    <table class="table table-striped table-dark table-hover table-responsive">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Make</th>
          <th scope="col">Model</th>
          <th scope="col">Year Model</th>
          <th scope="col">Price</th>
          <th scope="col">Licensed</th>
          <th scope="col">Date Added</th>
          <th scope="col">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(vehicle, index) in vehicles"
          v-bind:key="vehicle._id"
          v-bind:id="vehicle._id"
        >
          <th scope="row">{{ index }}</th>
          <td>{{ vehicle.make }}</td>
          <td>{{ vehicle.model }}</td>
          <td>{{ vehicle.year_model }}</td>
          <td>{{ vehicle.price }}</td>
          <td>{{ vehicle.licensed }}</td>
          <td>{{ vehicle.date_added }}</td>
          <td>
            <button
              class="btn btn-outline-info"
              v-if="vehicle.licensed"
              data-bs-toggle="modal"
              data-bs-target="#vehicleDetailsModal"
              v-on:click.prevent="setSelectedVehicle(vehicle._id)"
            >
              Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <VehicleDetails
      v-bind:vehicle="selectedVehicle"
      v-bind:warehouse="warehouse"
    />
  </div>
</template>

<script>
import VehicleDetails from "./vehicle-details.vue";

export default {
  name: "VehicleList",
  components: {
    VehicleDetails,
  },
  data() {
    return {
      vehicle: {},
    };
  },
  props: {
    vehicles: {
      type: Array,
      required: true,
    },
    warehouse: {
      type: Object,
      required: true,
    },
  },
  computed: {
    selectedVehicle() {
      return this.vehicle;
    },
  },
  methods: {
    setSelectedVehicle(id) {
      this.vehicle = this.vehicles.find(vehicle => vehicle._id === id);
    },
  },
};
</script>
