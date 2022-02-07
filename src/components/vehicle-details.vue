<template>
  <div
    class="modal fade"
    id="vehicleDetailsModal"
    tabindex="-1"
    aria-labelledby="vehicleDetailsModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="vehicleDetailsModalLabel">
            {{ vehicle.make }} {{ vehicle.model }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Year model: {{ vehicle.year_model }}
          <br />
          Price: {{ vehicle.price }}
          <br />
          Warehouse: {{ warehouse.name }}
          <br />
          Location: {{ warehouse.location.name }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-info"
            v-if="!isInShoppingCart(vehicle)"
            v-on:click.prevent="$store.dispatch('addToShoppingCart', vehicle)"
          >
            Add to shopping card
          </button>
          <button
            type="button"
            class="btn btn-danger"
            v-else
            v-on:click.prevent="
              $store.dispatch('removeFromShoppingCart', vehicle)
            "
          >
            Delete from shopping card
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VehicleDetails",
  props: {
    vehicle: {
      type: Object,
      required: true,
    },
    warehouse: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isInShoppingCart(vehicle) {
      return this.$store.getters.shoppingCartList.includes(vehicle);
    },
  },
};
</script>
