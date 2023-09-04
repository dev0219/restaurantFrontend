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
    reserveId: "",
  }),
  getters: {
    getRestaurantId: (state) => state.restaurant,
  },
  actions: {
    setRestauratInfo(restaurant) {
      console.log("---- this is calling?", restaurant);
      this.restaurant = restaurant;
    },
    setReserveId(id) {
      this.reserveId = id;
    },
  },
});
