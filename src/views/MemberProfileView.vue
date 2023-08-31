<template>
  <div class="member-profile-elements">
    <MemberHeaderView />
    <TitleView title="Member Profile" />
    <div v-for="res of resevedRestaurants" :key="res.date">
      <ReservedRestaurant
        :name="res.name"
        :date="res.date"
        :seats="res.seats"
      />
    </div>
    <FooterView />
  </div>
</template>

<script>
// @ is an alias to /src
import TitleView from "@/components/Title.vue";
import MemberHeaderView from "@/components/MemberHeaderView.vue";
import ReservedRestaurant from "@/components/ReservedRestaurant.vue";
import FooterView from "@/components/Footer.vue";

export default {
  name: "MemberProfileView",
  components: {
    TitleView,
    MemberHeaderView,
    ReservedRestaurant,
    FooterView,
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
