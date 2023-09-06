<template>
  <div class="member-header-elements">
    <ButtonComponent name="Sign Out" @button-clicked="handleLoginRedirect" />
    <ButtonComponent
      name="Restaurants"
      @button-clicked="handleRestaurantRedirect"
    />
    <ButtonComponent name="Profile" @button-clicked="handleProfileRedirect" />
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { singoutUser } from "@/api/auth";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

export default {
  name: "MemberHeaderComponent",
  components: {
    ButtonComponent,
  },
  setup() {
    const userInfo = useUserStore();
    const router = useRouter();
    return { userInfo, router };
  },
  data: function () {
    return {
      userID: this.userInfo.userId,
    };
  },
  methods: {
    async handleLoginRedirect() {
      let userobj = { id: this.userID };
      const is_singout = await singoutUser(userobj);
      if (is_singout.success) {
        localStorage.removeItem("userId");
        this.router.push({ name: "home" });
      }
    },
    handleRestaurantRedirect() {
      this.router.push({ name: "MemberRestaurants" });
    },
    handleProfileRedirect() {
      this.router.push({ name: "MemberProfile" });
    },
  },
};
</script>

<style scoped lang="scss">
.member-header-elements {
  display: flex;
  justify-content: space-around;
  max-width: 1800px;
  background-color: rgb(63, 63, 63);
  margin: -8px -18px;

  .button {
    background: transparent;
    color: white;
    font-size: 13.75px;

    &:hover {
      color: #57a957;
      text-decoration: underline;
    }
  }
}

.auth-elements .confirm-element {
  margin-top: 20px;
}

@media (min-width: 576px) {
  .button {
    font-size: 18px !important;
  }
}
</style>
