<template>
  <div class="member-restaurants-elements">
    <MemberHeaderComponent />
    <TitleComponent title="Book Reservation" />
    <h4>Restaurant Name : {{ useRestaurantInfo.restaurant.name }}</h4>
    <h4>Seats Available : {{ useRestaurantInfo.restaurant.seats }}</h4>
    <div class="open-days">
      <h4>Open Days</h4>
      <div class="open-day-item">
        <div v-for="item of useRestaurantInfo.restaurant.days" :key="item">
          {{ item }}
        </div>
      </div>
    </div>
    <ConfirmMessageComponent
      v-if="isCalled"
      :content="confirmstatus"
      :status="status"
    />
    <h4>Date</h4>
    <div class="select-reservation-date">
      <div class="select-reservation-date-element">
        <InputTitleComponent name="Choose a date" />
        <SelectNumberComponent
          v-on:SelectedNum="handleChoosedate"
          :value="date"
          :step="1"
          :maxnumber="31"
        />
      </div>
      <div class="select-reservation-month-element">
        <InputTitleComponent name="Choose a month" />
        <SelectNumberComponent
          v-on:SelectedNum="handleChoosemonth"
          :value="month"
          :step="1"
          :maxnumber="12"
        />
      </div>
    </div>
    <div class="reservation-now-actions">
      <div class="select-seat-element">
        <InputTitleComponent name="Choose a seat" />
        <SelectNumberComponent
          v-on:SelectedNum="handleChooseseat"
          :value="seats"
          :step="2"
          :maxnumber="useRestaurantInfo.restaurant.seats"
        />
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
import { useRestaurantStore } from "@/store/restaurant";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import { createReservation } from "@/api/reservation";

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
  setup() {
    const useRestaurantInfo = useRestaurantStore();
    const router = useRouter();
    const userInfo = useUserStore();
    return { useRestaurantInfo, router, userInfo };
  },
  data: function () {
    return {
      isCalled: false,
      status: 1,
      date: 1,
      dayNames: [
        "sunday",
        "monday",
        "tuesday",
        "wendnesday",
        "thursday",
        "friday",
        "saturday",
      ],
      day: "",
      month: 1,
      seats: 2,
      confirmstatus:
        "Please confirm. Book Date : 2023-08-29, Seats are 12, 14.",
    };
  },
  methods: {
    async handleReserveNow() {
      console.log("--reserve now");
      const currentDate = new Date();
      const currentyear = currentDate.getFullYear();
      const selected_bookdate = new Date(
        currentyear + "-" + this.month + "-" + this.date
      );
      this.day = this.dayNames[selected_bookdate.getDay()];
      if (this.userInfo.userId == "") {
        this.userInfo.setUserId(localStorage.getItem("userId"));
      }
      let reservationObj = {
        name: this.useRestaurantInfo.restaurant.name,
        restaurantId: this.useRestaurantInfo.restaurant._id,
        date: currentyear + "-" + this.month + "-" + this.date,
        seats: this.seats,
        userId: this.userInfo.userId,
      };
      if (this.useRestaurantInfo.restaurant.days.includes(this.day)) {
        this.status = 1;
        this.confirmstatus =
          "Please confirm. Book Date : " +
          currentyear +
          "-" +
          this.month +
          "-" +
          this.date +
          ", Seats are " +
          this.seats +
          ".";
        const is_created_reservation = await createReservation(reservationObj);
        if (is_created_reservation.data.result.status == 2) {
          this.confirmstatus = "Reserved a restaurant successfully!";
          setTimeout(() => {
            this.router.push({ name: "MemberProfile" });
          }, 2000);
        }
      } else {
        this.status = 2;
        this.confirmstatus =
          "The restaurant is not opening for the seleted date. Please try with another date.";
      }
      this.isCalled = true;
    },
    handleChoosedate(val) {
      this.date = val;
    },
    handleChoosemonth(val) {
      this.month = val;
    },
    handleChooseseat(val) {
      this.seats = val;
    },
    getBookdata() {
      const currentDate = new Date();
      this.date = currentDate.getDate();
      this.month = currentDate.getMonth() + 1;
      const dayIndex = currentDate.getDay();
      this.day = this.dayNames[dayIndex];
      if (
        this.useRestaurantInfo.restaurant.name == "" ||
        this.useRestaurantInfo.restaurant.restaurantImg == ""
      ) {
        let getRetaurantInfo = JSON.parse(
          localStorage.getItem("restaurantInfo")
        );
        this.useRestaurantInfo.setRestauratInfo(getRetaurantInfo);
      }
    },
  },
  created() {
    this.getBookdata();
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
.open-day-item {
  display: flex;
  margin: auto;
  width: 600px;
  justify-content: center;
  gap: 10px;
  div {
    width: 100px;
    height: 30px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    border-radius: 5px;
    background: pink;
    font-weight: 600;
  }
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
