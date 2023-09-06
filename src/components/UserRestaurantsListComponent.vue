<template>
  <div class="list-container">
    <div class="restaurant-list-elements">
      <div class="res-details" v-for="res of restaurants" :key="res.id">
        <UserRestaurantDetailComponent
          :name="res.name"
          :categoryName="res.categories"
          :src="res.restaurantImg"
          :id="res._id"
          :userId="res.userId"
          :days="res.days"
          :seats="res.seats"
          v-on:delete-restaurant="DeleteRestaurant"
        />
      </div>
    </div>
    <ScrollUpComponent />
  </div>
</template>

<script>
import UserRestaurantDetailComponent from "@/components/UserRestaurantDetailComponent.vue";
import ScrollUpComponent from "@/components/ScrollUpComponent.vue";

export default {
  name: "UserRestaurantsListComponent",
  components: {
    UserRestaurantDetailComponent,
    ScrollUpComponent,
  },
  props: {
    restaruntArr: Array,
  },
  data: function () {
    return {
      restaurants: this.restaruntArr || [],
    };
  },
  methods: {
    DeleteRestaurant(val) {
      this.$emit("delete-userRestaurant", val);
    },
  },
};
</script>

<style scoped lang="scss">
.list-container {
  margin-top: 8%;
  padding-bottom: 40px;
  .restaurant-list-elements {
    margin-top: 2% !important;
    max-width: 1200px;
    width: 90%;
    display: grid;
    gap: 40px;
    margin: auto;
  }
  .res-details {
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .restaurant-list-elements .button {
    margin: auto;
  }
  .restaurant-list-elements .title-element {
    margin-top: 2%;
  }
  .view-more-action {
    margin: 3%;
  }
}
// @media (min-width: 576px) {
//   .restaurant-list-elements {
//     grid-template-columns: repeat(2, 1fr);
//   }
// }

@media (min-width: 1200px) {
  .restaurant-list-elements {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
