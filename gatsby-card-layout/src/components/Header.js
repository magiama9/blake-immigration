import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/images/horizontal-header.png'
const Header = props => (
  <header id="header" className="alt" style={{ outline: 0 }}>
    {/* <Link to="/"> */}

    <img src={logo} className="logo" style={{ paddingTop: '1em' }} />

    {/* </Link> */}
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
