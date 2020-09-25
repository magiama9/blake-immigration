import React from 'react'
import { Link } from 'gatsby'
import '../assets/locales/i18n'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import { Translation, Trans } from 'react-i18next'

class Services extends React.Component {
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
        <Translation>
          {t => (
            <div>
              <BannerLanding title={t('Services')} />

              <div id="main" className="alt">
                <section id="one">
                  <div className="inner">
                    
                    
                    <div className="grid-wrapper">
                      <div className="col-6">
                        <h3>{t('Removal Defense')}</h3>
                        <p>
                          <ul>
                            <li>{t('Asylum/Witholding of Removal')}</li>
                            <li>{t('Convention Against Torture (CAT) Protection')}</li>
                            <li>{t('Cancellation of Removal')}</li>
                            <li>{t('Bond Hearings')}</li>
                            <li>{t('Prosecutorial Discretion')}</li>
                            <li>{t('Immigration Appeals')}</li>
                          </ul>
                        </p>
                      </div>
                      <div className="col-6">
                        <h3>{t('Humanitarian Visas')}</h3>
                        <p>
                        <ul>
                            <li>{t('Asylum/Witholding of Removal')}</li>
                            <li>{t('Convention Against Torture (CAT) Protection')}</li>
                            <li>{t('Cancellation of Removal')}</li>
                            <li>{t('Bond Hearings')}</li>
                            <li>{t('Prosecutorial Discretion')}</li>
                          </ul>
                        </p>
                      </div>
                      <div className="col-6">
                        <h3>{t('Family-based Immigration')}</h3>
                        <p>
                        <ul>
                            <li>{t('Asylum/Witholding of Removal')}</li>
                            <li>{t('Convention Against Torture (CAT) Protection')}</li>
                            <li>{t('Cancellation of Removal')}</li>
                            <li>{t('Bond Hearings')}</li>
                            <li>{t('Prosecutorial Discretion')}</li>
                            <li>{t('Immigration Appeals')}</li>
                          </ul>
                        </p>
                      </div>
                      <div className="col-6">
                        <h3>{t('Naturalization')}</h3>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}
        </Translation>
      </Layout>
    )
  }
}

export default Services
