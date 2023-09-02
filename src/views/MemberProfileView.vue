<template>
  <div class="member-profile-elements">
    <MemberHeaderComponent />
    <TitleComponent title="Member Profile" />
    <div v-for="res of resevedRestaurants" :key="res.date">
      <ReservedRestaurantComponent
        :name="res.name"
        :date="res.date"
        :seats="res.seats"
      />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TitleComponent from "@/components/TitleComponent.vue";
import MemberHeaderComponent from "@/components/MemberHeaderComponent.vue";
import ReservedRestaurantComponent from "@/components/ReservedRestaurantComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "MemberProfileView",
  components: {
    TitleComponent,
    MemberHeaderComponent,
    ReservedRestaurantComponent,
    FooterComponent,
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
.member-profile-elements {
  margin-top: 0%;
}
.member-profile-elements .title-element {
  margin-top: 2%;
}

.auth-elements .confirm-element {
  margin-top: 20px;
}
</style>
