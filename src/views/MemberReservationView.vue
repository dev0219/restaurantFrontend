<template>
  <div class="member-restaurants-elements">
    <MemberHeaderComponent />
    <TitleComponent title="Book Reservation" />
    <h4>Restaurant Name : Restaurant1</h4>
    <h4>Seats Available : 12, 14</h4>
    <ConfirmMessageComponent :content="confirmstatus" :status="status" />
    <h4>Date</h4>
    <div class="select-reservation-date">
      <div class="select-reservation-date-element">
        <InputTitleComponent name="Choose a date" />
        <SelectNumberComponent v-model="seat" :step="1" :maxnumber="31" />
      </div>
      <div class="select-reservation-month-element">
        <InputTitleComponent name="Choose a month" />
        <SelectNumberComponent v-model="seat" :step="1" :maxnumber="12" />
      </div>
    </div>
    <div class="reservation-now-actions">
      <div class="select-seat-element">
        <InputTitleComponent name="Choose a seat" />
        <SelectNumberComponent v-model="seat" :step="2" :maxnumber="100" />
      </div>
      <ButtonView name="Reserve Now" @button-clicked="handleReserveNow" />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TitleComponent from "@/components/TitleComponent.vue";
import MemberHeaderComponent from "@/components/MemberHeaderComponent.vue";
import ConfirmMessageComponent from "@/components/ConfirmMessageComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ButtonView from "@/components/ButtonComponent.vue";
import SelectNumberComponent from "@/components/SelectNumberComponent.vue";
import InputTitleComponent from "@/components/InputTitleComponent.vue";

export default {
  name: "MemberReservationView",
  components: {
    TitleComponent,
    MemberHeaderComponent,
    ConfirmMessageComponent,
    FooterComponent,
    ButtonView,
    SelectNumberComponent,
    InputTitleComponent,
  },
  data: function () {
    return {
      status: 1,
      confirmstatus:
        "Please confirm. Book Date : 2023-08-29, Seats are 12, 14.",
    };
  },
  methods: {
    handleReserveNow() {
      console.log("--reserve now");
    },
  },
};
</script>

<style scoped lang="scss">
.reservation-now-actions {
  display: flex;
  margin: auto;
  max-width: 700px;
  justify-content: space-between;
  align-items: end;
}
.reservation-now-actions .select-element {
  height: 2.5em;
}
.select-reservation-date {
  display: flex;
  margin: auto;
  max-width: 500px;
  gap: 10px;
  justify-content: space-around;
}
.member-restaurants-elements {
  margin-top: 0%;
}
.member-restaurants-elements .title-element {
  margin-top: 2%;
}
.select-element select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #5c6664;
  background-image: none;
  flex: 1;
  padding: 0 0.5em;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  font-family: "Open Sans", sans-serif;
}
.select-element::-ms-expand {
  display: none;
}
.select-element {
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #5c6664;
  overflow: hidden;
  border-radius: 0.25em;
}
.select-element::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #2b2e2e;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
}
.select-element:hover::after {
  color: #23b499;
}
</style>
