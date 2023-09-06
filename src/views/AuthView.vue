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
import ButtonComponent from "@/components/ButtonComponent.vue";
import InputTitleComponent from "@/components/InputTitleComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import ConfirmMessageComponent from "@/components/ConfirmMessageComponent.vue";
import { loginUser } from "@/api/auth";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

export default {
  name: "AuthView",
  components: {
    ButtonComponent,
    TitleComponent,
    InputTitleComponent,
    InputComponent,
    ConfirmMessageComponent,
  },
  setup() {
    const router = useRouter();
    const userInfo = useUserStore();
    return { userInfo, router };
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
    async handleLoginClick() {
      let username = this.inputVal.toLowerCase();
      try {
        const userdata = { username: username };
        const loginResult = await loginUser(userdata);
        console.log("-- login result---");
        console.log(loginResult);
        this.iscalled = true;
        if (loginResult.success && loginResult.data) {
          if (loginResult.data.result.status == 1) {
            this.confirmstatus =
              "Currently, someone logined with your username already.";
            this.status = 2;
          } else if (loginResult.data.result.status == 2) {
            this.confirmstatus = "Login Successfully!";
            this.status = 1;
            this.userInfo.setUserId(loginResult.data.result.id);
            localStorage.setItem("userId", loginResult.data.result.id);
            setTimeout(() => {
              if (loginResult.data.result.role == 2) {
                this.router.push({ name: "RestaurantProfileView" });
              } else {
                this.router.push({ name: "MemberProfile" });
              }
            }, 2000);
          } else if (loginResult.data.result.status == 3) {
            this.confirmstatus = "You are new user in this system!";
            this.status = 1;
            this.userInfo.setUserId(loginResult.data.result.id);
            localStorage.setItem("userId", loginResult.data.result.id);
            setTimeout(() => {
              if (loginResult.data.result.role == 2) {
                this.router.push({ name: "RestaurantProfileView" });
              } else {
                this.router.push({ name: "MemberProfile" });
              }
            }, 2000);
          }
        }
      } catch (error) {
        this.iscalled = false;
        console.error("Error login user:", error);
      }
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
  width: 320px;
  margin: auto;
  border: 1px solid;
  margin-top: 10%;
  border-radius: 7px;
  .button-element {
    margin-top: 20px;
  }

  .confirm-element {
    margin-top: 20px;
  }
}

@media (min-width: 576px) {
  .auth-elements {
    width: 80%;
  }
}
</style>
