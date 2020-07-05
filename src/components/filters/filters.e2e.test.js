import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Filters from "./filters.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Filters e2e tests`, () => {
  it(`Should filter be clciked`, () => {
    const onFilterChangeHandler = jest.fn();
    const preventDefault = jest.fn();

    const filters = shallow(
        <Filters
          activeFilter = {`All genres`}
          onFilterChange = {onFilterChangeHandler}
          filters = {[`All genres`, `Drama`, `Comedy`]}
        />
    );

    const filtersElements = filters.find(`.catalog__genres-list`);
    filtersElements.forEach((filter) => filter.simulate(`click`, {preventDefault, target: {textContent: `All genres`}}));
    expect(onFilterChangeHandler).toHaveBeenCalledTimes(filtersElements.length);
    expect(onFilterChangeHandler.mock.calls[0][0]).toBe(`All genres`);
  });
});
