<template>
  <div class="del-button-element">
    <button class="button" @click="handleButtonClick">{{ name }}</button>
  </div>
</template>

<script>
export default {
  name: "DelButtonComponent",
  props: {
    name: String,
  },
  methods: {
    handleButtonClick() {
      this.$emit("button-clicked"); // Emit a custom event
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  width: fit-content;
  padding: 12px 30px;
  height: 40px;
  background-color: red;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 17px;
  font-weight: 600;
  border-color: #57a957;
}
.button:active {
  top: 2px;
}
</style>
