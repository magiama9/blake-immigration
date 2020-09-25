import React from 'react'
import { Link } from 'gatsby'
import '../assets/locales/i18n'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import { FacebookProvider, Page } from 'react-facebook'

import { Translation, Trans } from 'react-i18next'

class Social extends React.Component {
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
        >
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0"
            nonce="mKhMuasq"
          ></script>
        </Helmet>
        <Translation>
          {t => (
            <FacebookProvider appId="123456789">
              <div>
                <BannerLanding title={t('Social')} />

                <div id="main" className="alt">
                  <section id="one">
                    <div className="inner">
                      <header className="major">
                        <h1>Elements</h1>
                      </header>

                      <h2 id="content">Sample Content</h2>
                      <div className="grid-wrapper">
                        <div className="col-6">
                          <div id="fb-root"></div>
                          <div
                            class="fb-page"
                            data-href="https://www.facebook.com/blakeimmigration/"
                            data-tabs="timeline"
                            data-width="500"
                            data-height="1000"
                            data-small-header="false"
                            data-adapt-container-width="false"
                            data-hide-cover="false"
                            data-show-facepile="true"
                          >
                            <blockquote
                              cite="https://www.facebook.com/blakeimmigration/"
                              class="fb-xfbml-parse-ignore"
                            >
                              <a href="https://www.facebook.com/blakeimmigration/">
                                Blake Immigration Law
                              </a>
                            </blockquote>
                          </div>

                          <h3>{t('Removal Defense')}</h3>
                          <p>
                            <ul>
                              <li>{t('Asylum/Witholding of Removal')}</li>
                              <li>
                                {t(
                                  'Convention Against Torture (CAT) Protection'
                                )}
                              </li>
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
                              <li>
                                {t(
                                  'Convention Against Torture (CAT) Protection'
                                )}
                              </li>
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
                              <li>
                                {t(
                                  'Convention Against Torture (CAT) Protection'
                                )}
                              </li>
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
            </FacebookProvider>
          )}
        </Translation>
      </Layout>
    )
  }
}

export default Social
