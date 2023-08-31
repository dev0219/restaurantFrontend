<template>
  <div class="restaurant-details-elements">
    <h2>{{ name }}</h2>
    <img :src="src" />
    <p class="reservation-date">{{ categoryName }}</p>
    <Button name="Book Reservation" @button-clicked="BookReserved" />
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue";

export default {
  name: "RestaurantDetails",
  props: {
    name: String,
    categoryName: String,
    src: String,
    id: String,
  },
  components: {
    Button,
  },
  methods: {
    BookReserved() {
      window.location.href = "/bookreservation";
    },
  },
};
</script>

<style scoped lang="scss">
.restaurant-details-elements {
  max-width: 300px;
  margin: auto;
  text-align: initial;
  margin-top: 2%;
}
</style>
