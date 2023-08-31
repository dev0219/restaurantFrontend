<template>
  <div class="member-restaurants-elements">
    <MemberHeaderView />
    <TitleView title="Book Reservation" />
    <h4>Restaurant Name : Restaurant1</h4>
    <h4>Seats Available : 12, 14</h4>
    <ConfirmMessageView :content="confirmstatus" :status="status" />
    <h4>Date</h4>
    <div class="select-reservation-date">
      <div class="select-element">
        <select name="format" id="format">
          <option selected disabled>Choose a date</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div class="select-element">
        <select name="format" id="format">
          <option selected disabled>Choose a month</option>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
        </select>
      </div>
    </div>
    <div class="reservation-now-actions">
      <div class="select-element">
        <select name="format" id="format">
          <option selected disabled>Choose a Seat</option>
          <option value="1">12</option>
          <option value="2">15</option>
        </select>
      </div>
      <ButtonView name="Reserve Now" @button-clicked="handleReserveNow" />
    </div>
    <FooterView />
  </div>
</template>

<script>
// @ is an alias to /src
import TitleView from "@/components/Title.vue";
import MemberHeaderView from "@/components/MemberHeaderView.vue";
import ConfirmMessageView from "@/components/ConfirmMessage.vue";
import FooterView from "@/components/Footer.vue";
import ButtonView from "@/components/Button.vue";

export default {
  name: "MemberReservationView",
  components: {
    TitleView,
    MemberHeaderView,
    ConfirmMessageView,
    FooterView,
    ButtonView,
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
  margin-top: 5%;
}
.reservation-now-actions .select-element {
  height: 2.5em;
}
.select-reservation-date {
  display: flex;
  margin: auto;
  max-width: 500px;
  gap: 10px;
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
