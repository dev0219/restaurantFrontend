import { mount } from "@vue/test-utils";
import RestaurantsList from "@/views/RestaurantsList.vue";
import RestaurantDetails from "@/components/RestaurantDetails.vue";

describe("RestaurantsList.vue", () => {
  it("renders the RestaurantsList component", () => {
    const wrapper = mount(RestaurantsList);
    expect(wrapper.exists()).toBe(true);
  });

  it("displays the restaurant details", () => {
    const wrapper = mount(RestaurantsList);
    const restaurantDetails = wrapper.findAllComponents(RestaurantDetails);
    expect(restaurantDetails.length).toBe(6); // Number of restaurants defined in data
  });

  it('displays the "View More Restaurants" button', () => {
    const wrapper = mount(RestaurantsList);
    const viewMoreButton = wrapper.find(".view-more-action button");
    expect(viewMoreButton.exists()).toBe(true);
    expect(viewMoreButton.text()).toBe("View More Restaurants");
  });

  it('emits "button-clicked" event when "View More Restaurants" button is clicked', async () => {
    const wrapper = mount(RestaurantsList);
    const viewMoreButton = wrapper.find(".view-more-action button");

    await viewMoreButton.trigger("click");
    expect(wrapper.emitted("button-clicked")).toBeTruthy();
  });

  it("renders correct restaurant details", () => {
    const wrapper = mount(RestaurantsList);
    const restaurantDetails = wrapper.findAllComponents(RestaurantDetails);

    expect(restaurantDetails[0].text()).toContain("restaurant1");
    expect(restaurantDetails[1].text()).toContain("restaurant2");
    // Add assertions for other restaurant details
  });

  it("displays RestaurantDetails component within RestaurantsList", () => {
    const wrapper = mount(RestaurantsList);
    const restaurantDetails = wrapper.findAllComponents(RestaurantDetails);
    expect(restaurantDetails.length).toBe(6); // Number of restaurants defined in data

    restaurantDetails.forEach((detailWrapper) => {
      expect(detailWrapper.exists()).toBe(true);
    });
  });
});
