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
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(vehicle, index) in $store.getters.shoppingCartList"
          v-bind:key="vehicle._id"
          v-bind:id="vehicle._id"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ vehicle.make }}</td>
          <td>{{ vehicle.model }}</td>
          <td>{{ vehicle.year_model }}</td>
          <td>{{ vehicle.price }}</td>
          <td>
            <button
              class="btn btn-outline-danger"
              v-on:click.prevent="
                $store.dispatch('removeFromShoppingCart', vehicle)
              "
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <hr class="my-4" />
    <p class="fs-5">Total price: <span class="fw-bold">{{ $store.getters.shoppingCartTotalPrice }}</span></p>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
};
</script>
