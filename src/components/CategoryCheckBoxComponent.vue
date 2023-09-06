<template>
  <div class="checkbox-button-group">
    <label
      v-for="(button, index) in buttons"
      :key="index"
      class="checkbox-button"
    >
      <input
        type="checkbox"
        :value="button.value"
        v-model="selectedButtons"
        @change="handleCheckboxChange"
      />
      {{ button.label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "CategoryCheckBoxComponent",
  props: {
    buttons: Array, // Array of button objects with label and value
    value: Array, // Currently selected button value
  },
  data() {
    return {
      selectedButtons: this.value || [],
    };
  },
  methods: {
    handleCheckboxChange() {
      this.$emit("CheckedCategory", this.selectedButtons);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.checkbox-button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin: auto;
  justify-content: center;
}

.checkbox-button {
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 5px;
  }

  /* Add some styling for selected checkboxes */
  input[type="checkbox"]:checked + span {
    font-weight: bold;
  }
}

@media (min-width: 576px) {
  .checkbox-button-group {
    gap: 15px;
    font-size: 26px;
  }

  .checkbox-button input {
    width: 18px;
    height: 18px;
  }
}

@media (min-width: 768px) {
  .checkbox-button input {
    width: 24px;
    height: 24px;
  }
}

@media (min-width: 1000px) {
  .checkbox-button-group {
    gap: 30px;
    font-size: 32px;
  }
}
</style>
