import React from 'react'
import '../assets/locales/i18n'
import { Translation, Trans } from 'react-i18next'

const Banner = props => (
  <Translation>
    {t => (
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>{t('Hello, welcome to Blake Immigration Law')}.</h1>
          </header>
          <div className="content">
            <p>
              {t(
                'We specialize in Removal Defense, Asylum, and Family-based Immigration'
              )}
            </p>

            <ul className="actions">
              <li>
                <a href="#contact" className="button next scrolly">
                  {t('Contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )}
  </Translation>
)

export default Banner
