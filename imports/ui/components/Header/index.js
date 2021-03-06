import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router'

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <div>
        <Link to='/'>
          <Img src="/images/logo.jpg" alt="Champ Pool Manager - Logo" />
        </Link>
    </div>
    );
  }
}

export default Header;
