<template>
  <div class="footer">Copyright, 2023 P. Douyon</div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  padding: 12px 0;
  height: 20px;
  background-color: rgb(63, 63, 63);
  border: 1px solid;
  color: white;
  font-size: 18px;
  font-weight: 600;
  position: fixed;
  bottom: 0px;
  width: 100%;
  left: 0;
  display: grid;
  place-items: center;
}
</style>
