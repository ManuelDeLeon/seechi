import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { SearchResults } from "./SearchResults";

configure({ adapter: new Adapter() });

describe("SearchResults", () => {
  describe("view model", () => {
    let searchResults;
    beforeEach(() => {
      searchResults = new SearchResults();
    });

    describe("propertyOrFunction", () => {
      it("does something (SAMPLE)", () => {
        expect(false).toBe(true);
      });
    });
  });

  describe("bindings", () => {
    const rendered = shallow(<SearchResults />);

    it("binds div (SAMPLE)", () => {
      const elements = rendered.find('div[data-bind=""]');
      expect(elements.length).toBe(1);
    });
  });
});
