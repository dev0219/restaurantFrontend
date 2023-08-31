<template>
  <div class="title-element">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "TitleView",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title-element {
  font-size: 40px;
}
</style>
