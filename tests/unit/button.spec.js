// Import the necessary components and testing utilities
import { mount } from "@vue/test-utils";
import ButtonComponent from "@/components/ButtonComponent.vue";
import AuthView from "@/views/AuthView.vue";
import MemberReservationView from "@/views/MemberReservationView.vue";
import DelButtonComponent from "@/components/DelButtonComponent.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";

describe("Button", () => {
  it("renders the ButtonComponent component", () => {
    const wrapper = mount(AuthView);

    // Find the ButtonComponent component within AuthView
    const buttonView = wrapper.findComponent(ButtonComponent);

    // Assert that ButtonComponent is rendered
    expect(buttonView.exists()).toBe(true);
    expect(buttonView.props("name")).toBe("LOGIN");
  });

  it("emits an event when the button is clicked", async () => {
    const wrapper = mount(ButtonComponent);
    const button = wrapper.find(".button");

    // Simulate a button click
    await button.trigger("click");

    // Assert the emitted event
    expect(wrapper.emitted("button-clicked")).toBeTruthy(); // Use 'button-clicked' here

    // Assert the length of the emitted event array
    expect(wrapper.emitted("button-clicked").length).toBe(1);
  });

  it("displays ButtonComponent component", () => {
    // Mount the MemberReservationView component
    const wrapper = mount(MemberReservationView);

    // Find the ButtonComponent component within MemberReservationView
    const buttonComponent = wrapper.findComponent(ButtonComponent);

    // Assert that ButtonComponent component is present
    expect(buttonComponent.exists()).toBe(true);
  });

  it("is displayed on RestaurantProfileView.vue", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(ButtonComponent).exists()).toBe(true);
    expect(wrapper.findComponent(DelButtonComponent).exists()).toBe(true); // Also check for DelButton
  });

  it('calls the correct method when "Update" button is clicked', async () => {
    const wrapper = mount(RestaurantProfileView);
    await wrapper.findComponent(ButtonComponent).trigger("click");
    expect(wrapper.vm.restaurantName).toBe("Update button clicked");
  });

  it('calls the correct method when "Clear" button is clicked', async () => {
    const wrapper = mount(RestaurantProfileView);
    await wrapper.findComponent(DelButtonComponent).trigger("click"); // Use DelButtonComponent here
    expect(wrapper.vm.restaurantName).toBe("Clear button clicked");
  });
});
