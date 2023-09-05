import { mount } from "@vue/test-utils";
import AuthView from "@/views/AuthView.vue";
import MemberReservationView from "@/views/MemberReservationView.vue";
import ConfirmMessage from "@/components/ConfirmMessage.vue";

describe("AuthView", () => {
  it("renders the ConfirmMessage component", () => {
    const wrapper = mount(AuthView);

    // Assert that ConfirmMessage is rendered within AuthView
    expect(wrapper.findComponent(ConfirmMessage).exists()).toBe(true);
  });
});

describe("ConfirmMessage", () => {
  it("computes the correct status class for success status", () => {
    const wrapper = mount(ConfirmMessage, {
      propsData: {
        content: "Test Content",
        status: 1,
      },
    });

    expect(wrapper.vm.statusClass).toBe("success");
  });

  it("computes the correct status class for failure status", () => {
    const wrapper = mount(ConfirmMessage, {
      propsData: {
        content: "Test Content",
        status: 2,
      },
    });

    expect(wrapper.vm.statusClass).toBe("failure");
  });

  it("computes no additional status class for other status values", () => {
    const wrapper = mount(ConfirmMessage, {
      propsData: {
        content: "Test Content",
        status: 3,
      },
    });

    expect(wrapper.vm.statusClass).toBe("");
  });

  it("displays ConfirmMessage component", () => {
    // Mount the MemberReservationView component
    const wrapper = mount(MemberReservationView);

    // Find the ConfirmMessage component within MemberReservationView
    const confirmMessageComponent = wrapper.findComponent(ConfirmMessage);

    // Assert that ConfirmMessage component is present
    expect(confirmMessageComponent.exists()).toBe(true);
  });

  it("displays ConfirmMessage component", () => {
    // Mount the AuthView component
    const wrapper = mount(AuthView);

    // Find the ConfirmMessage component within AuthView
    const confirmMessageComponent = wrapper.findComponent(ConfirmMessage);

    // Assert that ConfirmMessage component is present
    expect(confirmMessageComponent.exists()).toBe(true);
  });
});
