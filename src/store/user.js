import { defineStore } from "pinia";

export const useUserStore = defineStore("userInfo", {
  state: () => ({ userId: "", isDeletedProfile: false }),
  getters: {
    getUserId: (state) => state.userId,
  },
  actions: {
    setUserId(id) {
      console.log("---- this is calling?", id);
      this.userId = id;
    },
    setDeletedProfile(val) {
      this.isDeletedProfile = val;
    },
  },
});
