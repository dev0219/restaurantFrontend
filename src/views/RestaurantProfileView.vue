<template>
  <div class="restaurant-profile-elements">
    <RestaurantHeaderView />
    <TitleView title="Restaurant Profile" />
    <InputTitleView name="Restaurant Name" />
    <InputView v-on:data="getRestaurantName" />
    <InputTitleView name="Category" />
    <InputView v-on:data="getCategoryName" />
    <InputTitleView name="Seats Available" />
    <div class="seats-available-element">
      <select>
        <option selected disabled>Choose a seat</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
    <InputTitleView name="Days Open" />
    <div class="days-open-element">
      <div class="days-item" v-for="day of days" :key="day">{{ day }}</div>
    </div>
    <div class="restaurant-profile-actions">
      <Button name="Update" />
      <DelButton name="Clear" />
    </div>
    <FooterView />
  </div>
</template>

<script>
// @ is an alias to /src
import TitleView from "@/components/Title.vue";
import InputTitleView from "@/components/InputTitle.vue";
import InputView from "@/components/Input.vue";
import RestaurantHeaderView from "@/components/RestaurantHeaderView.vue";
import FooterView from "@/components/Footer.vue";
import Button from "@/components/Button.vue";
import DelButton from "@/components/DelButton.vue";

export default {
  name: "RestaurantProfileView",
  components: {
    TitleView,
    RestaurantHeaderView,
    FooterView,
    InputView,
    InputTitleView,
    Button,
    DelButton,
  },
  data: function () {
    return {
      days: ["M", "T", "W", "TH", "F", "S", "SN"],
      restaurantName: "",
      categoryName: "",
    };
  },
  methods: {
    getRestaurantName(event) {
      this.restaurantName = event;
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
