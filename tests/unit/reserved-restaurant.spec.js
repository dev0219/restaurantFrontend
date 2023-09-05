import { mount } from "@vue/test-utils";
import ReservedRestaurant from "@/components/ReservedRestaurant.vue";
import MemberProfileView from "@/views/MemberProfileView.vue"; // Make sure to import the MemberProfileView component

describe("MemberProfileView", () => {
  it("renders ReservedRestaurant component", () => {
    const wrapper = mount(MemberProfileView);

    // Assert that the ReservedRestaurant component is rendered within MemberProfileView
    expect(wrapper.findComponent(ReservedRestaurant).exists()).toBe(true);
  });
});

describe("ReservedRestaurant", () => {
  it("renders correctly", () => {
    const wrapper = mount(ReservedRestaurant, {
      propsData: {
        name: "Test Restaurant",
        date: "2023-08-27",
        seats: "12,14",
      },
    });

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true);

    // Assert that the rendered text matches the props
    expect(wrapper.text()).toContain("Restaurant Name :Test Restaurant");
    expect(wrapper.text()).toContain("Date :2023-08-27");
    expect(wrapper.text()).toContain("Seats :12,14");
  });

  it('calls DeleteReserved method on "Delete" button click', async () => {
    const wrapper = mount(ReservedRestaurant);

    // Mock the method to check if it's called
    const mockDeleteReserved = jest.fn();
    wrapper.setMethods({
      DeleteReserved: mockDeleteReserved,
    });

    // Find the "Delete" button using the correct selector
    const deleteButton = wrapper.find(".button-element .button");

    // Trigger the "Delete" button click
    await deleteButton.trigger("click");

    // Assert that the DeleteReserved method was called
    expect(mockDeleteReserved).toHaveBeenCalled();
  });
});
