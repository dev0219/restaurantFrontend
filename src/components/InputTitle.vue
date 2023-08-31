<template>
  <div class="input-title-element">
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "InputTitleView",
  props: {
    name: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
