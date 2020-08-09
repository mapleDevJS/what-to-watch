import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";

import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';

import AddReview from "./add-review.jsx";
import history from "../../history.js";

import {testStore} from "../../test-data/store.js";
import {film} from "../../test-data/films.js";

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
              onSubmitClick={()=>{}}
              onRatingChange={()=>{}}
              onReviewChange={()=>{}}
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
