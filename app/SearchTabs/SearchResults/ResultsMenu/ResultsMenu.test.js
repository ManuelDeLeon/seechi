import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { ResultsMenu } from "./ResultsMenu";

configure({ adapter: new Adapter() });

describe("ResultsMenu", () => {
  describe("view model", () => {
    let resultsMenu;
    beforeEach(() => {
      resultsMenu = new ResultsMenu();
    });

    describe("propertyOrFunction", () => {
      it("does something (SAMPLE)", () => {
        expect(false).toBe(true);
      });
    });
  });

  describe("bindings", () => {
    const rendered = shallow(<ResultsMenu />);

    it("binds div (SAMPLE)", () => {
      const elements = rendered.find('div[data-bind=""]');
      expect(elements.length).toBe(1);
    });
  });
});
