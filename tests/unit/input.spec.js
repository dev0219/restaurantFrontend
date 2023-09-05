import { mount } from "@vue/test-utils";
import AuthView from "@/views/AuthView.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";
import InputView from "@/components/Input.vue";

describe("AuthView", () => {
  it("renders the InputView component", () => {
    const wrapper = mount(AuthView);

    // Find the InputView component within AuthView
    const inputView = wrapper.findComponent(InputView);

    // Assert that InputView is rendered
    expect(inputView.exists()).toBe(true);
  });

  it("emits data when input value changes", async () => {
    const wrapper = mount(AuthView);

    // Find the InputView component within AuthView
    const inputView = wrapper.findComponent(InputView);

    // Simulate input value change
    const input = inputView.find("input");
    await input.setValue("Test Input");

    // Assert emitted data
    expect(wrapper.vm.inputVal).toBe("Test Input"); // Assuming you have inputVal in AuthView's data
  });

  it("is displayed on RestaurantProfileView.vue", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(InputView).exists()).toBe(true);
  });
});
