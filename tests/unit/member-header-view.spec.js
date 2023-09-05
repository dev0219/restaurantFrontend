import { mount } from "@vue/test-utils";
import MemberHeaderView from "@/components/MemberHeaderView.vue";
import MemberReservationView from "@/views/MemberReservationView.vue";
import MemberProfileView from "@/views/MemberProfileView.vue";
import MemberRestaurantsView from "@/views/MemberRestaurantsView.vue";

describe("MemberHeaderView", () => {
  it('redirects to login page on "Sign Out" button click', async () => {
    const wrapper = mount(MemberProfileView);

    // Find the MemberHeaderView component within MemberProfileView
    const memberHeaderView = wrapper.findComponent(MemberHeaderView);

    // Spy on the window.location.assign method
    const assignMock = jest.spyOn(window.location, "assign");

    // Find the "Sign Out" button within MemberHeaderView
    const signOutButton = memberHeaderView.find(".button").at(0);

    // Simulate a button click
    signOutButton.trigger("click");

    // Wait for the next tick for the promise to resolve
    await wrapper.vm.$nextTick();

    // Assert the redirection logic
    expect(assignMock).toHaveBeenCalledWith("/login");

    // Restore the original method
    assignMock.mockRestore();
  });

  it('redirects to member restaurants page on "Restaurants" button click', async () => {
    const wrapper = mount(MemberProfileView);

    // Find the MemberHeaderView component within MemberProfileView
    const memberHeaderView = wrapper.findComponent(MemberHeaderView);

    // Spy on the window.location.assign method
    const assignMock = jest.spyOn(window.location, "assign");

    // Find the "Restaurants" button within MemberHeaderView
    const restaurantsButton = memberHeaderView.find(".button").at(1);

    // Simulate a button click
    restaurantsButton.trigger("click");

    // Wait for the next tick for the promise to resolve
    await wrapper.vm.$nextTick();

    // Assert the redirection logic
    expect(assignMock).toHaveBeenCalledWith("/memberrestaurants");

    // Restore the original method
    assignMock.mockRestore();
  });

  it('redirects to member profile page on "Profile" button click', async () => {
    const wrapper = mount(MemberProfileView);

    // Find the MemberHeaderView component within MemberProfileView
    const memberHeaderView = wrapper.findComponent(MemberHeaderView);

    // Spy on the window.location.assign method
    const assignMock = jest.spyOn(window.location, "assign");

    // Find the "Profile" button within MemberHeaderView
    const profileButton = memberHeaderView.find(".button").at(2);

    // Simulate a button click
    profileButton.trigger("click");

    // Wait for the next tick for the promise to resolve
    await wrapper.vm.$nextTick();

    // Assert the redirection logic
    expect(assignMock).toHaveBeenCalledWith("/memberprofile");

    // Restore the original method
    assignMock.mockRestore();
  });

  it("displays MemberHeaderView component", () => {
    const wrapper = mount(MemberReservationView);
    expect(wrapper.findComponent(MemberHeaderView).exists()).toBe(true);
  });

  it("displays MemberHeaderView component", () => {
    const wrapper = mount(MemberProfileView);
    expect(wrapper.findComponent(MemberHeaderView).exists()).toBe(true);
  });

  it("displays MemberHeaderView component", () => {
    const wrapper = mount(MemberRestaurantsView);
    expect(wrapper.findComponent(MemberHeaderView).exists()).toBe(true);
  });
});
