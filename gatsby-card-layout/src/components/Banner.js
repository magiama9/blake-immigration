import React from 'react'
import '../pages/i18n'
import { Translation, Trans } from 'react-i18next'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <Translation>
          {t=> <h1>
          {t('Hello, welcome to Blake Immigration Law')}.</h1>}
        </Translation>
      </header>
      <div className="content">
        <p>
          We specialize in Removal Defense, Asylum, and Family-based
          Immigration.
        </p>
        <p>
          Especializada en Defensa de Deportación, Asilo y Migración Familiar
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Contact/Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
