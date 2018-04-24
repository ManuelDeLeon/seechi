import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { SearchTabs } from "./SearchTabs";

configure({ adapter: new Adapter() });

describe("SearchTabs", () => {
  describe("view model", () => {
    let searchTabs;
    beforeEach(() => {
      searchTabs = new SearchTabs();
    });

    describe("propertyOrFunction", () => {
      it("does something (SAMPLE)", () => {
        expect(false).toBe(true);
      });
    });
  });

  describe("bindings", () => {
    const rendered = shallow(<SearchTabs />);

    it("binds div (SAMPLE)", () => {
      const elements = rendered.find('div[data-bind=""]');
      expect(elements.length).toBe(1);
    });
  });
});
