<template>
  <div class="list-container">
    <CategorySelectComponent
      :buttons="categoryOptions"
      v-model="selectedButton"
    />
    <div class="restaurant-list-elements">
      <div class="res-details" v-for="res of restaurants" :key="res.id">
        <RestaurantDetailComponent
          :name="res.name"
          :categoryName="res.categories"
          :src="res.restaurantImg"
          :id="res._id"
          :userId="res.userId"
          :days="res.days"
          :seats="res.seats"
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
import RestaurantDetailComponent from "@/components/RestaurantDetailComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import CategorySelectComponent from "@/components/CategorySelectComponent.vue";
import { getAllRestaurnts } from "@/api/restaurant";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

export default {
  name: "RestaurantsListComponent",
  components: {
    RestaurantDetailComponent,
    ButtonComponent,
    CategorySelectComponent,
  },
  setup() {
    const userInfo = useUserStore();
    const router = useRouter();
    return { userInfo, router };
  },
  data: function () {
    return {
      restaurants: [],
      selectedButton: "",
      categoryOptions: [
        { label: "Italian Food", value: "Italian Food" },
        { label: "French Food", value: "French Food" },
        { label: "Asian Food", value: "Asian Food" },
        { label: "Eastern Food", value: "Eastern Food" },
      ],
    };
  },
  methods: {
    async getAllRestaurants() {
      const allRestaurantLst = await getAllRestaurnts();
      console.log("----restaurants in member");
      console.log(allRestaurantLst);
      if (allRestaurantLst.data.results.results.length) {
        this.restaurants = allRestaurantLst.data.results.results;
      }
    },
  },
  created() {
    this.getAllRestaurants();
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
