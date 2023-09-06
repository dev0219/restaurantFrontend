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
  height: 40px;
  background-color: rgb(231, 127, 127);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  font-family: Archivo Narrow, sans-serif;
  letter-spacing: 0.095em;

  &:hover {
    opacity: 0.5;
    transform: scale(1.03);
  }

  &:active {
    top: 2px;
  }
}

@media (min-width: 576px) {
  .button {
    padding: 18px 45px;
    height: 60px;
    font-size: 20px;
  }
}
</style>
