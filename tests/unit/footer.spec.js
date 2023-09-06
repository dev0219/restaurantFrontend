import { mount } from "@vue/test-utils";
import FooterComponent from "@/components/FooterComponent.vue";
import MemberProfileView from "@/views/MemberProfileView.vue";
import MemberReservationView from "@/views/MemberReservationView.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";

describe("FooterComponent", () => {
  it("renders the footer text", () => {
    const wrapper = mount(FooterComponent);
    expect(wrapper.text()).toContain("@CopyRight");
  });

  it("displays FooterComponent component on MemberProfileView", () => {
    const wrapper = mount(MemberProfileView);
    expect(wrapper.findComponent(FooterComponent).exists()).toBe(true);
  });

  it("displays FooterComponen component on MemberReservationView", () => {
    const wrapper = mount(MemberReservationView);
    expect(wrapper.findComponent(FooterComponent).exists()).toBe(true);
  });

  it("displays FooterComponent component on RestaurantProfileView", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(FooterComponent).exists()).toBe(true);
  });
});
