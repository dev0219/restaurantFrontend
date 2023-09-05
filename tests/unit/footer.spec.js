import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";
import MemberProfileView from "@/views/MemberProfileView.vue";
import MemberReservationView from "@/views/MemberReservationView.vue";
import RestaurantProfileView from "@/views/RestaurantProfileView.vue";

describe("Footer", () => {
  it("renders the footer text", () => {
    const wrapper = mount(Footer);
    expect(wrapper.text()).toContain("@CopyRight");
  });

  it("displays FooterView component on MemberProfileView", () => {
    const wrapper = mount(MemberProfileView);
    expect(wrapper.findComponent(Footer).exists()).toBe(true);
  });

  it("displays FooterView component on MemberReservationView", () => {
    const wrapper = mount(MemberReservationView);
    expect(wrapper.findComponent(Footer).exists()).toBe(true);
  });

  it("displays FooterView component on RestaurantProfileView", () => {
    const wrapper = mount(RestaurantProfileView);
    expect(wrapper.findComponent(Footer).exists()).toBe(true);
  });
});
