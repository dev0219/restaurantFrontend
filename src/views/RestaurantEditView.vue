<template>
  <div class="restaurant-profile-elements">
    <RestaurantHeaderComponent />
    <TitleComponent title="Edit Restaurant" />
    <InputTitleComponent name="Restaurant Name" />
    <InputComponent :value="restaurantName" v-on:data="getRestaurantName" />
    <InputTitleComponent name="Please Upload the featured Restaurant Image" />
    <ImageUploaderComponent
      :src="imageValue"
      v-on:getImage="handleImageUpload"
    />
    <InputTitleComponent name="Category" />
    <CategoryCheckBoxComponent
      :value="categories"
      :buttons="categoryOptions"
      v-on:CheckedCategory="getCategories"
    />
    <InputTitleComponent name="Seats Available" />
    <SelectNumberComponent
      :value="seats"
      :step="2"
      :maxnumber="20"
      v-on:SelectedNum="getSeats"
    />
    <InputTitleComponent name="Days Open" />
    <DaysSelectComponent
      :value="activeDays"
      :buttons="days"
      v-on:getDays="getAvailableDays"
    />
    <div class="restaurant-profile-actions">
      <ButtonComponent name="Save" @button-clicked="handleUpdateRestaurant" />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TitleComponent from "@/components/TitleComponent.vue";
import InputTitleComponent from "@/components/InputTitleComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import RestaurantHeaderComponent from "@/components/RestaurantHeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import CategoryCheckBoxComponent from "@/components/CategoryCheckBoxComponent.vue";
import SelectNumberComponent from "@/components/SelectNumberComponent.vue";
import DaysSelectComponent from "@/components/DaysSelectComponent.vue";
import ImageUploaderComponent from "@/components/ImageUploaderComponent.vue";
import { EditRestaurnt } from "@/api/restaurant";
import { useUserStore } from "@/store/user";
import { useRestaurantStore } from "@/store/restaurant";
import { useRouter } from "vue-router";

export default {
  name: "RestaurantEditView",
  components: {
    TitleComponent,
    RestaurantHeaderComponent,
    FooterComponent,
    InputComponent,
    InputTitleComponent,
    ButtonComponent,
    CategoryCheckBoxComponent,
    SelectNumberComponent,
    DaysSelectComponent,
    ImageUploaderComponent,
  },
  setup() {
    const userInfo = useUserStore();
    const useRestaurantInfo = useRestaurantStore();
    const router = useRouter();
    return { userInfo, router, useRestaurantInfo };
  },
  data: function () {
    return {
      days: [
        { label: "M", value: "monday" },
        { label: "T", value: "tuesday" },
        { label: "W", value: "wendnesday" },
        { label: "TH", value: "thursday" },
        { label: "F", value: "friday" },
        { label: "S", value: "saturday" },
        { label: "SN", value: "sunday" },
      ],
      status: 1,
      restaurantName: "",
      categories: [],
      imageValue: "",
      activeDays: [],
      seats: 2,
      categoryOptions: [
        { label: "Italian Food", value: "Italian Food" },
        { label: "French Food", value: "French Food" },
        { label: "Asian Food", value: "Asian Food" },
        { label: "Eastern Food", value: "Eastern Food" },
      ],
    };
  },
  methods: {
    handleImageUpload(imageData) {
      this.imageValue = imageData;
    },
    getRestaurantName(event) {
      this.restaurantName = event;
    },
    async handleUpdateRestaurant() {
      if (this.userInfo.userId == "") {
        this.userInfo.setUserId(localStorage.getItem("userId"));
      }
      let updateRestaurantObj = {
        name: this.restaurantName,
        restaurantImg: this.imageValue,
        categories: this.categories,
        seats: this.seats,
        days: this.activeDays,
        userId: this.userInfo.userId,
        _id: this.useRestaurantInfo.restaurant._id,
      };
      try {
        const is_updated = await EditRestaurnt(updateRestaurantObj);
        if (is_updated.success && is_updated.data.result.status == 3) {
          this.useRestaurantInfo.setStoreConfirm(true);
          this.useRestaurantInfo.setCreateConfirm(false);
          setTimeout(() => {
            this.router.push({ name: "RestaurantProfileView" });
          }, 2000);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    getAvailableDays(values) {
      this.activeDays = values;
    },
    getSeats(values) {
      this.seats = values;
    },
    getCategories(value) {
      this.categories = value;
    },
    getRestaurantInfo() {
      if (
        this.useRestaurantInfo.restaurant.name == "" ||
        this.useRestaurantInfo.restaurant.restaurantImg == ""
      ) {
        let getRetaurantInfo = JSON.parse(
          localStorage.getItem("restaurantInfo")
        );
        this.useRestaurantInfo.setRestauratInfo(getRetaurantInfo);
      }
      this.restaurantName = this.useRestaurantInfo.restaurant.name;
      this.imageValue = this.useRestaurantInfo.restaurant.restaurantImg;
      this.categories = this.useRestaurantInfo.restaurant.categories;
      this.seats = this.useRestaurantInfo.restaurant.seats;
      this.activeDays = this.useRestaurantInfo.restaurant.days;
    },
  },
  created() {
    this.getRestaurantInfo();
  },
};
</script>

<style scoped lang="scss">
.restaurant-profile-actions {
  max-width: 400px;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
}
.profile-delete {
  margin-top: 30px;
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
