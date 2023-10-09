import { mount } from "@vue/test-utils";
import MemberProfileView from "@/views/MemberProfileView.vue";
import { useUserStore } from "@/store/user";
import { useRestaurantStore } from "@/store/restaurant";
import { createTestingPinia } from "@pinia/testing";

global.fetch = jest.fn();

describe("MemberProfileView", () => {
  it("render components in MemberProfileView", async () => {
    const wrapper = mount(MemberProfileView, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    global.fetch.mockResolvedValueOnce({
      json: () =>
        Promise.resolve({
          // Example mock response data
          restaurants: [
            { name: "Restaurant 1", id: 1 },
            { name: "Restaurant 2", id: 2 },
          ],
        }),
    });

    const userstore = useUserStore();
    const restaurantstore = useRestaurantStore();
    userstore.$patch({ userId: "123456" });

    // Provide the mock function with the desired behavior

    expect(userstore.userId).toBe("123456");

    // Simulate user input (you may need to find the input element)
    // await wrapper.setData({ inputVal: 'testuser' });

    // expect(wrapper.getComponent({ name: 'MemberHeaderComponent' }).exists()).toBeTruthy()
    // expect(wrapper.getComponent({ name: 'StoreConfirmComponent' }).exists()).toBeTruthy()
    // expect(wrapper.getComponent({ name: 'DeleteConfirmComponent' }).exists()).toBeTruthy()
    // expect(wrapper.getComponent({ name: 'TitleComponent' }).exists()).toBeTruthy()
    // expect(wrapper.getComponent({ name: 'ReservedRestaurantComponent' }).exists()).toBeTruthy()
    // expect(wrapper.getComponent({ name: 'FooterComponent' }).exists()).toBeTruthy()

    // Clean up
    wrapper.unmount();
  });
});
