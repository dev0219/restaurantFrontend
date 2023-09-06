<template>
  <div class="confirm-element" :class="['confirm', statusClass]">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: "ConfirmMessageComponent",
  props: {
    content: String,
    status: Number,
  },
  computed: {
    statusClass() {
      if (this.status === 1) {
        return "success";
      } else if (this.status === 2) {
        return "failure";
      } else {
        return ""; // No additional class
      }
    },
  },
};
</script>

<style scoped lang="scss">
.auth-elements {
  padding: 2% 0;
  width: 320px;
  margin: 5px auto auto auto;
  border: 1px solid;
  border-radius: 7px;

  .button-element {
    margin-top: 20px;
  }

  .confirm-element {
    margin-top: 20px;
  }
}
@media (min-width: 576px) {
  .auth-elements {
    width: 500px;
  }
}
</style>
