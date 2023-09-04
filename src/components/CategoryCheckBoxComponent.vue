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
}

.checkbox-button input[type="checkbox"] {
  margin-right: 5px;
}

/* Add some styling for selected checkboxes */
.checkbox-button input[type="checkbox"]:checked + span {
  font-weight: bold;
}
</style>
