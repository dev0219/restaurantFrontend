<template>
  <div class="input-title-element">
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "InputTitleComponent",
  props: {
    name: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 576px) {
  h3 {
    font-family: Electrolize, sans serif;
    font-size: 32px;
  }
}

@media (min-width: 576px) {
  h3 {
    font-size: 44px;
  }
}
</style>
