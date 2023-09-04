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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.confirm-element {
  font-size: 14px;
  width: 50%;
  border: 1px solid;
  margin: auto;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  max-width: 400px;
  margin-top: 20px;
}

.confirm.success {
  /* Background for success status */
  background-color: #a8e6cf;
  color: grey;
  padding: 10px;
}

.confirm.failure {
  /* Background for failure status */
  background-color: #f6b6b2;
  color: red;
  padding: 10px;
}
</style>
