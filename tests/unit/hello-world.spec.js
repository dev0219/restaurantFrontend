import { shallowMount, createRouter, createWebHistory } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import HomeView from "@/views/HomeView.vue";
import { nextTick } from "vue";

// Create a mock route with history
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: HomeView }],
});

describe("HelloWorld.vue", () => {
  it("navigates to HomeView on button click", async () => {
    const wrapper = shallowMount(HelloWorld, {
      global: {
        plugins: [router],
      },
    });

    // Click the button to trigger the route change
    await wrapper.find("button").trigger("click");

    // Wait for the navigation to complete
    await router.isReady();

    // Wait for the next tick to ensure component rendering
    await nextTick();

    // Check if HomeView component is rendered
    const homeViewComponent = wrapper.findComponent(HomeView);
    expect(homeViewComponent.exists()).toBe(true);
  });
});
