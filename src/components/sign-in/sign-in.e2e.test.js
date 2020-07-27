import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignIn from "./sign-in.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const Settings = {
  login: ``,
  password: ``,
};

it(`Should form be submited`, () => {
  const onSubmitHandler = jest.fn();

  const signIn = mount(
      <SignIn
        onSubmit={onSubmitHandler}
        authorizationError = {false}
      />
  );

  const form = signIn.find(`.sign-in__form`);
  form.simulate(`submit`);
  expect(onSubmitHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitHandler).toHaveBeenCalledWith(Settings);
});
