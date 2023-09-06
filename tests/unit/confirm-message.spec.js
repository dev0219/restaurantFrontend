import { mount } from "@vue/test-utils";
import AuthView from "@/views/AuthView.vue";
import MemberReservationView from "@/views/MemberReservationView.vue";
import ConfirmMessageComponent from "@/components/ConfirmMessageComponent.vue";

describe("AuthView", () => {
  it("renders the ConfirmMessageComponent component", () => {
    const wrapper = mount(AuthView);

    // Assert that ConfirmMessageComponent is rendered within AuthView
    expect(wrapper.findComponent(ConfirmMessageComponent).exists()).toBe(true);
  });
});

describe("ConfirmMessageComponent", () => {
  it("computes the correct status class for success status", () => {
    const wrapper = mount(ConfirmMessageComponent, {
      propsData: {
        content: "Test Content",
        status: 1,
      },
    });

    expect(wrapper.vm.statusClass).toBe("success");
  });

  it("computes the correct status class for failure status", () => {
    const wrapper = mount(ConfirmMessageComponent, {
      propsData: {
        content: "Test Content",
        status: 2,
      },
    });

    expect(wrapper.vm.statusClass).toBe("failure");
  });

  it("computes no additional status class for other status values", () => {
    const wrapper = mount(ConfirmMessageComponent, {
      propsData: {
        content: "Test Content",
        status: 3,
      },
    });

    expect(wrapper.vm.statusClass).toBe("");
  });

  it("displays ConfirmMessageComponent component", () => {
    // Mount the MemberReservationView component
    const wrapper = mount(MemberReservationView);

    // Find the ConfirmMessageComponent component within MemberReservationView
    const confirmMessageComponent = wrapper.findComponent(ConfirmMessageComponent);

    // Assert that ConfirmMessageComponent component is present
    expect(confirmMessageComponent.exists()).toBe(true);
  });

  it("displays ConfirmMessageComponent component", () => {
    // Mount the AuthView component
    const wrapper = mount(AuthView);

    // Find the ConfirmMessageComponent component within AuthView
    const confirmMessageComponent = wrapper.findComponent(ConfirmMessageComponent);

    // Assert that ConfirmMessageComponent component is present
    expect(confirmMessageComponent.exists()).toBe(true);
  });
});
