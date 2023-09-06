import { mount } from "@vue/test-utils";
import DelButtonComponent from "@/components/DelButtonComponent.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";

describe("DelButtonComponent", () => {
  it("displays on RestaurantProfileView", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(DelButtonComponent).exists()).toBe(true);
  });
});
