<template>
  <div class="member-restaurants-elements">
    <MemberHeaderComponent />
    <TitleComponent title="Select Categories" />
    <CategorySelectComponent
      :buttons="categoryOptions"
      v-model="selectedButton"
    />
    <TitleComponent title="Available Restaurants" />
    <RestaurantsListComponent />
    <FooterComponent />
    <ScrollUpComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TitleComponent from "@/components/TitleComponent.vue";
import MemberHeaderComponent from "@/components/MemberHeaderComponent.vue";
import RestaurantsListComponent from "@/components/RestaurantsListComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ScrollUpComponent from "@/components/ScrollUpComponent.vue";
import CategorySelectComponent from "@/components/CategorySelectComponent.vue";

export default {
  name: "MemberRestaurantsView",
  components: {
    TitleComponent,
    MemberHeaderComponent,
    RestaurantsListComponent,
    FooterComponent,
    ScrollUpComponent,
    CategorySelectComponent,
  },
  data: function () {
    return {
      resevedRestaurants: [
        { name: "test1", date: "2023-08-27", seats: "12,14" },
        { name: "test2", date: "2023-08-28", seats: "15,17" },
        { name: "test3", date: "2023-08-29", seats: "19,21" },
      ],
      selectedButton: "",
      categoryOptions: [
        { label: "Italian Food", value: "Italian Food" },
        { label: "French Food", value: "French Food" },
        { label: "Asian Food", value: "Asian Food" },
        { label: "Eastern Food", value: "Eastern Food" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.member-restaurants-elements {
  margin-top: 0%;
}
.member-restaurants-elements .title-element {
  margin-top: 2%;
}
</style>
