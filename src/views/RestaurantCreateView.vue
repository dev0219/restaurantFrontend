<template>
  <div class="restaurant-profile-elements">
    <RestaurantHeaderComponent />
    <TitleComponent title="New Restaurant" />
    <InputTitleComponent name="Restaurant Name" />
    <InputComponent v-on:data="getRestaurantName" />
    <InputTitleComponent name="Category" />
    <CategoryCheckBoxComponent
      :buttons="categoryOptions"
      v-model="selectedButtonValues"
    />
    <InputTitleComponent name="Seats Available" />
    <SelectNumberComponent v-model="seat" :step="2" :maxnumber="100" />
    <InputTitleComponent name="Days Open" />
    <div class="days-open-element">
      <div class="days-item" v-for="day of days" :key="day">{{ day }}</div>
    </div>
    <div class="restaurant-profile-actions">
      <ButtonComponent name="Save" @button-clicked="handleUpdateProfile" />
      <DelButtonComponent name="Clear" @button-clicked="handleClearProfile" />
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
import DelButtonComponent from "@/components/DelButtonComponent.vue";
import CategoryCheckBoxComponent from "@/components/CategoryCheckBoxComponent.vue";
import SelectNumberComponent from "@/components/SelectNumberComponent.vue";

export default {
  name: "RestaurantCreateView",
  components: {
    TitleComponent,
    RestaurantHeaderComponent,
    FooterComponent,
    InputComponent,
    InputTitleComponent,
    ButtonComponent,
    DelButtonComponent,
    CategoryCheckBoxComponent,
    SelectNumberComponent,
  },
  data: function () {
    return {
      days: ["M", "T", "W", "TH", "F", "S", "SN"],
      restaurantName: "",
      categoryName: "",
      seat: 1,
      categoryOptions: [
        { label: "Italian Food", value: "Italian Food" },
        { label: "French Food", value: "French Food" },
        { label: "Asian Food", value: "Asian Food" },
        { label: "Eastern Food", value: "Eastern Food" },
      ],
      selectedButtonValues: [],
    };
  },
  methods: {
    getRestaurantName(event) {
      this.restaurantName = event;
    },
    handleUpdateProfile() {
      console.log("--- updating the profile");
    },
    handleClearProfile() {
      console.log("--- clearing the profile");
    },
    handleDeleteProfile() {
      console.log("--- redireting the profile");
      window.location.href = "/login";
    },
    getCategoryName(event) {
      this.categoryName = event;
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
  justify-content: space-between;
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
