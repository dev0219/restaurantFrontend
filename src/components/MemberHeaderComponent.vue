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
// @ is an alias to /src
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
  max-width: 700px;
  margin: auto;

  .button {
    background: transparent;
    color: blue;
    text-decoration: underline;
    font-size: 18px;
  }
}

.auth-elements .confirm-element {
  margin-top: 20px;
}
</style>
