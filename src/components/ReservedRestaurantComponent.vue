<template>
  <div class="reserved-elements">
    <h2>Current Reservation</h2>
    <p class="reservation-name">Restaurant Name : {{ name }}</p>
    <p class="reservation-date">Date : {{ date }}</p>
    <p class="reservation-seats">Seats : {{ seats }}</p>
    <DelButtonComponent name="Delete" @button-clicked="DeleteReserved" />
  </div>
</template>

<script>
import DelButtonComponent from "@/components/DelButtonComponent.vue";

export default {
  name: "ReservedRestaurantComponent",
  props: {
    name: String,
    date: String,
    seats: String,
    id: String,
  },
  components: {
    DelButtonComponent,
  },
  methods: {
    DeleteReserved() {
      this.$emit("delete-reserved", this.id);
    },
  },
};
</script>

<style scoped lang="scss">
.reserved-elements {
  max-width: 500px;
  margin: auto;
  text-align: initial;
  margin-top: 2%;

  .button-element .button {
    margin-top: 20px;
    background: red !important;
    color: white;
  }

  .confirm-element {
    margin-top: 20px;
  }
}
</style>
