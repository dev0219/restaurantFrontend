<template>
  <div class="button-group">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      @click="toggleButton(button.value)"
      :class="{ active: isActiveButton(button.value) }"
    >
      {{ button.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "DaysSelectComponent",
  props: {
    buttons: Array, // Array of button objects with label and value
    value: Array, // Currently selected button value
  },
  data() {
    return {
      activeButtons: this.value || [],
    };
  },
  methods: {
    toggleButton(buttonValue) {
      const index = this.activeButtons.indexOf(buttonValue);
      if (index === -1) {
        this.activeButtons.push(buttonValue);
      } else {
        this.activeButtons.splice(index, 1);
      }
      this.emitActiveButtonValues();
    },
    isActiveButton(buttonValue) {
      return this.activeButtons.includes(buttonValue);
    },
    emitActiveButtonValues() {
      this.$emit("getDays", this.activeButtons);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-group {
  display: flex;
  gap: 3.5px;
  margin: auto;
  width: 300px;
  margin-top: 30px;
  justify-content: center;

  button {
    padding: 8px 16px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
    border-radius: 15px;
    font-size: 15.5px;
  }

  button.active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
}
@media (min-width: 576px) {
  .button-group {
    gap: 10px;
    width: 600px;

    button {
      font-size: 24px;
    }
  }
}
</style>
