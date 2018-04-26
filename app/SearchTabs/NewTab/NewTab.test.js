import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { NewTab } from "./NewTab";

configure({ adapter: new Adapter() });

describe("NewTab", () => {
  describe("view model", () => {
    let newTab;
    beforeEach(() => {
      newTab = new NewTab();
    });

    describe("propertyOrFunction", () => {
      it("does something (SAMPLE)", () => {
        expect(false).toBe(true);
      });
    });
  });

  describe("bindings", () => {
    const rendered = shallow(<NewTab />);

    it("binds div (SAMPLE)", () => {
      const elements = rendered.find('div[data-bind=""]');
      expect(elements.length).toBe(1);
    });
  });
});
