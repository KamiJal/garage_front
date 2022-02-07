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
            <button class="btn btn-outline-info" v-if="vehicle.licensed">
              Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "VehicleList",
  props: {
    vehicles: {
      type: Array,
    },
  },
};
</script>
