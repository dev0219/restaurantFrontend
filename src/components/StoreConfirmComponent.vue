<template>
  <div class="store-confirm-element success">
    {{ Storecontent }}
  </div>
</template>

<script>
export default {
  name: "StoreConfirmComponent",
  props: {
    Storecontent: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.store-confirm-element {
  font-size: 14px;
  width: 50%;
  border: 1px solid;
  margin: auto;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  max-width: 400px;
  margin-top: 20px;
}

.success {
  /* Background for success status */
  background-color: #a8e6cf;
  color: grey;
  padding: 10px;
}
</style>
