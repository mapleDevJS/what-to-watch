import * as React from "react";
import {Link} from "react-router-dom";

import Logo from "../logo/logo";
import {AppRoute} from "../../consts";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Link
          to={AppRoute.ROOT}
          className="logo__link logo__link--light">
          <Logo />
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
