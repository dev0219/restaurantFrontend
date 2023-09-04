<template>
  <div class="delete-confirm-element">
    <p class="delete-content">{{ content }}</p>
    <div class="delete-actions">
      <ButtonComponent name="Confirm" @button-clicked="Confirmed" />
      <DelButtonComponent name="Cancel" @button-clicked="Canceled" />
    </div>
  </div>
</template>

<script>
import DelButtonComponent from "@/components/DelButtonComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "DeleteConfirmComponent",
  components: {
    DelButtonComponent,
    ButtonComponent,
  },
  props: {
    content: String,
  },
  methods: {
    Confirmed() {
      this.$emit("delete-action", true);
    },
    Canceled() {
      this.$emit("delete-action", false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.delete-confirm-element {
  position: absolute;
  background: white;
  font-size: 14px;
  width: 300px;
  border: 1px solid;
  margin: auto;
  height: 150px;
  border-radius: 10px;
  top: 5%;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  max-width: 400px;
  color: black;
  left: 40%;
}
.delete-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.delete-content {
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
}
</style>
