import { mount } from '@vue/test-utils';
import AuthView from '@/views/AuthView.vue';
import { useUserStore } from '@/store/user';
import { createTestingPinia } from '@pinia/testing';





describe('AuthView', () => {
  it('handles login click correctly', async () => {

    const wrapper = mount(AuthView, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    
    const store = useUserStore();
    store.$patch({userId:"123456"})


    // Provide the mock function with the desired behavior
    
    expect(store.userId).toBe('123456')

    // Simulate user input (you may need to find the input element)
    await wrapper.setData({ inputVal: 'testuser' });

    // Trigger the login click handler
    await wrapper.vm.handleLoginClick();

    // Wait for async operations to complete (e.g., setTimeout)
    await new Promise((resolve) => setTimeout(resolve, 2000));   

    // Clean up
    wrapper.unmount();
  });
});