<template>
  <div class="member-profile-elements">
    <MemberHeaderComponent />
    <StoreConfirmComponent v-if="is_reserved" :Storecontent="Storecontent" />
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
import TitleComponent from "@/components/TitleComponent.vue";
import MemberHeaderComponent from "@/components/MemberHeaderComponent.vue";
import ReservedRestaurantComponent from "@/components/ReservedRestaurantComponent.vue";
import DeleteConfirmComponent from "@/components/DeleteConfirmComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import StoreConfirmComponent from "@/components/StoreConfirmComponent.vue";
import { getUserReservations, deleteReservation } from "@/api/reservation";
import { useRestaurantStore } from "@/store/restaurant";
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
    StoreConfirmComponent,
  },
  setup() {
    const userInfo = useUserStore();
    const router = useRouter();
    const useRestaurantInfo = useRestaurantStore();
    return { userInfo, router, useRestaurantInfo };
  },
  data: function () {
    return {
      is_deleting: false,
      is_reserved: false,
      resevedRestaurants: [],
      deleting_reserve_id: "",
      deletecontent: "Are you deleting this reservation?",
      Storecontent: "The restaurant was reserved successfully!",
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
    if (this.useRestaurantInfo.storConfirm) {
      this.is_reserved = true;
      setTimeout(() => {
        this.is_reserved = false;
        this.useRestaurantInfo.setStoreConfirm(false);
      }, 3000);
    }
  },
};
</script>

<style scoped lang="scss">
.member-profile-elements {
  margin-top: 0%;
  padding-bottom: 40px;
  .title-element {
    margin-top: 2%;
  }

  .confirm-element {
    margin-top: 20px;
  }
}

@media (min-width: 576px) {
  .member-profile-elements {
    font-size: 26px;

    .title-element {
      font-size: 60px;
    }
  }
}
</style>
