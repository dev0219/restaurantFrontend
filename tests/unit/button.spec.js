// Import the necessary components and testing utilities
import { mount } from "@vue/test-utils";
import ButtonView from "@/components/Button.vue";
import AuthView from "@/views/AuthView.vue";
import MemberReservationView from "@/views/MemberReservationView.vue";
import DelButtonView from "@/components/DelButton.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";

describe("Button", () => {
  it("renders the ButtonView component", () => {
    const wrapper = mount(AuthView);

    // Find the ButtonView component within AuthView
    const buttonView = wrapper.findComponent(ButtonView);

    // Assert that ButtonView is rendered
    expect(buttonView.exists()).toBe(true);
    expect(buttonView.props("name")).toBe("LOGIN");
  });

  it("emits an event when the button is clicked", async () => {
    const wrapper = mount(ButtonView);
    const button = wrapper.find(".button");

    // Simulate a button click
    await button.trigger("click");

    // Assert the emitted event
    expect(wrapper.emitted("button-clicked")).toBeTruthy(); // Use 'button-clicked' here

    // Assert the length of the emitted event array
    expect(wrapper.emitted("button-clicked").length).toBe(1);
  });

  it("displays ButtonView component", () => {
    // Mount the MemberReservationView component
    const wrapper = mount(MemberReservationView);

    // Find the ButtonView component within MemberReservationView
    const buttonComponent = wrapper.findComponent(ButtonView);

    // Assert that ButtonView component is present
    expect(buttonComponent.exists()).toBe(true);
  });

  it("is displayed on RestaurantProfileView.vue", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(ButtonView).exists()).toBe(true);
    expect(wrapper.findComponent(DelButtonView).exists()).toBe(true); // Also check for DelButton
  });

  it('calls the correct method when "Update" button is clicked', async () => {
    const wrapper = mount(RestaurantProfileView);
    await wrapper.findComponent(ButtonView).trigger("click");
    expect(wrapper.vm.restaurantName).toBe("Update button clicked");
  });

  it('calls the correct method when "Clear" button is clicked', async () => {
    const wrapper = mount(RestaurantProfileView);
    await wrapper.findComponent(DelButtonView).trigger("click"); // Use DelButtonView here
    expect(wrapper.vm.restaurantName).toBe("Clear button clicked");
  });
});
