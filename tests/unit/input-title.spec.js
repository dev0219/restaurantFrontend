import { mount } from "@vue/test-utils";
import AuthView from "@/views/AuthView.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";
import InputTitleComponent from "@/components/InputTitleComponent.vue";

describe("InputTitleComponent", () => {
  it("renders the InputTitleComponent", () => {
    const wrapper = mount(AuthView);

    // Find the InputTitleComponent within AuthView
    const inputTitleView = wrapper.findComponent(InputTitleComponent);

    // Assert that InputTitleComponent is rendered
    expect(inputTitleView.exists()).toBe(true);
    expect(inputTitleView.props("name")).toBe("User Name");
  });

  it("is displayed on RestaurantProfileView.vue", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(InputTitleComponent).exists()).toBe(true);
  });
});
