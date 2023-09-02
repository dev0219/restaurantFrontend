<template>
  <div class="list-container">
    <div class="restaurant-list-elements">
      <div class="res-details" v-for="res of restaurants" :key="res.id">
        <RestaurantDetailComponent
          :name="res.name"
          :categoryName="res.categoryName"
          :src="res.src"
          :id="res.id"
        />
      </div>
    </div>
    <div class="view-more-action">
      <ButtonComponent name="View More Restaurants" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RestaurantDetailComponent from "@/components/RestaurantDetailComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "RestaurantsListComponent",
  components: {
    RestaurantDetailComponent,
    ButtonComponent,
  },
  data: function () {
    return {
      restaurants: [
        {
          name: "restaurant1",
          src: "https://fastly.picsum.photos/id/797/200/200.jpg?hmac=-S9mzdkNyeh-FXTUE04cyqzvAV1W2D80OVQtTQHNt-k",
          categoryName: "Category1",
          id: "1",
        },
        {
          name: "restaurant2",
          src: "https://fastly.picsum.photos/id/797/200/200.jpg?hmac=-S9mzdkNyeh-FXTUE04cyqzvAV1W2D80OVQtTQHNt-k",
          categoryName: "Category2",
          id: "2",
        },
        {
          name: "restaurant3",
          src: "https://fastly.picsum.photos/id/797/200/200.jpg?hmac=-S9mzdkNyeh-FXTUE04cyqzvAV1W2D80OVQtTQHNt-k",
          categoryName: "Category3",
          id: "3",
        },
        {
          name: "restaurant4",
          src: "https://fastly.picsum.photos/id/797/200/200.jpg?hmac=-S9mzdkNyeh-FXTUE04cyqzvAV1W2D80OVQtTQHNt-k",
          categoryName: "Category4",
          id: "4",
        },
        {
          name: "restaurant5",
          src: "https://fastly.picsum.photos/id/797/200/200.jpg?hmac=-S9mzdkNyeh-FXTUE04cyqzvAV1W2D80OVQtTQHNt-k",
          categoryName: "Category5",
          id: "5",
        },
        {
          name: "restaurant6",
          src: "https://fastly.picsum.photos/id/797/200/200.jpg?hmac=-S9mzdkNyeh-FXTUE04cyqzvAV1W2D80OVQtTQHNt-k",
          categoryName: "Category6",
          id: "6",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.restaurant-list-elements {
  margin-top: 2% !important;
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: auto;
}
.res-details {
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.restaurant-list-elements .button {
  margin: auto;
}
.restaurant-list-elements .title-element {
  margin-top: 2%;
}
.view-more-action {
  margin: 3%;
}
</style>
