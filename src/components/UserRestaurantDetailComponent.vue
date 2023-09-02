<template>
  <div class="restaurant-details-elements">
    <h2>{{ name }}</h2>
    <img :src="src" />
    <p class="reservation-date">{{ categoryName }}</p>
    <div class="restaurant-actions">
      <ButtonComponent name="Edit" @button-clicked="Edit" />
      <DelButtonComponent name="Delete" @button-clicked="Delete" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonComponent from "@/components/ButtonComponent.vue";
import DelButtonComponent from "@/components/DelButtonComponent.vue";

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
    DelButtonComponent,
  },
  methods: {
    Edit() {
      // window.location.href = "/bookreservation";
    },
    Delete() {
      // window.location.href = "/bookreservation";
    },
  },
};
</script>

<style scoped lang="scss">
.restaurant-actions {
  display: flex;
  justify-content: center;
  margin: auto;
  gap: 5px;
}
.restaurant-details-elements {
  max-width: 300px;
  margin: auto;
  text-align: initial;
  margin-top: 2%;
}
</style>
