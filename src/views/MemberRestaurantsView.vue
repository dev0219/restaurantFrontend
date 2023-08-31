<template>
  <div class="member-restaurants-elements">
    <MemberHeaderView />
    <TitleView title="Select Categories" />
    <CategorySelectView />
    <TitleView title="Available Restaurants" />
    <RestaurantsList />
    <FooterView />
    <ScrollUp />
  </div>
</template>

<script>
// @ is an alias to /src
import TitleView from "@/components/Title.vue";
import MemberHeaderView from "@/components/MemberHeaderView.vue";
import RestaurantsList from "./RestaurantsList.vue";
import FooterView from "@/components/Footer.vue";
import ScrollUp from "@/components/ScrollUp.vue";
import CategorySelectView from "@/components/CategorySelectView.vue";

export default {
  name: "MemberRestaurantsView",
  components: {
    TitleView,
    MemberHeaderView,
    RestaurantsList,
    FooterView,
    ScrollUp,
    CategorySelectView,
  },
  data: function () {
    return {
      resevedRestaurants: [
        { name: "test1", date: "2023-08-27", seats: "12,14" },
        { name: "test2", date: "2023-08-28", seats: "15,17" },
        { name: "test3", date: "2023-08-29", seats: "19,21" },
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
