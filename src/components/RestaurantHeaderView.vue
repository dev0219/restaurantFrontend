<template>
  <div class="restaurant-header-elements">
    <ButtonView name="Sign Out" @button-clicked="handleLoginRedirect" />
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonView from "@/components/Button.vue";

export default {
  name: "RestaurantHeaderView",
  components: {
    ButtonView,
  },
  methods: {
    handleLoginRedirect() {
      window.location.href = "/login";
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
