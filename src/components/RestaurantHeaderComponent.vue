<template>
  <div class="restaurant-header-elements">
    <ButtonComponent name="Sign Out" @button-clicked="handleLoginRedirect" />
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "RestaurantHeaderComponent",
  components: {
    ButtonComponent,
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
