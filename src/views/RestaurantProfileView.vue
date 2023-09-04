<template>
  <div class="restaurant-profile-elements" :key="forceKey">
    <DeleteConfirmComponent
      v-if="is_deleting"
      :content="deletecontent"
      v-on:delete-action="handleDeleteConfirm"
    />
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
import DeleteConfirmComponent from "@/components/DeleteConfirmComponent.vue";
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
    DeleteConfirmComponent,
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
      delete_restaurant_id: "",
      seat: 1,
      is_deleting: false,
      categoryOptions: [
        { label: "Italian Food", value: "Italian Food" },
        { label: "French Food", value: "French Food" },
        { label: "Asian Food", value: "Asian Food" },
        { label: "Eastern Food", value: "Eastern Food" },
      ],
      deletecontent: "Are you deleting this retaurant?",
      selectedButtonValues: [],
      restaurants: [],
    };
  },
  methods: {
    getRestaurantName(event) {
      this.restaurantName = event;
    },
    handleCreateRestaurant() {
      this.router.push({ name: "RestaurantCreateView" });
    },
    DeleteRestaurant(restaurantId) {
      this.is_deleting = true;
      this.delete_restaurant_id = restaurantId;
    },
    async handleDeleteConfirm(val) {
      if (val) {
        if (this.delete_restaurant_id != "") {
          let deleteObj = { _id: this.delete_restaurant_id };
          let deleted_restaurant = await deleteRestaurnt(deleteObj);
          if (deleted_restaurant.data.result.status == 4) {
            this.is_deleting = false;
            window.location.reload();
          }
        } else {
          let deletedUser = { id: this.userInfo.userId };
          const deleted_profile = await deletetProfile(deletedUser);
          if (deleted_profile.data.result.status == 4) {
            this.userInfo.setUserId("");
            this.userInfo.setDeletedProfile(true);
            localStorage.removeItem("userId");
            this.router.push({ name: "home" });
          }
        }
      } else {
        this.delete_restaurant_id = "";
        this.is_deleting = false;
      }
    },
    handleDeleteProfile() {
      this.is_deleting = true;
      this.delete_restaurant_id = "";
      this.deletecontent = "Are you deleting the profile?";
    },
    getCategoryName(event) {
      this.categoryName = event;
    },
    async getUserRestaurantsLst() {
      if (this.userInfo.userId == "") {
        this.userInfo.setUserId(localStorage.getItem("userId"));
      }
      let userobj = { userId: this.userInfo.userId };
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
