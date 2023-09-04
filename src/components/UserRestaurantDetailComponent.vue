<template>
  <div class="restaurant-details-elements">
    <h2>{{ name }}</h2>
    <div class="rest-img">
      <img :src="src" />
    </div>
    <div class="categories">
      <button
        class="category-item"
        v-for="(button, index) in categoryName"
        :key="index"
      >
        {{ button }}
      </button>
    </div>
    <div class="restaurant-actions">
      <ButtonComponent name="Edit" @button-clicked="Edit" />
      <DelButtonComponent name="Delete" @button-clicked="Delete" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonComponent from "@/components/ButtonComponent.vue";
import DelButtonComponent from "@/components/DelButtonComponent.vue";
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
    DelButtonComponent,
  },
  methods: {
    Edit() {
      let restaurantObj = {
        _id: this.id,
        name: this.name,
        restaurantImg: this.src,
        categories: this.categoryName,
        seats: this.seats,
        days: this.days,
        userId: this.userId,
      };
      this.useRestaurantInfo.setRestauratInfo(restaurantObj);
      this.router.push({ name: "RestaurantEditView" });
    },
    Delete() {
      this.$emit("delete-restaurant", this.id);
      // window.location.href = "/bookreservation";
    },
  },
};
</script>

<style scoped lang="scss">
.restaurant-actions {
  display: flex;
  justify-content: center;
  margin: auto;
  gap: 5px;
}
.restaurant-details-elements {
  width: 300px;
  margin: auto;
  text-align: initial;
  margin-top: 2%;
}

.category-item {
  width: 100px;
  height: 30px;
  border: 1px solid;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: yellow;
  color: blue;
}

.categories {
  display: flex;
  gap: 4px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.rest-img {
  width: 150px;
  height: 150px;
}
.rest-img img {
  width: 150px;
  height: 150px;
}
</style>
