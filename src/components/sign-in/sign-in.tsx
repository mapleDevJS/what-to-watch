import * as React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";


import Logo from "../logo/logo";
import Footer from "../footer/footer";

import {Operation as UserOperation} from "../../store/reducers/user/user";

import {AppRoute} from "../../consts";
import {getAuthorizationError} from "../../store/reducers/user/selectors";

interface Props {
  authorizationError: boolean;
  login: ({}) => void;
}

class SignIn extends React.PureComponent<Props> {
  props: Props;

  private loginRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

  }

  render() {
    const {authorizationError} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Link
            to={AppRoute.ROOT}
            className="logo__link"
          >
            <Logo />
          </Link>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form"
            onSubmit={(evt) => {
              evt.preventDefault();
              this.props.login({
                login: this.loginRef.current.value,
                password: this.passwordRef.current.value,
              });
            }}
          >
            {
              authorizationError ?
                <div className="sign-in__message">
                  <p>Please enter a valid email address</p>
                </div> : ``
            }
            <div className="sign-in__fields">
              <div className={authorizationError ? `sign-in__field sign-in__field--error` : `sign-in__field`}>
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref={this.loginRef}
                  required
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  ref={this.passwordRef}
                  required
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationError: getAuthorizationError(state)
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(UserOperation.login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
