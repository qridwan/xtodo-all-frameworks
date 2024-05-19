import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import RouteComponent from "./index.vue";
import { describe, it, expect } from "vitest";

// Mock router
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: RouteComponent }],
});

describe("RouteComponent", () => {
  it("testing index.vue", async () => {
    router.push("/test");
    await router.isReady();

    const wrapper = mount(RouteComponent, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find("p").text()).toBe("Current route: /test");
  });
});
