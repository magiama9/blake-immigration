import React from 'react'
import { Link } from 'gatsby'
import '../assets/locales/i18n'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

import { Translation, Trans } from 'react-i18next'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Blake Immigration Law"
          meta={[
            {
              name: 'description',
              content:
                'Blake Immigration Law -- Specializing in Removal Defense, Asylum, and Family-based Immigration',
            },
            {
              name: 'keywords',
              content:
                'immigration, law, asylum, Jillian Blake, removal defense, removal, defense, family, immigration',
            },
          ]}
        ></Helmet>

        <Banner />

        <Translation>
          {t => (
            <div id="main">
              <section id="one" className="tiles">
                <article style={{ backgroundImage: `url(${pic03})` }}>
                  <header className="major">
                    <h3>{t('About Us')}</h3>
                    <p>{t('Meet our team')}</p>
                  </header>

                  <Link to="/about" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${pic01})` }}>
                  <header className="major">
                    <h3>{t('Services')}</h3>
                    <p>
                      {t(
                        'Removal Defense, Humanitarian Visas, Family-based Immigration, Naturalization'
                      )}
                    </p>
                  </header>
                  <Link to="/services" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${pic02})` }}>
                  <header className="major">
                    <h3>Servicios</h3>
                    <p>
                      Defensa de Deportación, Visas Humanitarias, Peticiones
                      Familiares, Naturalización
                    </p>
                  </header>
                  <Link to="/services" className="link primary"></Link>
                </article>

                <article style={{ backgroundImage: `url(${pic04})` }}>
                  <header className="major">
                    <h3>{t('Social Media')}</h3>
                    <p>{t('Stay Up To Date')}</p>
                  </header>
                  <Link to="/landing" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${pic05})` }}>
                  <header className="major">
                    <h3>{t('Victories')}</h3>
                    <p>{t("See what we've done")}</p>
                  </header>
                  <Link to="/landing" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${pic06})` }}>
                  <header className="major">
                    <h3>{t('Testimonials')}</h3>
                    <p>{t("Hear from people we've helped")}</p>
                  </header>
                  <Link to="/landing" className="link primary"></Link>
                </article>
              </section>
              <section id="two">
                <div className="inner">
                  <header className="major">
                    <h2>{t('Mission')}</h2>
                  </header>
                  <p>
                    {t(
                      'Our law firm is dedicated to offering excellent, affordable legal services to immigrants and refugees in the Washington, DC area. We represent our clients before the Arlington and Baltimore Immigration Courts, the Board of Immigration Appeals (BIA) and U.S. Citizenship and Immigration Services (USCIS) with a focus on removal (deportation) defense asylum and family-based immigrant petitions. Our office is conveniently located in Old Town Alexandria, Virginia.'
                    )}
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/landing" className="button next">
                        Get Started
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          )}
        </Translation>
      </Layout>
    )
  }
}

export default HomeIndex
