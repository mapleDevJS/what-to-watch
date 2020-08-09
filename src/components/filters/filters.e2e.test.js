import React from "react";

import {Provider} from "react-redux";

import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Filters from "./filters.jsx";


import {api} from "../../test-data/api.js";
import {testStore} from "../../test-data/store.js";

const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);
const store = mockStore(testStore);

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Filters e2e tests`, () => {
  it(`Should filter be clciked`, () => {
    const onFilterChangeHandler = jest.fn();
    const mockEvent = jest.fn();

    const filters = shallow(
        <Provider store = {store}>
          <Filters
            activeFilter = {`All genres`}
            onFilterChange = {onFilterChangeHandler}
            filters = {[`All genres`, `Drama`, `Comedy`]}
          />
        </Provider>
    );

    const filterItems = filters.find(`.catalog__genres-item`);
    filterItems.forEach((filterItem) => filterItem.simulate(`click`, mockEvent));
    expect(onFilterChangeHandler).toHaveBeenCalledTimes(filterItems.length);
    expect(onFilterChangeHandler.mock.calls[0][0]).toBe(`All genres`);
    expect(onFilterChangeHandler.mock.calls[1][0]).toBe(`Drama`);
  });
});
