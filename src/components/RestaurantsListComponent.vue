<template>
  <div class="list-container">
    <CategorySelectComponent
      :buttons="categoryOptions"
      :value="selectedButton"
      v-on:SelCategory="handleChangeCategories"
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
  </div>
</template>

<script>
import RestaurantDetailComponent from "@/components/RestaurantDetailComponent.vue";
import CategorySelectComponent from "@/components/CategorySelectComponent.vue";
import { getAllRestaurnts } from "@/api/restaurant";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

export default {
  name: "RestaurantsListComponent",
  components: {
    RestaurantDetailComponent,
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
      allRestaurants: [],
      selectedButton: [],
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
        this.allRestaurants = allRestaurantLst.data.results.results;
      }
    },
    handleChangeCategories(val) {
      this.selectedButton = val;
      if (this.selectedButton.length) {
        this.restaurants = [];
        for (var i = 0; i < this.allRestaurants.length; i++) {
          let selected_restaurant = this.selectedButton.filter((item) =>
            this.allRestaurants[i]["categories"].includes(item)
          );
          if (selected_restaurant.length) {
            this.restaurants.push(this.allRestaurants[i]);
          }
        }
      } else {
        this.restaurants = this.allRestaurants;
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
  margin-top: 8% !important;
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

@media (min-width: 768px) {
  .restaurant-list-elements {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .restaurant-list-elements {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
