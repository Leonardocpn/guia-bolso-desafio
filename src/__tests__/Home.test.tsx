import React from "react";
import { mount } from "enzyme";
import Home from "../pages/home/";
import { CategoryProvider } from "../service/categoryContext";

it("should render Home", () => {
  const component = mount(
    <CategoryProvider>
      <Home />
    </CategoryProvider>
  );

  expect(component).toMatchSnapshot();
});

it("should display image", () => {
  const wrapper = mount(
    <CategoryProvider>
      <Home />
    </CategoryProvider>
  );

  expect(wrapper.find("img")).toHaveLength(1);
});
