/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
