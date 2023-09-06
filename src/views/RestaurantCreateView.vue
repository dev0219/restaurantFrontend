<template>
  <div class="restaurant-profile-elements">
    <RestaurantHeaderComponent />
    <TitleComponent title="New Restaurant" />
    <InputTitleComponent name="Restaurant Name" />
    <InputComponent v-on:data="getRestaurantName" />
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
      <ButtonComponent name="SAVE" @button-clicked="handleCreateRestaurant" />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
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
import { createRestaurnt } from "@/api/restaurant";
import { useRestaurantStore } from "@/store/restaurant";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

export default {
  name: "RestaurantCreateView",
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
      imageValue: null,
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
    async handleCreateRestaurant() {
      if (this.userInfo.userId == "") {
        this.userInfo.setUserId(localStorage.getItem("userId"));
      }
      let newRestaurantObj = {
        name: this.restaurantName,
        restaurantImg: this.imageValue,
        categories: this.categories,
        seats: this.seats,
        days: this.activeDays,
        userId: this.userInfo.userId,
      };
      try {
        const is_created = await createRestaurnt(newRestaurantObj);
        if (is_created.success && is_created.data.result.status == 2) {
          this.useRestaurantInfo.setStoreConfirm(true);
          this.useRestaurantInfo.setCreateConfirm(true);
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
  },
};
</script>

<style scoped lang="scss">
.restaurant-profile-elements {
  padding-bottom: 50px;

  .restaurant-profile-actions {
    max-width: 400px;
    margin: auto;
    margin-top: 11%;
    display: flex;
    justify-content: center;
    gap: 60px;
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
    .title-element {
      margin-top: 2%;
    }
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

    &:hover {
      background: white;
      color: black;
    }
  }

  .days-item button.active {
    background-color: #57a957;
    color: black;
    font-weight: bold;
    border: 2px solid black;
  }

  .auth-elements .confirm-element {
    margin-top: 20px;
  }

  // .profile-btn {
  //   margin-top: 30px;
  // }
}
@media (min-width: 576px) {
  .restaurant-profile-actions {
    margin-top: 5% !important;
  }
}
</style>
