import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Translation, Trans } from 'react-i18next'

const Menu = props => (
  <Translation>
    {t => (
      <nav id="menu">
        <div className="inner">
          <ul className="links">
            <li>
              <Link onClick={props.onToggleMenu} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/about">
                {t('About Us')}
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/generic">
                {t('Services')}
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/elements">
                {t('Testimonials')}
              </Link>
            </li>
          </ul>
          <ul className="actions vertical">
            <li>
              <a href="#" className="button special fit">
                Get Started
              </a>
            </li>
            <li>
              <a href="#" className="button fit">
                Log In
              </a>
            </li>
          </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">
          Close
        </a>
      </nav>
    )}
  </Translation>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
