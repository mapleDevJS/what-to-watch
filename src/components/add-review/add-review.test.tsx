import * as React from "react";
import {Router} from "react-router-dom";
import * as renderer from "react-test-renderer";

import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';

import AddReview from "./add-review";
import history from "../../history";

import {testStore} from "../../test-data/store";
import {film} from "../../test-data/films";

import {noop} from "../../utils/utils";

const mockStore = configureStore([]);

const store = mockStore(testStore);

it(`Should add review page render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <AddReview
              film={film}
              isLoading={false}
              isError={false}
              onSubmitClick={noop}
              onRatingChange={noop}
              onReviewChange={noop}
              isSubmitDisabled={false}
            />
          </Provider>
        </Router>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
