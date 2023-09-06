import { defineStore } from "pinia";

export const useRestaurantStore = defineStore("restaurantInfo", {
  state: () => ({
    restaurant: {
      _id: "",
      name: "",
      restaurantImg: "",
      categories: [],
      seats: 2,
      days: [],
      userId: "",
    },
    storConfirm: false,
    is_created: false,
  }),
  getters: {
    getRestaurantId: (state) => state.restaurant,
  },
  actions: {
    setRestauratInfo(restaurant) {
      console.log("---- this is calling?", restaurant);
      this.restaurant = restaurant;
    },
    setStoreConfirm(confirm) {
      this.storConfirm = confirm;
    },
    setCreateConfirm(confirm) {
      this.is_created = confirm;
    },
  },
});
