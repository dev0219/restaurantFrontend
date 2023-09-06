<template>
  <div class="input-element">
    <input
      class="input"
      :value="value"
      @input="inputData($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    value: String,
  },
  methods: {
    inputData(value) {
      console.log(value);
      this.$emit("data", value);
    },
  },
  data() {
    return {
      // inputValue: this.value || "", // Initialize the input value with the prop
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-element {
  margin-top: -10px;

  .input {
    width: 300px;
    border: 2px solid #aaa;
    border-radius: 4px;
    margin: 10px 0;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
    transition: 0.3s;

    &:focus {
      border-color: #57a957;
      box-shadow: 0 0 8px 0 #57a957;
    }
  }
}

@media (min-width: 576px) {
  .input {
    width: 450px;
    font-size: 24px;
  }
}
</style>
