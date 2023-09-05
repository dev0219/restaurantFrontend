import { mount } from "@vue/test-utils";
import AuthView from "@/views/AuthView.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";
import InputTitleView from "@/components/InputTitle.vue";

describe("InputTitleView", () => {
  it("renders the InputTitleView component", () => {
    const wrapper = mount(AuthView);

    // Find the InputTitleView component within AuthView
    const inputTitleView = wrapper.findComponent(InputTitleView);

    // Assert that InputTitleView is rendered
    expect(inputTitleView.exists()).toBe(true);
    expect(inputTitleView.props("name")).toBe("User Name");
  });

  it("is displayed on RestaurantProfileView.vue", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(InputTitleView).exists()).toBe(true);
  });
});
