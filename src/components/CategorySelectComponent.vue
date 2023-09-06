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
  name: "CategorySelectComponent",
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
      this.$emit("SelCategory", this.activeButtons);
    },
    isActiveButton(buttonValue) {
      return this.activeButtons.includes(buttonValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-group {
  display: flex;
  gap: 5px;
  margin: auto;
  width: 320px;
  margin-top: 20px !important;
  justify-content: center;

  button {
    padding: 8px 16px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
    border-radius: 15px;

    &:hover {
      color: rgb(136, 135, 135);
    }
  }
}
.button-group button.active {
  background-color: #57a957;
  color: black;
  font-weight: bold;
  border: 2px solid black;
}

@media (min-width: 576px) {
  .button-group {
    gap: 10px;
    width: 620px;

    button {
      padding: 12px 22px;
      font-size: 18px;
    }
  }
}

@media (min-width: 1200px) {
  .button-group {
    display: flex;
    gap: 15px;
    margin: auto;
    width: 920px;

    button {
      padding: 18px 28px;
      font-size: 24px;
    }
  }
}
</style>
