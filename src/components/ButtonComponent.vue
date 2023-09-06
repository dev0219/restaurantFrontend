<template>
  <button class="button" @click="handleButtonClick">{{ name }}</button>
</template>

<script>
export default {
  name: "ButtonComponent",
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
  height: 40px;
  background-color: #57a957;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16.5px;
  font-weight: 600;
  border-color: #57a957;
  cursor: pointer;
  font-family: Archivo Narrow, sans-serif;
  letter-spacing: 0.25em;

  &:hover {
    opacity: 0.5;
    transform: scale(1.03);
  }

  &:active {
    top: 10px;
  }
}

@media (min-width: 576px) {
  .button {
    padding: 0 45px;
    height: 60px;
  }
}
</style>
