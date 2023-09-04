import { defineStore } from "pinia";

export const useReservationStore = defineStore("reservationInfo", {
  state: () => ({ reserveId: "" }),
  getters: {
    getReservationId: (state) => state.reserveId,
  },
  actions: {
    setReserveId(id) {
      this.reserveId = id;
    },
  },
});
