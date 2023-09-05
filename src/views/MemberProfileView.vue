<template>
  <div class="member-profile-elements">
    <MemberHeaderComponent />
    <DeleteConfirmComponent
      v-if="is_deleting"
      :content="deletecontent"
      v-on:delete-action="handleDeleteConfirm"
    />
    <TitleComponent title="Member Profile" />
    <div v-for="res of resevedRestaurants" :key="res.date">
      <ReservedRestaurantComponent
        :name="res.name"
        :date="res.date"
        :seats="res.seats"
        :id="res._id"
        v-on:delete-reserved="handleDelete"
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
import DeleteConfirmComponent from "@/components/DeleteConfirmComponent.vue";
import { getUserReservations, deleteReservation } from "@/api/reservation";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

export default {
  name: "MemberProfileView",
  components: {
    TitleComponent,
    MemberHeaderComponent,
    ReservedRestaurantComponent,
    FooterComponent,
    DeleteConfirmComponent,
  },
  setup() {
    const userInfo = useUserStore();
    const router = useRouter();
    return { userInfo, router };
  },
  data: function () {
    return {
      is_deleting: false,
      resevedRestaurants: [],
      deleting_reserve_id: "",
      deletecontent: "Are you deleting this reservation?",
    };
  },
  methods: {
    async getAllRestaurants() {
      if (this.userInfo.userId == "") {
        this.userInfo.setUserId(localStorage.getItem("userId"));
      }
      let userobject = { userId: this.userInfo.userId };
      const allRestaurantLst = await getUserReservations(userobject);
      this.resevedRestaurants = allRestaurantLst.data.results.results;
    },
    async handleDeleteConfirm(val) {
      if (val) {
        this.is_deleting = false;
        let deletedre = { _id: this.deleting_reserve_id };
        const is_deleted = await deleteReservation(deletedre);
        if (is_deleted.data.result.status == 4) {
          window.location.reload();
        }
      } else {
        this.deleting_reserve_id = "";
        this.is_deleting = false;
      }
    },
    handleDelete(val) {
      this.is_deleting = true;
      this.deleting_reserve_id = val;
    },
  },
  created() {
    this.getAllRestaurants();
  },
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
