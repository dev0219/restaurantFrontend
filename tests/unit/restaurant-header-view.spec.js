import { mount } from "@vue/test-utils";
import RestaurantHeaderView from "@/components/RestaurantHeaderView.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";

describe("RestautaurantHeaderView.vue", () => {
  it("is displayed on RestaurantProfileView.vue", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(RestaurantHeaderView).exists()).toBe(true);
  });
});
