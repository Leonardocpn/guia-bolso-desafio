import React from "react";
import { mount } from "enzyme";
import FactCard from "../pages/home/components/facts";
import { CategoryProvider } from "../service/categoryContext";

it("should render Fact Card", () => {
  const component = mount(
    <CategoryProvider>
      <FactCard />
    </CategoryProvider>
  );
  expect(component).toMatchSnapshot();
});
