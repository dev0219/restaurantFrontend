<template>
  <div class="restaurant-profile-elements" :key="forceKey">
    <RestaurantHeaderComponent />
    <TitleComponent title="Restaurant Profile" />
    <div class="profile-delete">
      <ButtonComponent
        name="Create Restaurant"
        @button-clicked="handleCreateRestaurant"
      />
      <DelButtonComponent
        name="Profile Delete"
        @button-clicked="handleDeleteProfile"
      />
    </div>
    <UserRestaurantsListComponent
      v-if="restaurants.length"
      :restaruntArr="restaurants"
      v-on:delete-userRestaurant="DeleteRestaurant"
    />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TitleComponent from "@/components/TitleComponent.vue";
import RestaurantHeaderComponent from "@/components/RestaurantHeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import UserRestaurantsListComponent from "@/components/UserRestaurantsListComponent.vue";
import DelButtonComponent from "@/components/DelButtonComponent.vue";
import { getUserRestaurnts, deleteRestaurnt } from "@/api/restaurant";
import { deletetProfile } from "@/api/auth";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

export default {
  name: "RestaurantProfileView",
  components: {
    TitleComponent,
    RestaurantHeaderComponent,
    FooterComponent,
    UserRestaurantsListComponent,
    ButtonComponent,
    DelButtonComponent,
  },
  setup() {
    const userInfo = useUserStore();
    const router = useRouter();
    return { userInfo, router };
  },
  data: function () {
    return {
      days: ["M", "T", "W", "TH", "F", "S", "SN"],
      restaurantName: "",
      forceKey: 0,
      categoryName: "",
      seat: 1,
      categoryOptions: [
        { label: "Italian Food", value: "Italian Food" },
        { label: "French Food", value: "French Food" },
        { label: "Asian Food", value: "Asian Food" },
        { label: "Eastern Food", value: "Eastern Food" },
      ],
      selectedButtonValues: [],
      restaurants: [],
      userID: this.userInfo.userId,
    };
  },
  methods: {
    getRestaurantName(event) {
      this.restaurantName = event;
    },
    handleCreateRestaurant() {
      this.router.push({ name: "RestaurantCreateView" });
    },
    async DeleteRestaurant(restaurantId) {
      if (confirm("Are you deleting the restaurant?")) {
        console.log("------id ", restaurantId);
        let deleteObj = { _id: restaurantId };
        let deleted_restaurant = await deleteRestaurnt(deleteObj);
        if (deleted_restaurant.data.result.status == 4) {
          alert("Deleted the restaurant successfully!");
          this.getUserRestaurantsLst();
          this.forceKey++;
        }
      }
    },
    async handleDeleteProfile() {
      if (confirm("Are you deleting the profile?")) {
        let deletedUser = { id: this.userID };
        const deleted_profile = await deletetProfile(deletedUser);
        if (deleted_profile.data.result.status == 4) {
          alert("Deleted the profile successfully!");
        }
        this.userInfo.setUserId("");
        this.userInfo.setDeletedProfile(true);
        this.router.push({ name: "home" });
      }
    },
    getCategoryName(event) {
      this.categoryName = event;
    },
    async getUserRestaurantsLst() {
      let userobj = { userId: this.userID };
      const restaurantLst = await getUserRestaurnts(userobj);
      this.restaurants = restaurantLst.data.results.results;
    },
  },
  created() {
    this.getUserRestaurantsLst();
  },
};
</script>

<style scoped lang="scss">
.restaurant-profile-actions {
  max-width: 400px;
  margin: auto;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
}
.profile-delete {
  display: flex;
  margin: auto;
  justify-content: space-around;
}
.days-open-element {
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.member-profile-elements {
  margin-top: 0%;
}
.member-profile-elements .title-element {
  margin-top: 2%;
}
.days-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid;
  background: pink;
  border-radius: 4px;
}

.days-item::hover {
  background: white;
  color: black;
}

.auth-elements .confirm-element {
  margin-top: 20px;
}
</style>
