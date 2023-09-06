<template>
  <div class="restaurant-details-elements">
    <div class="detail-object">
      <h2>{{ name }}</h2>
      <img :src="src" />
      <ButtonComponent name="BOOK RESERVATION" @button-clicked="BookReserved" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { useRestaurantStore } from "@/store/restaurant";
import { useRouter } from "vue-router";

export default {
  name: "RestaurantDetailsComponent",
  props: {
    name: String,
    categoryName: Array,
    userId: String,
    days: Array,
    src: String,
    id: String,
    seats: Number,
  },
  setup() {
    const useRestaurantInfo = useRestaurantStore();
    const router = useRouter();
    return { useRestaurantInfo, router };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    BookReserved() {
      let restaurantObj = {
        _id: this.id,
        name: this.name,
        restaurantImg: this.src,
        categories: this.categoryName,
        seats: this.seats,
        days: this.days,
        userId: this.userId,
      };
      localStorage.setItem("restaurantInfo", JSON.stringify(restaurantObj));
      this.useRestaurantInfo.setRestauratInfo(restaurantObj);
      this.router.push({ name: "MemberReservation" });
    },
  },
};
</script>

<style scoped lang="scss">
.restaurant-details-elements {
  max-width: 300px;
  margin: auto;
  margin-top: 2%;
  display: grid;
  place-items: center;
}
.detail-object img {
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
}
</style>
