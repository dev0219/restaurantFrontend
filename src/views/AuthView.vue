<template>
  <div class="auth-elements">
    <TitleComponent title="Login" />
    <InputTitleComponent name="User Name" />
    <InputComponent v-on:data="getValue" />
    <ButtonComponent name="LOGIN" @button-clicked="handleLoginClick" />
    <ConfirmMessageComponent
      v-if="iscalled"
      :content="confirmstatus"
      :status="status"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonComponent from "@/components/ButtonComponent.vue";
import InputTitleComponent from "@/components/InputTitleComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import ConfirmMessageComponent from "@/components/ConfirmMessageComponent.vue";

export default {
  name: "AuthView",
  components: {
    ButtonComponent,
    TitleComponent,
    InputTitleComponent,
    InputComponent,
    ConfirmMessageComponent,
  },
  data: function () {
    return {
      confirmstatus: "checking",
      status: 1,
      iscalled: false,
      inputVal: "",
    };
  },
  methods: {
    handleLoginClick() {
      // Handle the button click event here
      console.log("LOGIN button clicked!", this.inputVal);
      this.iscalled = true;
      if (this.status == 1) {
        this.confirmstatus = "Login Successfully!";
        let username = this.inputVal.toLowerCase();
        if (username.includes("restaurant")) {
          window.location.href = "/restaurantprofile";
        } else {
          window.location.href = "/memberprofile";
        }
      } else {
        this.confirmstatus = "Login Failed, please try again.";
      }
      // You can perform actions like sending API requests, updating data, etc.
    },
    getValue(event) {
      this.inputVal = event;
    },
  },
};
</script>

<style scoped lang="scss">
.auth-elements {
  padding: 2% 0;
  width: 400px;
  margin: auto;
  border: 1px solid;
  margin-top: 10%;
  border-radius: 7px;
}
.auth-elements .button-element {
  margin-top: 20px;
}

.auth-elements .confirm-element {
  margin-top: 20px;
}
</style>
