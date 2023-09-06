import { mount } from "@vue/test-utils";
import CategorySelectComponent from "@/components/CategorySelectComponent.vue";
import MemberRestaurantsView from "@/views/MemberRestaurantsView.vue";

describe("CategorySelectComponent.vue", () => {
  it("displays CategorySelectComponent component", () => {
    const wrapper = mount(MemberRestaurantsView);
    expect(wrapper.findComponent(CategorySelectComponent).exists()).toBe(true);
  });

  it("displays the options", () => {
    const wrapper = mount(CategorySelectComponent);
    const options = wrapper.findAll(".container option");
    expect(options.length).toBe(5); // Number of options defined in data
  });

  it("toggles options when clicked", async () => {
    const wrapper = mount(CategorySelectComponent);
    const options = wrapper.findAll(".container option");

    await options[0].trigger("click"); // Click on the first option
    expect(wrapper.vm.selections).toContain("Italian Food");

    await options[1].trigger("click"); // Click on the second option
    expect(wrapper.vm.selections).toContain("French Food");
    expect(wrapper.vm.selections).toContain("Italian Food"); // Italian Food should still be selected

    await options[0].trigger("click"); // Click on the first option again to deselect
    expect(wrapper.vm.selections).not.toContain("Italian Food");
  });

  it('toggles "All Selected" option', async () => {
    const wrapper = mount(CategorySelectComponent);
    const allSelectedOption = wrapper.find(
      '.container option[value="All Selected"]'
    );

    await allSelectedOption.trigger("click"); // Click on "All Selected" option
    expect(wrapper.vm.selections).toEqual([
      "Italian Food",
      "French Food",
      "Asian Food",
      "Mid. Eastern Food",
    ]);

    await allSelectedOption.trigger("click"); // Click on "All Selected" option again to deselect
    expect(wrapper.vm.selections).toEqual([]);
  });

  it('clears selections when "Clear" icon is clicked', async () => {
    const wrapper = mount(CategorySelectComponent);
    const options = wrapper.findAll(".container option");

    await options[0].trigger("click"); // Click on the first option
    await options[1].trigger("click"); // Click on the second option

    const clearIcon = wrapper.find(".close-icon");
    await clearIcon.trigger("click"); // Click on the "Clear" icon
    expect(wrapper.vm.selections).toEqual([]);
  });
});
