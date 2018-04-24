import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { SearchBar } from "./SearchBar";

configure({ adapter: new Adapter() });

describe("SearchBar", () => {
  describe("view model", () => {
    let searchBar;
    beforeEach(() => {
      searchBar = new SearchBar();
    });

    describe("propertyOrFunction", () => {
      it("does something (SAMPLE)", () => {
        expect(false).toBe(true);
      });
    });
  });

  describe("bindings", () => {
    const rendered = shallow(<SearchBar />);

    it("binds div (SAMPLE)", () => {
      const elements = rendered.find('div[data-bind=""]');
      expect(elements.length).toBe(1);
    });
  });
});
