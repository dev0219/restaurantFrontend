<template>
  <div class="restaurant-header-elements">
    <ButtonComponent name="Sign Out" @button-clicked="handleLoginRedirect" />
  </div>
</template>

<script>
// @ is an alias to /src
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
        this.router.push({ name: "home" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.restaurant-header-elements {
  display: flex;
  justify-content: flex-start;
  max-width: 700px;
  margin: auto;

  .button {
    background: transparent;
    color: blue;
    text-decoration: underline;
    font-size: 18px;
  }
}
</style>
