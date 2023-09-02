<template>
  <div class="reserved-elements">
    <h2>Current Reservation</h2>
    <p class="reservation-name">Restaurant Name :{{ name }}</p>
    <p class="reservation-date">Date :{{ date }}</p>
    <p class="reservation-seats">Seats :{{ seats }}</p>
    <DelButtonComponent name="Delete" @button-clicked="DeleteReserved" />
  </div>
</template>

<script>
// @ is an alias to /src
import DelButtonComponent from "@/components/DelButtonComponent.vue";

export default {
  name: "ReservedRestaurantComponent",
  props: {
    name: String,
    date: String,
    seats: String,
  },
  components: {
    DelButtonComponent,
  },
  methods: {
    DeleteReserved() {
      console.log("--- delete option");
      // window.location.href = '/login';
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
}
.reserved-elements .button-element .button {
  margin-top: 20px;
  background: red !important;
  color: white;
}

.auth-elements .confirm-element {
  margin-top: 20px;
}
</style>
