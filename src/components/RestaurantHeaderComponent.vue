<template>
  <div class="restaurant-header-elements">
    <ButtonComponent name="Sign Out" @button-clicked="handleLoginRedirect" />
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { singoutUser } from "@/api/auth";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

export default {
  name: "RestaurantHeaderComponent",
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
  },
};
</script>

<style scoped lang="scss">
.restaurant-header-elements {
  display: flex;
  justify-content: space-around;
  max-width: 1800px;
  background-color: rgb(63, 63, 63);
  margin: -8px -18px auto;

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

@media (min-width: 576px) {
  .button {
    font-size: 18px !important;
  }
}
</style>
