import { mount } from "@vue/test-utils";
import AuthView from "@/views/AuthView.vue";
import MemberProfileView from "@/views/MemberProfileView.vue";
import MemberReservationView from "@/views/MemberReservationView.vue";
import MemberRestaurantsView from "@/views/MemberRestaurantsView.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";
import TitleView from "@/components/Title.vue";

describe("TitleView", () => {
  it("renders the TitleView component", () => {
    const wrapper = mount(AuthView);

    // Find the TitleView component within AuthView
    const titleView = wrapper.findComponent(TitleView);

    // Assert that TitleView is rendered
    expect(titleView.exists()).toBe(true);
    expect(titleView.props("title")).toBe("Login");
  });

  it("renders the TitleView component with the correct title", () => {
    const wrapper = mount(MemberProfileView);

    // Find the TitleView component within MemberProfileView
    const titleView = wrapper.findComponent(TitleView);

    // Assert that TitleView is rendered
    expect(titleView.exists()).toBe(true);

    // Assert the title prop of TitleView
    expect(titleView.props("title")).toBe("Member Profile");
  });

  it("renders the title text", () => {
    const title = "Book Reservation";
    const wrapper = mount(TitleView, {
      propsData: {
        title: title,
      },
    });
    expect(wrapper.text()).toContain(title);
  });

  it("displays TitleView component", () => {
    const wrapper = mount(MemberReservationView);
    expect(wrapper.findComponent(TitleView).exists()).toBe(true);
  });

  it("displays TitleView component", () => {
    // Mount the MemberRestaurantsView component
    const wrapper = mount(MemberRestaurantsView);

    // Find the TitleView component within MemberRestaurantsView
    const titleComponent = wrapper.findComponent(TitleView);

    // Assert that TitleView component is present
    expect(titleComponent.exists()).toBe(true);
  });

  it("is displayed on RestaurantProfileView.vue", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(TitleView).exists()).toBe(true);
  });
});
