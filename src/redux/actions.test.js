import {Action, filterFilms, renderFilms} from "./actions.js";

describe(`Action creators work correctly`, () => {
  it(`Action creator for "filterFilms" shoul work properly`, () => {
    expect(filterFilms(`Comedy`)).toEqual({
      type: Action.CHANGE_FILTER,
      payload: `Comedy`,
    });
  });
  it(`Action creator for "renderFilms" should work properly`, () => {
    expect(renderFilms()).toEqual({
      type: Action.RENDER_FILMS
    });
  });
});
