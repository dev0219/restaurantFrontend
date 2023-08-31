<template>
  <div class="multiselect" ref="multiselect" :class="{ active: isActive }">
    <div class="title noselect" @click="toggleDropdown">
      <span class="text">{{ selectionsString }}</span>
      <span
        class="close-icon"
        @click="clearSelections"
        v-show="selectionsString.length > 0"
      >
        &times;
      </span>
      <span class="expand-icon">&plus;</span>
    </div>
    <div class="container">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        @click="toggleOption(option.value)"
        :class="{ selected: isSelected(option.value) }"
      >
        {{ option.label }}
      </option>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySelectView",
  props: {
    name: String,
  },
  data() {
    return {
      options: [
        { value: "Italian Food", label: "Italian Food" },
        { value: "French Food", label: "French Food" },
        { value: "Asian Food", label: "Asian Food" },
        { value: "Eastern Food", label: "Eastern Food" },
        { value: "All Selected", label: "View All" },
      ],
      selections: [],
    };
  },
  computed: {
    isActive() {
      return this.selections.length > 0;
    },
    selectionsString() {
      if (this.selections.length > 0) {
        const displayedSelections = this.selections.slice(0, 6).join(", ");
        return this.selections.length > 6
          ? `${displayedSelections} [...]`
          : displayedSelections;
      }
      return "";
    },
  },
  methods: {
    toggleDropdown() {
      this.$refs.multiselect.classList.toggle("active");
    },
    toggleOption(value) {
      const index = this.selections.indexOf(value);
      if (value == "All Selected") {
        let arrayVal = [
          "Italian Food",
          "French Food",
          "Asian Food",
          "Eastern Food",
        ];
        this.selections = arrayVal;
      } else if (index === -1) {
        this.selections.push(value);
      } else {
        this.selections.splice(index, 1);
      }
    },
    isSelected(value) {
      return this.selections.includes(value);
    },
    clearSelections() {
      this.selections = [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.multiselect {
  margin-top: 50px !important;
  width: 600px;
  font-size: 15px;
  padding-bottom: 4px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  outline: none;
  margin: auto;
}

.multiselect:hover {
  border: 1px solid rgba(0, 0, 0, 0.3);
}

.multiselect.active {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: 1px solid transparent;
}

.multiselect > .title {
  cursor: pointer;
  height: 16px;
  padding: 6px;
}

.multiselect > .title > .text {
  max-width: 100%;
  max-height: 25px;
  display: block;
  float: left;
  overflow: hidden;
  line-height: 1.3em;
}

.multiselect > .title > .expand-icon,
.multiselect > .title > .close-icon {
  float: right;
  border-radius: 50%;
  padding: 0 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 700;
  transition: 0.2s;
  display: block;
}

.multiselect.selection > .title > .expand-icon {
  display: none;
}

.multiselect > .title > .expand-icon,
.multiselect.selection > .title > .close-icon {
  display: block;
}

.multiselect > .title > .close-icon:hover {
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: rgb(203, 32, 32);
  color: #fff;
}

.multiselect > .container {
  max-height: 200px;
  overflow: auto;
  margin-top: 4px;
  margin-left: -1px;
  width: 300px;
  transition: 0.2s;
  position: absolute;
  z-index: 99;
  background: #fff;
  border: 1px solid transparent;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.multiselect.active > .container {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top: 0;
}

.multiselect:hover > .container {
  border-top-color: rgba(0, 0, 0, 0.3);
}

.multiselect.active:hover > .container {
  border-color: rgba(0, 0, 0, 0.3);
}

.multiselect > .container > option {
  display: none;
  padding: 5px;
  cursor: pointer;
  transition: 0.2s;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
}

.multiselect > .container > option.selected {
  background: rgb(122, 175, 233);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: #fff;
}

.multiselect > .container > option:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #000;
}

.multiselect.active > .container > option {
  display: block;
}
</style>
