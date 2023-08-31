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
  name: "InputView",
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
.input {
  width: 300px;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

.input:focus {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}
</style>
