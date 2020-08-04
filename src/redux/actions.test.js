import {Action, filterFilms, showMore} from "./actions.js";

describe(`Action creators work correctly`, () => {
  it(`Action creator for "filterFilms" shoul work properly`, () => {
    expect(filterFilms(`Comedy`)).toEqual({
      type: Action.CHANGE_FILTER,
      payload: `Comedy`,
    });
  });
  it(`Action creator for "showMore" should work properly`, () => {
    expect(showMore()).toEqual({
      type: Action.SHOW_MORE
    });
  });
});
