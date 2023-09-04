import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import MemberProfileView from "../views/MemberProfileView.vue";
import MemberRestaurantsView from "../views/MemberRestaurantsView.vue";
import MemberReservationView from "../views/MemberReservationView.vue";
import RestaurantProfileView from "../views/RestaurantProfileView.vue";
import RestaurantCreateView from "../views/RestaurantCreateView.vue";
import RestaurantEditView from "../views/RestaurantEditView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "home",
    component: AuthView,
  },
  {
    path: "/memberprofile",
    name: "MemberProfile",
    component: MemberProfileView,
  },
  {
    path: "/memberrestaurants",
    name: "MemberRestaurants",
    component: MemberRestaurantsView,
  },
  {
    path: "/bookreservation",
    name: "MemberReservation",
    component: MemberReservationView,
  },
  {
    path: "/restaurantprofile",
    name: "RestaurantProfileView",
    component: RestaurantProfileView,
  },
  {
    path: "/create-restaurant",
    name: "RestaurantCreateView",
    component: RestaurantCreateView,
  },
  {
    path: "/edit-restaurant",
    name: "RestaurantEditView",
    component: RestaurantEditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
