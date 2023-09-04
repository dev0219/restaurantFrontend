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
    <ConfirmMessageComponent
      v-if="iscalled"
      :content="confirmstatus"
      :status="status"
    />
    <div class="restaurant-profile-actions">
      <ButtonComponent name="Save" @button-clicked="handleCreateRestaurant" />
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
import ConfirmMessageComponent from "@/components/ConfirmMessageComponent.vue";
import { createRestaurnt } from "@/api/restaurant";
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
    ConfirmMessageComponent,
  },
  setup() {
    const userInfo = useUserStore();
    const router = useRouter();
    return { userInfo, router };
  },
  data: function () {
    return {
      iscalled: false,
      days: [
        { label: "M", value: "monday" },
        { label: "T", value: "tuesday" },
        { label: "W", value: "wendnesday" },
        { label: "TH", value: "thursday" },
        { label: "F", value: "friday" },
        { label: "S", value: "saturday" },
        { label: "SN", value: "sunday" },
      ],
      confirmstatus: "",
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
      console.log("-- new restaurant");
      console.log(newRestaurantObj);

      try {
        const is_created = await createRestaurnt(newRestaurantObj);
        console.log("-- is created");
        console.log(is_created);
        this.iscalled = false;
        if (is_created.success && is_created.data.result.status == 2) {
          this.iscalled = true;
          this.confirmstatus = "Created a new Restaurant successfully!";
          this.status = 1;
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
.restaurant-profile-actions {
  max-width: 400px;
  margin: auto;
  margin-top: 3%;
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
