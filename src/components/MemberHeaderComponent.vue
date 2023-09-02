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

export default {
  name: "MemberHeaderComponent",
  components: {
    ButtonComponent,
  },
  methods: {
    handleLoginRedirect() {
      window.location.href = "/login";
    },
    handleRestaurantRedirect() {
      window.location.href = "/memberrestaurants";
    },
    handleProfileRedirect() {
      window.location.href = "/memberprofile";
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
