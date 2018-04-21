import React from "react";
import { shallow, configure } from "enzyme";
import { App } from "./App";
import { Header } from "./Header/Header";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  describe("bindings", () => {
    const rendered = shallow(<App />);

    describe("Header", () => {
      const element = rendered.find(Header).first();
      it("is present", () => {
        expect(element.getElement()).toBeTruthy();
      });
    });
  });
});
