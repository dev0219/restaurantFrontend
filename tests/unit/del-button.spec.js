import { mount } from "@vue/test-utils";
import DelButton from "@/components/DelButton.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";

describe("DelButton", () => {
  it("displays on RestaurantProfileView", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(DelButton).exists()).toBe(true);
  });
});
