<template>
  <div class="restaurant-details-elements">
    <h2>{{ name }}</h2>
    <img :src="src" />
    <p class="reservation-date">{{ categoryName }}</p>
    <ButtonComponent name="Book Reservation" @button-clicked="BookReserved" />
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "RestaurantDetailsComponent",
  props: {
    name: String,
    categoryName: String,
    src: String,
    id: String,
  },
  components: {
    ButtonComponent,
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
