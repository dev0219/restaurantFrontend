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
    <div class="view-more-action">
      <ButtonComponent name="View More Restaurants" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserRestaurantDetailComponent from "@/components/UserRestaurantDetailComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "UserRestaurantsListComponent",
  components: {
    UserRestaurantDetailComponent,
    ButtonComponent,
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
.restaurant-list-elements {
  margin-top: 2% !important;
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: auto;
}
.res-details {
  border: 1px solid;
  border-radius: 4px;
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
</style>
