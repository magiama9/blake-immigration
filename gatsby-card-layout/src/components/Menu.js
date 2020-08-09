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
                {t('Home')}
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/about">
                {t('About Us')}
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/services">
                {t('Services')}
              </Link>
            </li>
            
            <li>
              <Link onClick={props.onToggleMenu} to="/testimonials">
                {t('Testimonials')}
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/victories">
                {t('Victories')}
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/social">
                {t('Social Media')}
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/contact">
                {t('Contact')}
              </Link>
            </li>
          </ul>
          <ul className="actions vertical">
            <li>
              <a href="tel:703-594-7857" className="button special fit">
               {t("Call Us")} - (703)594-7857
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
