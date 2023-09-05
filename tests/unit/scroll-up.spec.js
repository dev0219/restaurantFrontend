import { mount } from "@vue/test-utils";
import ScrollUp from "@/components/ScrollUp.vue";
// import MemberRestaurantsView from "@/views/MemberRestaurantsView.vue"; // Import the MemberRestaurantsView component

describe("ScrollUp.vue", () => {
  it("renders the ScrollUp component", () => {
    const wrapper = mount(ScrollUp);
    expect(wrapper.exists()).toBe(true);
  });

  it("scrolls to top when button is clicked", async () => {
    const scrollToElementMock = jest.spyOn(ScrollUp.methods, "scrollToElement");
    const wrapper = mount(ScrollUp);
    const scrollButton = wrapper.find(".scroll-button");
    await scrollButton.trigger("click");
    expect(scrollToElementMock).toHaveBeenCalledWith("h1");
    scrollToElementMock.mockRestore();
  });
});
