import React from "react";
import { shallow, configure } from "enzyme";
import { App } from "./App";
import { SearchTabs } from "./SearchTabs/SearchTabs";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  describe("bindings", () => {
    const rendered = shallow(<App />);

    describe("SearchTabs", () => {
      const element = rendered.find(SearchTabs).first();
      it("is present", () => {
        expect(element.getElement()).toBeTruthy();
      });
    });
  });
});
