import React from 'react'
import { Link } from 'gatsby'
import '../assets/locales/i18n'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import services from '../assets/images/services.jpg'
import contact from '../assets/images/contact.png'
import aboutus from '../assets/images/aboutus.jpg'
import socialmedia from '../assets/images/socialmedia.jpg'
import victories from '../assets/images/victories.jpg'
import testimonials from '../assets/images/testimonials.jpg'

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
                <article style={{ backgroundImage: `url(${aboutus})` }}>
                  <header className="major">
                    <h3>{t('About Us')}</h3>
                    <p>{t('Meet our team')}</p>
                  </header>

                  <Link to="/about" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${services})` }}>
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

                <article style={{ backgroundImage: `url(${testimonials})` }}>
                  <header className="major">
                    <h3>{t('Testimonials')}</h3>
                    <p>{t("Hear from people we've helped")}</p>
                  </header>
                  <Link to="/testimonials" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${victories})` }}>
                  <header className="major">
                    <h3>{t('Victories')}</h3>
                    <p>{t("See what we've done")}</p>
                  </header>
                  <Link to="/victories" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${socialmedia})` }}>
                  <header className="major">
                    <h3>{t('Social Media')}</h3>
                    <p>{t('Stay Up To Date')}</p>
                  </header>
                  <Link to="/social" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${contact})` }}>
                  <header className="major">
                    <h3>{t('Contact Us')}</h3>
                    <p>{t('Call Us For A Consultation')}</p>
                  </header>
                  <Link to="/contact" className="link primary"></Link>
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
                      <a href="tel:703-594-7857" className="button next">
                        {t('Call Us For A Consultation')}
                      </a>
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
