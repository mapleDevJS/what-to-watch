import React from "react";
// import {Router} from "react-router-dom";

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SignIn from "./sign-in.jsx";
// import history from "../../history.js";

jest.mock(`react-router-dom`);

Enzyme.configure({
  adapter: new Adapter(),
});

const Settings = {
  login: `test@test.com`,
  password: `testtest`,
};

it(`Should form be submited`, () => {
  const onSubmitHandler = jest.fn();

  const signIn = mount(

      <SignIn
        onSubmit={onSubmitHandler}
        authorizationError = {false}
      />

  );

  const {loginRef, passwordRef} = signIn.instance();
  loginRef.current.value = Settings.login;
  passwordRef.current.value = Settings.password;

  const form = signIn.find(`.sign-in__form`);
  form.simulate(`submit`);
  expect(onSubmitHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitHandler).toHaveBeenCalledWith(Settings);
});
